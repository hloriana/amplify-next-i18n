import { StoryblokComponent } from 'storyblok-js-client';

export interface RedirectorRedirection
	extends StoryblokComponent<'redirector_redirection'> {
	skip: boolean;
	src: string;
	dest: string;
	desc: string;
}
