import { StoryblokComponent } from 'storyblok-js-client';

export interface BackgroundSizeSettings
	extends StoryblokComponent<'background_size_settings'> {
	screen_size: string;
	horizontal_size:
		| 'full'
		| 'cover'
		| 'contain'
		| '1/4'
		| '1/3'
		| '1/2'
		| '2/3'
		| '3/4'
		| 'auto'
		| '';
	vertical_size: 'full' | '1/4' | '1/3' | '1/2' | '2/3' | '3/4' | 'auto' | '';
}
