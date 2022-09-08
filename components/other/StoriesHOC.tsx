import React, { useState, FunctionComponent, useContext } from 'react';

import superagent from 'superagent';

import MarketContext from '~/contexts/EnvContext';
import StoiresContext from '~/contexts/StoriesContext';

const StoriesHOC: FunctionComponent<{ children: any; uuid: string }> = (
	props
) => {
	const [stories, setStories] = useState<any>({});

	const marketContext = useContext(MarketContext);

	const getStory = (
		slug: string,
		options: { slug: boolean } = { slug: false }
	) => {
		const cacheKey = `${marketContext.marketCode}:${slug}`;

		return new Promise<any>((resolve, reject) => {
			if (stories[cacheKey]) {
				resolve(stories[cacheKey]);
			} else {
				const promiseStory = superagent
					.get(
						[
							process.env.SB_CONTENT_API,
							'stories',
							...(options.slug ? [marketContext.marketCode] : []),
							slug
						].join('/')
					)
					.accept('json')
					.type('json')
					.query({
						// eslint-disable-next-line @typescript-eslint/camelcase
						...(!options.slug ? { find_by: 'uuid' } : {}),
						token: process.env.SB_CONTENT_TOKEN,
						version: process.env.SB_CONTENT_VERSION,
						cv: process.env.SB_CACHE_VERSION,
						language: marketContext.marketCode,
						fallback_lang: marketContext.fallback?.replace('-', '_')
					});

				(async () => {
					try {
						const resStory = await promiseStory;

						const resolvedStory = resStory.body.story;

						const newStories = { ...stories };

						newStories[cacheKey] = resolvedStory;

						setStories(newStories);
						resolve(newStories[cacheKey]);
					} catch (error) {
						reject(error);
					}
				})();
			}
		});
	};

	const { uuid } = props;

	return (
		<StoiresContext.Provider
			value={{ stories, getStory, currentStoryUuid: uuid }}
		>
			{props.children}
		</StoiresContext.Provider>
	);
};

export default StoriesHOC;
