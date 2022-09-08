import { StoryblokComponent } from 'storyblok-js-client';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface DividerModule extends StoryblokComponent<'divider_module'> {
	spacing_settings: SpacingComponentSettings[];
	coloring_settings: ColoringSettings[];
	opacity: number;
	divider_width: number;
}
