import { StoryblokComponent } from 'storyblok-js-client';

import { CollapsePanelSubModule } from '~/storyblok/components/collapse-panel-sub-module/definition';
import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface CollapseModule extends StoryblokComponent<'collapse_module'> {
	module_settings: (ModuleGridSettings | ModuleFlexSettings)[];
	body: CollapsePanelSubModule[];
	spacing_settings: SpacingComponentSettings[];
	theme_variant: 'light' | 'dark' | '';
	default_panel_behavior: 'expanded' | 'minimized' | '';
}
