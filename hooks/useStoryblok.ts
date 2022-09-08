import { useState, useEffect } from 'react';

function useStoryblok(initStory: any, preview: boolean) {
	// create state for story
	const [story, setStory] = useState(initStory);	  

	// hook content trigger change
	useEffect(() => {
		// the story is different from the current one
		if (initStory.id !== story.id || initStory.lang !== story.lang) {
			// update the story (means that we had internal navigation)
			setStory(initStory);
		}
	}, [initStory]);

	// adds the events for updating the visual editor
    // see https://www.storyblok.com/docs/guide/essentials/visual-editor#initializing-the-storyblok-js-bridge
	function initEventListeners() {

		// init storyblok editor if the bridge is loaded
		if (window.storyblok) {
			const { events } = window.storyblok as any;

			window.storyblok.init();

			(window.storyblok as any).events = events;

			// check for changes/publishes in the editor and reload
			window.storyblok.on(['change', 'published'], () =>
				window.location.reload()
			);

			// this will alter the state and replaces the current story with a current raw story object (resolved relations, but no resolved links)
			window.storyblok.on('input', (event) => {
				if (
					event &&
					event.story && // eslint-disable-next-line no-underscore-dangle
					event.story.content._uid === story.content._uid
				) {
					// resolve relations of incoming story
					setStory(event.story);
				}
			});
		}
	  }
	 
	  // appends the bridge script tag to our document
	  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#installing-the-storyblok-js-bridge
	  function addBridge(callback: any) {
		// check if the script is already present
		const existingScript = document.getElementById("storyblokBridge");
		if (!existingScript) {
		  const script = document.createElement("script");
		  script.src = `https://app.storyblok.com/f/storyblok-latest.js?t=${process.env.SB_CONTENT_TOKEN}`;
		  script.id = "storyblokBridge";
		  document.body.appendChild(script);
		  
		  script.addEventListener('load', () => {
			// once the scrip is loaded, init the event listeners
			callback();
		  });
		} else {
			callback();
		}
	  }
	 
	  useEffect(() => {
		// load the bridge if we're in preview mode
		if(preview) {
		  addBridge(initEventListeners);
		}
	  });

	// script to bridge storyblok editor
	// const script = '//app.storyblok.com/f/storyblok-v2-latest.js';

	return [story];
}

export default useStoryblok;
