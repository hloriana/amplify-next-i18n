const superagent = require('superagent');
const dotenv = require('dotenv');
const set = require('lodash/set');
const { writeFile } = require('fs');
const { Readable } = require('stream');
const { SitemapStream, streamToPromise } = require('sitemap');
const validateConfig = require('./config.service');

// load dotenv config file and merge with process env
const { error, parsed } = dotenv.config();
// validate and return the env object, thorws and stop if errors appears during parsing
const envConfig = validateConfig({ ...process.env, ...(!error ? parsed : {}) });

const dissalow = ['smlp', 'shared', 'clp', 'design', 'settings'];

const getRoutes = async () => {
	// get the space for languages
	const promiseSpace = superagent
		.get(`${envConfig.SB_CONTENT_API}/spaces/me`)
		.accept('json')
		.type('json')
		.query({
			token:
				envConfig.ENVIRONMENT === 'production'
					? envConfig.SB_PUBLIC_TOKEN
					: envConfig.SB_PREVIEW_TOKEN,
			cv: envConfig.SB_CACHE_VERSION
		});
	// NOTE storyblok links don't need pagination
	// get the links for the routes
	const promiseLinks = superagent
		.get(`${envConfig.SB_CONTENT_API}/links`)
		.accept('json')
		.type('json')
		.query({
			token:
				envConfig.ENVIRONMENT === 'production'
					? envConfig.SB_PUBLIC_TOKEN
					: envConfig.SB_PREVIEW_TOKEN,
			version: envConfig.SB_CONTENT_VERSION,
			cv: envConfig.SB_CACHE_VERSION
		});
	// get website pages
	const promiseWebpages = superagent
		.get([envConfig.SB_CONTENT_API, 'stories'].join('/'))
		.accept('json')
		.type('json')
		.query({
			// token to use
			'token':
				envConfig.ENVIRONMENT === 'production'
					? envConfig.SB_PUBLIC_TOKEN
					: envConfig.SB_PREVIEW_TOKEN,
			// version to get
			'version': envConfig.ENVIRONMENT === 'production' ? 'published' : 'draft',
			// invalidate cache
			'cv': new Date().getTime(),
			'filter_query[component][in]': 'website_page',
			'excluding_fields': 'body',
			'per_page': 100
		});
	// get language redirects
	const promiseLanguageRedirects = superagent
		.get([envConfig.SB_CONTENT_API, 'datasource_entries'].join('/'))
		.accept('json')
		.type('json')
		.query({
			// token to use
			token:
				envConfig.ENVIRONMENT === 'production'
					? envConfig.SB_PUBLIC_TOKEN
					: envConfig.SB_PREVIEW_TOKEN,
			// invalidate cache
			cv: new Date().getTime(),
			per_page: 1000,
			datasource: 'language-redirects'
		});
	// fire them up concurrently
	try {
		const [
			resSpace,
			resLinks,
			resWebpages,
			resLangaugeRedirects
		] = await Promise.all([
			promiseSpace,
			promiseLinks,
			promiseWebpages,
			promiseLanguageRedirects
		]);
		// extract the langagues and the links
		const { language_codes: languages } = resSpace.body.space;
		const { links } = resLinks.body;
		let { stories: webPages } = resWebpages.body;
		let { datasource_entries: languageRedirects } = resLangaugeRedirects.body;

		webPages = webPages.map((page) => page.full_slug);
		languageRedirects = languageRedirects.map((language) => language.name);

		// iterate through the links to generate the routes
		return (
			Object.keys(links)
				.map((pageHash) => links[pageHash])
				// NOTE only export published stories
				.filter((link) => !link.is_folder && link.published)
				.filter((link) => !dissalow.includes(link.slug.split('/')[0]))
				.reduce((routes, link) => {
					// get the slug of the link
					const slug = link.full_slug === 'home' ? '' : `${link.slug}`;
					// eslint-disable-next-line no-console
					console.log('Mapping', `/${slug}`);

					// mutate routes to map each market version
					languages
						.filter((language) => {
							if (
								webPages.includes(link.slug) &&
								languageRedirects.includes(language)
							) {
								return false;
							}

							return true;
						})
						.forEach((marketCode) => {
							set(routes, `/${marketCode}/${slug}`, {
								page: '/[[...slug]]',
								query: {
									slug: `${marketCode}/${slug}`
								}
							});
						});

					return routes;
				}, {})
		);
	} catch (err) {
		console.log(err);

		return [];
	}
};

(async () => {
	const routes = await getRoutes();

	const links = Object.keys(routes).map((route) => {
		return {
			url: route.substr(-1) === '/' ? route : `${route}/`,
			changefreq: 'daily',
			priority: 0.3
		};
	});

	const stream = new SitemapStream({ hostname: 'https://www.efacademy.com' });

	const string = await streamToPromise(Readable.from(links).pipe(stream));

	writeFile('./public/sitemap.xml', string.toString(), () => {
		console.log('Success');
	});
})();
