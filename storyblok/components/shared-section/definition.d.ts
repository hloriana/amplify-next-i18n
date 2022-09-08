import { StoryblokComponent } from 'storyblok-js-client';

export interface SharedSection extends StoryblokComponent<'shared_section'> {
	section: string;
}
