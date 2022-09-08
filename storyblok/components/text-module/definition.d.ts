import { StoryblokComponent } from 'storyblok-js-client';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { FontSettings } from '~/storyblok/components/font-settings/definition';
import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface TextModule extends StoryblokComponent<'text_module'> {
	text_level: 'subtitle' | 'paragraph' | 'ui-label' | 'caption';
	font_settings: FontSettings[];
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	text: any;
	module_settings: (ModuleGridSettings | ModuleFlexSettings)[];
}
