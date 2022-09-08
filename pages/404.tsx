import React from 'react';

import get from 'lodash/get';
import head from 'lodash/head';

import Error404Preset from '~/storyblok/presets/error---404---external/preset.preset';
import Grid from '~/components/sections/Grid';

import BaseLayout from '~/layouts/base';

// TODO this should be downloaded / synchronized always with storyblok datasources
import markets from '~/utils/markets.json';

const Custom404 = (props: any) => {
	// const location = window.location.toString();
	// query parameters and storyblok stuff
	const slug = props.url ? props.url.asPath.match(/[^\/]+/g) : '';
	// the default market (empty string on storyblok)
	const defaultMarket = '';
	// check if the first path is a language
	const first = head(slug);

	const market = get(
		markets,
		first as keyof typeof markets,
		markets[defaultMarket]
	);
	// get the language fallback if it is a valid language
	const marketCode = market.fallback
		? market.fallback?.replace('-', '_')
		: market.code?.replace('-', '_');

	const error404Preset: any = Error404Preset.preset;

	const errorPreset: any = {
		...error404Preset,
		body: [
			{
				...error404Preset.body[0],
				body: [
					{
						...error404Preset.body[0].body[0],
						title:
							error404Preset.body[0].body[0][`title__i18n__${marketCode}`] ??
							error404Preset.body[0].body[0].title
					},
					{
						...error404Preset.body[0].body[1],
						text:
							error404Preset.body[0].body[1][`text__i18n__${marketCode}`] ??
							error404Preset.body[0].body[1].text
					},
					{
						...error404Preset.body[0].body[2],
						text:
							error404Preset.body[0].body[2][`text__i18n__${marketCode}`] ??
							error404Preset.body[0].body[2].text
					}
				]
			},
			{ ...error404Preset.body[1] }
		]
	};

	return (
		<BaseLayout>
			<Grid content={errorPreset} />
		</BaseLayout>
	);
};

export default Custom404;
