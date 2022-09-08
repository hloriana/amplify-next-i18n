import { StoryblokComponent } from 'storyblok-js-client';

export interface FontSettings extends StoryblokComponent<'font_settings'> {
	screen_size: string;
	alignment: string;
	weight: string;
	size:
		| 'subtitle'
		| 'paragraph'
		| 'ui-label'
		| 'caption'
		| 'title3'
		| 'title5'
		| 'title4'
		| '';
}
