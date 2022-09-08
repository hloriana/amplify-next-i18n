import React, { useContext, FunctionComponent } from 'react';

import { StoryblokComponent } from 'storyblok-js-client';

// import the available components
// import content from './content';
// import modules from './modules';
// import sections from './sections';

import { Components } from '~/pages/_app';

import StoriesContext from '~/contexts/StoriesContext';

// // declare available components
// // FIXME typescript definition
// const Components: any = {
// 	// extract the registered content types
// 	...content,
// 	// extract the registered sections
// 	...sections,
// 	// extract the registered modules
// 	...modules
// };

/* eslint-disable no-underscore-dangle */
// FIXME typescript definition
const createBlok = (
	blok: StoryblokComponent<string>,
	storyID: string = '',
	props?: any
) => {
	const component = Components[blok.component];

	// check if we have that component
	if (component !== undefined) {
		// return a new instance of it
		return React.createElement(component, {
			...props,
			key: `${storyID}:${blok._uid}`,
			content: blok
		});
	}

	// REVIEW should we display this generic component only in dev?
	// return a generic not created component
	return React.createElement(
		() => (
			// FIXME this should have a proper component design
			<div className="col-start-1 col-end--1">
				The component <pre style={{ display: 'inline' }}>{blok.component}</pre>{' '}
				has not been created yet.
			</div>
		),
		{ key: `${storyID}:${blok._uid}` }
	);
};
/* eslint-enable no-underscore-dangle */

const DynamicComponent: FunctionComponent<{
	blok: StoryblokComponent<string>;
}> = (props) => {
	const { blok } = props;

	const storiesContext = useContext(StoriesContext);

	return createBlok(blok, storiesContext.currentStoryUuid);
};

export default createBlok;

export { DynamicComponent };
