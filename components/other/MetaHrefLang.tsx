import React, { Fragment, FunctionComponent } from 'react';

import Head from 'next/head';

const LANG_OVERRIDES: { [language: string]: string } = {
	'it-it': 'it',
	'pt-pt': 'pt'
};

const MetaHrefLang: FunctionComponent<{
	origin: string;
	translations: [{ path: string; name: string; lang: string }];
	slug: string;
	component: string;
	currentLang: string;
	labels: any[];
}> = (props) => {
	const { translations, origin, slug, component, currentLang, labels } = props;

	const getLanguageLabel = (marketCode: string) =>
		labels.filter((langLabel) => langLabel.name === marketCode).pop();

	const getPath = (path: string) => {
		if (path === 'home') return '';

		return path.substr(-1) === '/' ? path : `${path}/`;
	};

	return (
		<Head>
			{currentLang === 'en' && (
				<link rel="canonical" href={`https://${origin}/${getPath(slug)}`} />
			)}
			{translations.map((translation) => {
				const { lang, path } = translation;

				const href = `https://${lang === 'zh-cn' ? 'www.efacademy.cn' : origin}/${lang}/${getPath(path)}`;

				return (
					<Fragment key={`${lang}/${path}`}>
						{(component !== 'website_page' ||
							(component === 'website_page' &&
								getLanguageLabel(translation.lang))) && (
							<link
								rel="alternate"
								href={href}
								hrefLang={LANG_OVERRIDES[lang] ? LANG_OVERRIDES[lang] : lang}
							/>
						)}
						{translation.lang === currentLang && (
							<link rel="canonical" href={href} />
						)}
					</Fragment>
				);
			})}
			{slug === 'home' && (
				<link
					rel="alternate"
					href={`https://${origin}/`}
					hrefLang="x-default"
				/>
			)}
		</Head>
	);
};

export default MetaHrefLang;