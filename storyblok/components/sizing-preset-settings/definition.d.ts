import { StoryblokComponent } from 'storyblok-js-client';

export interface SizingPresetSettings
	extends StoryblokComponent<'sizing_preset_settings'> {
	screen_size: string;
	width: string;
	height: string;
}
