import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { SeoMetatagsField } from '~/storyblok/space';

const Meta: FunctionComponent<{ content: SeoMetatagsField; index: boolean }> =
	({ content, index }) => (
		<Head>
			{content.title && <title key="title">{content.title}</title>}

			{/* Meta tags */}
			{content.description && (
				<meta
					key="description"
					name="description"
					content={content.description}
				/>
			)}

			{/* OpenGraph */}
			{content.og_title && (
				<meta key="og:title" property="og:title" content={content.og_title} />
			)}
			{content.og_description && (
				<meta
					key="og:description"
					property="og:description"
					content={content.og_description}
				/>
			)}
			{content.og_image && (
				<meta key="og:image" property="og:image" content={content.og_image} />
			)}

			{/* Twitter tags */}
			{content.twitter_title && (
				<meta
					key="twitter:title"
					name="twitter:title"
					content={content.twitter_title}
				/>
			)}
			{content.twitter_description && (
				<meta
					key="twitter:description"
					name="twitter:description"
					content={content.twitter_description}
				/>
			)}
			{content.twitter_image && (
				<meta
					key="twitter:image"
					name="twitter:image"
					content={content.twitter_image}
				/>
			)}
			{
				// content.facebook_title
				<meta
					name="facebook-domain-verification"
					content="6unnvzg02gtpnegyso7x4acemij7yf"
				/>
			}
			{/*  */}
			{!index && (
				// to prevent most search engine web crawlers from indexing a page
				<meta key="robots" name="robots" content="noindex" />
			)}
			{!index && (
				// to prevent only Google web crawlers from indexing a page
				<meta key="googlebot" name="googlebot" content="noindex" />
			)}
		</Head>
	);

export default Meta;
