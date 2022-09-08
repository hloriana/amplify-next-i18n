import React from 'react';

import { CookiesProvider } from 'react-cookie';
import { NextPage, NextPageContext } from 'next';
import Error from 'next/error';
import absoluteUrl from 'next-absolute-url';
import superagent from 'superagent';

import head from 'lodash/head';

import Components, { DynamicComponent } from '~/components/index';

import BaseLayout from '~/layouts/base';
import EnvContext from '~/contexts/EnvContext';
import useStoryblok from '~/hooks/useStoryblok';

import CampusHOC from '~/components/other/CampusHOC';
import DatasourceHOC from '~/components/other/DatasourceHOC';
import RegionHOC from '~/components/other/RegionHOC';
import StoriesHOC from '~/components/other/StoriesHOC';

import Footer from '~/components/content/Footer';
import Header from '~/components/content/Header';

import { StoryblokPageProps } from '~/utils/types';
import MetaHrefLang from '~/components/other/MetaHrefLang';

import TranslationContext from '~/contexts/TranslationContext';
import LottieLoader from '~/components/kit/Graphic/lottie-loader';

const SSRPage: NextPage<StoryblokPageProps> = (props) => {
	// extract props
	const { errorCode, story, market, host, labels, header, footer, locales } = props;
	// TODO improve error view
	// if an error occured, throw it
	if (errorCode) {
		return <Error statusCode={errorCode} />;
	}
	// TODO improve no content view
	// check that story and content is available
	if (story === undefined || story.content === undefined) {
		return (
			<>
				<div style={{ height: '100vh' }}>
					<div style={{ 'position':'absolute', 'top':'50%', 'left':'50%', 'WebkitTransform': 'translate(-50%, -50%)', transform: 'translate(-50%, -50%)' }}>
						<img
							src="https://a.storyblok.com/f/70381/741x201/f4998282b9/efacademy.png"
							alt=""
						></img>
						<LottieLoader />
					</div>
					
				</div>
			</>
		);
	}

	// hook to connect storyblok (and the editor UI)
	const [currentStory] = useStoryblok(
		story,
		['development', 'editor', 'production'].includes(
			`${process.env.ENVIRONMENT}`
		)
	);

	return (
		<CookiesProvider>
			<EnvContext.Provider
				value={{
					efMarketCode: market.efcode,
					marketCode: market.code,
					fallback: market.fallback,
					regionFallback: market.regionFallback
				}}
			>
				<TranslationContext.Provider
					value={{
						locales,
						path: currentStory.default_full_slug
					}}
				>
					<StoriesHOC uuid={currentStory.uuid}>
						<DatasourceHOC>
							<CampusHOC parentCampus={currentStory?.content?.campus}>
								<RegionHOC regionFallback={market.regionFallback}>
									{currentStory.translated_slugs && (
										<MetaHrefLang
											origin={host}
											slug={
												currentStory.default_full_slug || currentStory.full_slug
											}
											translations={currentStory.translated_slugs}
											component={currentStory?.content?.component}
											currentLang={market.code}
											labels={labels}
										/>
									)}
									{/* base layout contains all things shared by all pages */}
									{currentStory.content && (
										<BaseLayout>
											{currentStory.content.top_banner &&
												currentStory.content.top_banner.map((blok: any) =>
													Components(blok, '', { position: 'top' })
												)}
											{currentStory.content.component === 'website_page' && (
												<Header
													header={header}
													variant={currentStory.content.header_variant}
												/>
											)}

											<DynamicComponent blok={currentStory.content} />

											{currentStory.content.component === 'website_page' && (
												<Footer footer={footer} labels={labels} />
											)}
										</BaseLayout>
									)}

									{/* Storyblok bridge connector to connect the editor to components */}
									{/* ['development', 'editor'].includes(
										`${process.env.ENVIRONMENT}`
									) && (
										<script
											async
											src={`${script}?t=${process.env.SB_CONTENT_TOKEN}`}
										/>
									) */}
								</RegionHOC>
							</CampusHOC>
						</DatasourceHOC>
					</StoriesHOC>
				</TranslationContext.Provider>
			</EnvContext.Provider>
		</CookiesProvider>
	);
};

export async function getStaticProps(props: any) {
	// get needed params
	const { params, locale, locales, defaultLocale } = props;

	// query parameters and storyblok stuff
	// const { slug, _storyblok_release: release } = query;
	const release = 0;
	const { slug } = params;

	let marketList: any[] = [];

	const promiseFallbackDatasource = superagent
		.get([process.env.SB_CONTENT_API, 'datasource_entries'].join('/'))
		.accept('json')
		.type('json')
		.query({
			datasource: 'markets-fallback',
			dimension: 'fallback',
			// eslint-disable-next-line @typescript-eslint/camelcase
			per_page: 1000,
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION
		});

	const promiseEfCodeDatasource = superagent
		.get([process.env.SB_CONTENT_API, 'datasource_entries'].join('/'))
		.accept('json')
		.type('json')
		.query({
			datasource: 'markets-fallback',
			dimension: 'ef-code',
			// eslint-disable-next-line @typescript-eslint/camelcase
			per_page: 1000,
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION
		});

	const promiseRegionFallbackDatasource = superagent
		.get([process.env.SB_CONTENT_API, 'datasource_entries'].join('/'))
		.accept('json')
		.type('json')
		.query({
			datasource: 'markets-fallback',
			dimension: 'region-fallback',
			// eslint-disable-next-line @typescript-eslint/camelcase
			per_page: 1000,
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION
		});

	try {
		const fallbackResponse = await promiseFallbackDatasource;
		const resolvedFallbacks = await fallbackResponse.body.datasource_entries;

		// get all fallbacks info from datasource
		const fallbackList = resolvedFallbacks.map((ds: any) => {
			return {
				code: ds.name,
				fallback: ds.dimension_value
					? ds.dimension_value?.replace('-', '_')
					: null
			};
		});

		const efcodeResponse = await promiseEfCodeDatasource;
		const resolvedEfcodes = await efcodeResponse.body.datasource_entries;

		const efcodeList = resolvedEfcodes.map((ds: any) => {
			return {
				code: ds.name,
				efcode: ds.dimension_value ?? locale
			};
		});

		const regionFallbackResponse = await promiseRegionFallbackDatasource;
		const resolvedRegionFallbacks = await regionFallbackResponse.body
			.datasource_entries;
		const regionFallbacksList = resolvedRegionFallbacks.map((ds: any) => {
			return {
				code: ds.name,
				regionFallback: ds.dimension_value ?? null
			};
		});

		marketList = fallbackList.map((item: any, i: number) =>
			Object.assign({}, item, efcodeList[i], regionFallbacksList[i])
		);
	} catch (error) {
		// console.log(error);
	}

	// get the market info if exists
	const market = marketList.find((m) => m.code === locale) ?? marketList[0];
	if (market.code === '_') {
		market.code = '';
	}

	const getHost = () => {
		let prefix = '';
		switch (process.env.ENVIRONMENT) {
			case 'development':
				prefix = 'dev';
				break;
			case 'staging':
				prefix = 'staging';
				break;
			case 'editor':
				prefix = 'editor';
				break;
			case 'production':
				prefix = 'www';
				break;
			default:
				break;
		}

		return `${prefix}.${
			process.env.SHARED_LPS ? 'efhighschools.com' : 'efacademy.org'
		}`;
	};

	// console.log(req);
	const host = getHost(); // absoluteUrl(req);

	// Redirect to homepage
	const requestSlug: string = slug || ['home'];

	// TODO add cache provider
	// TODO make generic requests
	// get the story content

	const promiseStory = superagent
		.get([process.env.SB_CONTENT_API, 'stories', ...requestSlug].join('/'))
		.accept('json')
		.type('json')
		.query({
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION,
			language: locale,
			// // eslint-disable-next-line @typescript-eslint/camelcase
			fallback_lang: market.fallback,
			// eslint-disable-next-line @typescript-eslint/camelcase
			from_release: release || 0
		});

	const promise404Story = superagent
		.get(
			[
				process.env.SB_CONTENT_API,
				'stories',
				`${market.code.length !== 0 ? `${market.code}/` : ''}`,
				process.env.SHARED_LPS ? 'shared-lp-404-page' : '404-page'
			].join('/')
		)
		.accept('json')
		.type('json')
		.query({
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION,
			// eslint-disable-next-line @typescript-eslint/camelcase
			fallback_lang: market.fallback,
			// eslint-disable-next-line @typescript-eslint/camelcase
			from_release: release || 0
		});

	// get labels
	const promiseLabels = superagent
		.get([process.env.SB_CONTENT_API, 'datasource_entries'].join('/'))
		.accept('json')
		.type('json')
		.query({
			token: process.env.SB_CONTENT_TOKEN,
			cv: process.env.SB_CACHE_VERSION,
			datasource: 'language-labels'
		});

	// get header
	const promiseHeader = superagent
		.get([process.env.SB_CONTENT_API, 'stories', `shared/header`].join('/'))
		.accept('json')
		.type('json')
		.query({
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION,
			language: locale,
			// eslint-disable-next-line @typescript-eslint/camelcase
			from_release: release || 0
		});

	// get footer
	const promiseFooter = superagent
		.get([process.env.SB_CONTENT_API, 'stories', `shared/footer`].join('/'))
		.accept('json')
		.type('json')
		.query({
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION,
			language: locale,
			// eslint-disable-next-line @typescript-eslint/camelcase
			from_release: release || 0
		});

	// catch storyblok error to pass them down to view
	try {
		// get the story from storyblok
		let story;
		try {
			if (
				process.env.SHARED_LPS &&
				(requestSlug[0] !== 'smlp' || requestSlug[1] !== 'multiprod')
			) {
				// || (!process.env.SHARED_LPS && (requestSlug[1] === 'smlp' && requestSlug[2] !== 'multiprod'))) {
				throw new Error({ message: 'Page not found', statusCode: 404 });
			}
			const resStory = await promiseStory;
			({ story } = resStory.body);
		} catch (error) {
			// console.log(error);
			if (
				(error.props && error.props.statusCode === 404) ||
				error.status === 404
			) {
				const resStory = await promise404Story;
				({ story } = resStory.body);
			} else {
				throw error;
			}
		}

		let labels = [];
		let header = null;
		let footer = null;

		if (story.content.component === 'website_page') {
			const [resLabels, resHeader, resFooter] = await Promise.all([
				promiseLabels,
				promiseHeader,
				promiseFooter
			]);

			labels = resLabels.body.datasource_entries;
			header = resHeader.body.story;
			footer = resFooter.body.story;
		}

		// Set cache headers
		// res?.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');

		// return the story object
		return {
			props: {
				story,
				market,
				host,
				labels,
				header,
				footer,
				locales,
				defaultLocale
			},
			revalidate: 10
		};
	} catch (error) {
		// console.log(error)
		// write the correct HTTP status to the head
		// if (res) res.statusCode = error.status;

		// return back the error from storyblok
		return {
			props: { errorCode: error.status || null, market, host },
			revalidate: 10
		};
	}
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
	// get the links for the routes
	const {
		body: { links }
	}: {
		body: {
			links: any;
		};
	} = await superagent
		.get(`${process.env.SB_CONTENT_API}/links`)
		.accept('json')
		.type('json')
		.query({
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION
		});

	const paths: (
		| string
		| { params: { [key: string]: string[] }; locale: string }
	)[] = [];

	Object.keys(links).forEach((linkKey) => {
		if (links[linkKey].is_folder) {
			return;
		}

		if (!links[linkKey].is_startpage) {
			return;
		}

		const { slug } = links[linkKey].slug;
		let splittedSlug = slug?.split('/');
		if (slug === 'home') splittedSlug = false;

		// create additional languages
		locales.forEach((locale) => {
			paths.push({ params: { slug: splittedSlug }, locale });
		});
	});

	return {
		paths,
		fallback: true
	};
}

export default SSRPage;
