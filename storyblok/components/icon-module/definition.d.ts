import { StoryblokComponent } from 'storyblok-js-client';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SizingPresetSettings } from '~/storyblok/components/sizing-preset-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';
import { TransformSettings } from '~/storyblok/components/transform-settings/definition';

export interface IconModule extends StoryblokComponent<'icon_module'> {
	border_radius: string;
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	sizing_settings: SizingPresetSettings[];
	icon: string;
	module_settings: ModuleGridSettings[];
	transform_settings: TransformSettings[];
}
