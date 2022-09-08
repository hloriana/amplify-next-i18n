import { StoryblokComponent } from 'storyblok-js-client';

export interface ColoringSettings
	extends StoryblokComponent<'coloring_settings'> {
	screen_size: string;
	text_color: string;
	text_shade:
		| '-650'
		| '-600'
		| '-550'
		| ' '
		| '-450'
		| '-400'
		| '-350'
		| '-300'
		| '';
	background_color: string;
	background_shade:
		| '-650'
		| '-600'
		| '-550'
		| ' '
		| '-450'
		| '-400'
		| '-350'
		| '-300'
		| '';
}
