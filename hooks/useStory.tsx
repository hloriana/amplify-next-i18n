import { useContext, useState, useEffect } from 'react';
import MarketContext from '~/contexts/EnvContext';

import StoriesContext from '~/contexts/StoriesContext';

const useStory = (storyUuid: string | any, options?: { slug: boolean }) => {
	const stories = useContext(StoriesContext);

	const [story, setStory] = useState(storyUuid);

	const marketContext = useContext(MarketContext);

	useEffect(() => {
		const handleInput = (event: any) => {
			if (story?.id === event?.story?.id) {
				setStory(event?.story);
			}
		};

		if (window.storyblok) {
			window.storyblok.on('input', handleInput);
		}

		return () => {
			if (window.storyblok && (window.storyblok as any).events) {
				(window.storyblok as any).events.input = (window.storyblok as any).events.input.filter(
					(event: any) => event !== handleInput
				);
			}
		};
	}, [story]);

	useEffect(() => {
		if (!story) return;
		if (
			(storyUuid && typeof storyUuid === 'string') ||
			(story && marketContext.marketCode !== story.lang)
		) {
			(async () => {
				try {
					const resolvedStory = await stories.getStory(storyUuid, options);

					setStory(resolvedStory);
				} catch (err) {
					console.error(err);
				}
			})();
		}
	}, [storyUuid, marketContext.marketCode, story]);

	return story;
};

export default useStory;
