import { StoryblokComponent } from 'storyblok-js-client';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface ScrollTopModule
	extends StoryblokComponent<'scroll_top_module'> {
	content: StoryblokComponent<string>[];
	spacing_settings: SpacingComponentSettings[];
	colour_settings: ColoringSettings[];
	border_radius_settings: string;
	shadow_settings: 'flat' | 'shadow' | 'deep-shadow' | '';
}
