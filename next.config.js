// Next.js production plugins (required in prod)
const { withPlugins, optional } = require('next-compose-plugins');
const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD
} = require('next/constants');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');
const withCSS = require('@zeit/next-css');

// webpack plugins
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// other libraries / imports
const superagent = require('superagent');
const dotenv = require('dotenv');
const set = require('lodash/set');
const validateConfig = require('./utils/config.service');

// load dotenv config file and merge with process env
const { error, parsed } = dotenv.config();
// validate and return the env object, thorws and stop if errors appears during parsing
const envConfig = validateConfig({ ...process.env, ...(!error ? parsed : {}) });

// configure Next.js plugins
const pluginsConfig = [
	// load fonts from external sources and modules
	[withFonts],
	// load many graphic elements and offer various optmizations
	[
		withOptimizedImages,
		{
			svgo: {
				plugins: [
					{
						// optmize svgs by removing bad attributes
						removeAttrs: { attrs: '(fill|stroke)' }
					}
				]
			}
		}
	],
	// load CSS stylesheets from disk
	[withCSS],
	// Next.js development plugins (required in development)
	// overall bundle analyzer
	[
		optional(() =>
			// eslint-disable-next-line global-require,import/no-extraneous-dependencies
			require('@next/bundle-analyzer')({
				enabled: envConfig.ANALYZE
			})
		),
		{},
		[PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD]
	]
];

const locales = async () => {
	const promiseSpace = superagent
		.get(`${envConfig.SB_CONTENT_API}/spaces/me`)
		.accept('json')
		.type('json')
		.query({
			token: envConfig.SB_CONTENT_TOKEN,
			cv: envConfig.SB_CACHE_VERSION
		});

	const [resSpace] = await Promise.all([promiseSpace]);

	return resSpace.body.space.language_codes;
};

const nextConfig = {
	images: {
		loader: 'imgix',
		// path: 'https://noop/',
		deviceSizes: [640, 1080, 1200, 1920],
		domains: [
			'img2.storyblok.com',
			'a.storyblok.com',
			'www.ef.com',
			'www.ef.de',
			'www.ef.com.mx',
			'www.efjapan.co.jp',
			'www.ef.no',
			'www.ef.ru',
			'www.ef.com.tw'
		]
	},
	i18n: {
		locales: [
			'en',
			'zh-cn',
			'zh-hk',
			'zh-tw',
			'en-us',
			'fr',
			'de',
			'it-it',
			'ja-jp',
			'ko-kr',
			'no-no',
			'pl-pl',
			'pt-pt',
			'ru',
			'es',
			'es-mx',
			'es-es',
			'th-th',
			'vi-vn',
			'fr-fr',
			'da-dk',
			'nl-nl',
			'de-at',
			'de-ch',
			'de-de',
			'dk-dk',
			'sv-se'
		],
		defaultLocale: 'en-us'
	},
	env: {
		ENVIRONMENT: envConfig.ENVIRONMENT,
		GTM_ID_360: envConfig.GTM_ID_360,
		SB_CONTENT_API: envConfig.SB_CONTENT_API,
		SB_CONTENT_TOKEN: (envConfig.SB_CONTENT_TOKEN = [
			'development',
			'editor',
			'staging'
		].includes(`${envConfig.ENVIRONMENT}`)
			? envConfig.SB_PREVIEW_TOKEN
			: envConfig.SB_PUBLIC_TOKEN),
		SB_CONTENT_VERSION: (envConfig.SB_CONTENT_VERSION = [
			'development',
			'editor',
			'staging'
		].includes(`${envConfig.ENVIRONMENT}`)
			? 'draft'
			: 'published'),
		SB_CACHE_VERSION: envConfig.SB_CACHE_VERSION,
		INTEGRATION_API: envConfig.INTEGRATION_API,
		LIVECHAT_ID: envConfig.LIVECHAT_ID,
		EFSET_URL: envConfig.EFSET_URL
	},
	trailingSlash: true,
	/* eslint-disable no-param-reassign */
	webpack: (config) => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty'
		};

		// Add plugins to webpack
		const { plugins = [] } = config.resolve;
		plugins.push(new TSConfigPathsPlugin());

		// Linaria CSS-in-JS
		config.module.rules.push(
			{
				test: /\.tsx$/,
				use: [
					{
						loader: 'linaria/loader',
						options: {
							sourceMap: process.env.NODE_ENV === 'development'
						}
					}
				]
			},
			{
				test: /react-spring/,
				sideEffects: true
			}
		);

		return config;
	},
	/* eslint-enable no-param-reassign */
	async exportPathMap(defaultPathMap, { dev }) {
		// eslint-disable-next-line no-console
		console.log(
			`Run in node '${process.env.NODE_ENV}' & env '${envConfig.ENVIRONMENT}'`
		);
		// when we are not exporting, use filesystem routing
		if (dev) {
			// eslint-disable-next-line no-console
			console.log('Skip exportPathMap');

			return defaultPathMap;
		}

		// get the space for languages
		const promiseSpace = superagent
			.get(`${envConfig.SB_CONTENT_API}/spaces/me`)
			.accept('json')
			.type('json')
			.query({
				token: envConfig.SB_CONTENT_TOKEN,
				cv: envConfig.SB_CACHE_VERSION
			});
		// NOTE storyblok links don't need pagination
		// get the links for the routes
		const promiseLinks = superagent
			.get(`${envConfig.SB_CONTENT_API}/links`)
			.accept('json')
			.type('json')
			.query({
				token: envConfig.SB_CONTENT_TOKEN,
				version: envConfig.SB_CONTENT_VERSION,
				cv: envConfig.SB_CACHE_VERSION
			});
		// fire them up concurrently
		const [resSpace, resLinks] = await Promise.all([
			promiseSpace,
			promiseLinks
		]);
		// extract the langagues and the links
		const { language_codes: languages } = resSpace.body.space;
		const { links } = resLinks.body;

		// iterate through the links to generate the routes
		return (
			Object.keys(links)
				.map((pageHash) => links[pageHash])
				// NOTE only export published stories
				.filter((link) => !link.is_folder && link.published)
				.reduce((routes, link) => {
					// get the slug of the link
					const slug = `${link.slug}`;
					// eslint-disable-next-line no-console
					console.log('Mapping', `/${slug}`);

					// mutate routes to map default language
					set(routes, `/${slug}`, {
						page: '/[[...slug]]',
						query: {
							slug
						}
					});
					// mutate routes to map each market version
					languages.forEach((marketCode) => {
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
	}
};

module.exports = withPlugins(pluginsConfig, nextConfig);