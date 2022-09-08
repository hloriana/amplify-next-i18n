import { StoryblokComponent } from 'storyblok-js-client';

export interface SpacingComponentSettings
	extends StoryblokComponent<'spacing_component_settings'> {
	screen_size: string;
	margin_negative: boolean;
	margin_type: string;
	margin_value: string;
	padding_type: string;
	padding_value: string;
}
