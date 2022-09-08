import { StoryblokComponent } from 'storyblok-js-client';

import { RedirectorRedirection } from '~/storyblok/components/redirector-redirection/definition';

export interface RedirectorContainer
	extends StoryblokComponent<'redirector_container'> {
	redirections: RedirectorRedirection[];
}
