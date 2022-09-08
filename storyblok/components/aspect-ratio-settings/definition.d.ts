import { StoryblokComponent } from 'storyblok-js-client';

export interface AspectRatioSettings
	extends StoryblokComponent<'aspect_ratio_settings'> {
	screen_size: string;
	ratio: '1/1' | '4/3' | '3/4' | '3/2' | '2/3' | '16/9' | '9/16';
}
