import { StoryblokComponent } from 'storyblok-js-client';

import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';
import { SwitcherBehaviorDropdownSubModule } from '~/storyblok/components/switcher-behavior-dropdown-sub-module/definition';
import { SwitcherBehaviorToggleSubModule } from '~/storyblok/components/switcher-behavior-toggle-sub-module/definition';
import { SwitcherBodySubModule } from '~/storyblok/components/switcher-body-sub-module/definition';

export interface SwitcherModule extends StoryblokComponent<'switcher_module'> {
	body: SwitcherBodySubModule[];
	module_settings: ModuleGridSettings[];
	spacing_settings: SpacingComponentSettings[];
	switcher_behavior: (
		| SwitcherBehaviorDropdownSubModule
		| SwitcherBehaviorToggleSubModule
	)[];
}
