import { StoryblokComponent } from 'storyblok-js-client';

import { AspectRatioSettings } from '~/storyblok/components/aspect-ratio-settings/definition';
import { GradientModule } from '~/storyblok/components/gradient-module/definition';
import { GraphicActionSubModule } from '~/storyblok/components/graphic-action-sub-module/definition';
import { ImageFocusField } from '~/storyblok/space';
import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SizingPresetSettings } from '~/storyblok/components/sizing-preset-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface GraphicModule extends StoryblokComponent<'graphic_module'> {
	name: string;
	graphic: ImageFocusField;
	mobile_graphic: ImageFocusField;
	action: GraphicActionSubModule[];
	is_centered: boolean;
	border_radius: string;
	gradient: GradientModule[];
	aspect_ratio_settings: AspectRatioSettings[];
	sizing_settings: SizingPresetSettings[];
	spacing_settings: SpacingComponentSettings[];
	module_settings: (ModuleGridSettings | ModuleFlexSettings)[];
}
