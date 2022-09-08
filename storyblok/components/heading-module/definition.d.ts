import { StoryblokComponent } from 'storyblok-js-client';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { FontSettings } from '~/storyblok/components/font-settings/definition';
import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface HeadingModule extends StoryblokComponent<'heading_module'> {
	heading_level: 'h1' | 'h2' | 'h3' | 'h4';
	extra_type: 'super' | 'sub' | '';
	font_settings: FontSettings[];
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	title: string;
	module_settings: (ModuleGridSettings | ModuleFlexSettings)[];
	extra: string;
}
