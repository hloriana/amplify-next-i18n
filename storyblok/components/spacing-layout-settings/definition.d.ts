import { StoryblokComponent } from 'storyblok-js-client';

export interface SpacingLayoutSettings
	extends StoryblokComponent<'spacing_layout_settings'> {
	padding_type: string;
	padding_value: string;
}
