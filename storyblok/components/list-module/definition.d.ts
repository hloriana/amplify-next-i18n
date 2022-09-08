import { StoryblokComponent } from 'storyblok-js-client';

import { ListItemSubModule } from '~/storyblok/components/list-item-sub-module/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface ListModule extends StoryblokComponent<'list_module'> {
	body: ListItemSubModule[];
	module_settings: ModuleGridSettings[];
	spacing_settings: SpacingComponentSettings[];
	list_style_type: 'list-disc' | 'list-decimal' | 'list-none' | '';
}
