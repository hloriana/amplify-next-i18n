import { StoryblokComponent } from 'storyblok-js-client';

export interface BodyGridSettings
	extends StoryblokComponent<'body_grid_settings'> {
	grid_type: 'page' | 'content';
	justify: 'start' | 'center' | 'end' | '';
	align: 'start' | 'center' | 'end' | '';
}
