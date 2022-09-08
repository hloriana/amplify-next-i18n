import { createContext } from 'react';

const StoiresContext = createContext({
	stories: {},
	getStory(
		identifier: string,
		options: { slug: boolean } = { slug: false }
	): Promise<any> {
		return new Promise(() => {});
	},
	currentStoryUuid: ''
});

export default StoiresContext;
