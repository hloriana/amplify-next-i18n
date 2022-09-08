import { StoryblokComponent } from 'storyblok-js-client';

import { IconModule } from '~/storyblok/components/icon-module/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface ActionReferenceModule
	extends StoryblokComponent<'action_reference_module'> {
	shape: 'rounded' | 'square';
	size: 'small' | 'normal' | 'cta' | 'extraSmall';
	type: 'primary' | 'secondary' | 'link';
	variant: 'dark' | 'light';
	shadow: 'flat' | 'shadow' | 'deep-shadow' | '';
	justify_content: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	icon: IconModule[];
	spacing_settings: SpacingComponentSettings[];
	module_settings: ModuleGridSettings[];
	action_reference: string;
}
