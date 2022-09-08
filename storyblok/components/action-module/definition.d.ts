import { StoryblokComponent } from 'storyblok-js-client';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';
import { ActionBehaviorModalSubModule } from '~/storyblok/components/action-behavior-modal-sub-module/definition';
import { ActionBehaviorPopUpFormSubModule } from '~/storyblok/components/action-behavior-pop-up-form-sub-module/definition';
import { ActionBehaviorPopUpFormSubmitSubModule } from '~/storyblok/components/action-behavior-pop-up-form-submit-sub-module/definition';
import { ActionBehaviorScrollSubModule } from '~/storyblok/components/action-behavior-scroll-sub-module/definition';
import { IconModule } from '~/storyblok/components/icon-module/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface ActionModule extends StoryblokComponent<'action_module'> {
	shape: 'rounded' | 'square';
	size: 'small' | 'normal' | 'cta' | 'extraSmall';
	type: 'primary' | 'secondary' | 'link';
	variant: 'dark' | 'light';
	shadow: 'flat' | 'shadow' | 'deep-shadow' | '';
	justify_content: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	icon: IconModule[];
	spacing_settings: SpacingComponentSettings[];
	text: string;
	behavior: (
		| ActionBehaviorLinkSubModule
		| ActionBehaviorModalSubModule
		| ActionBehaviorScrollSubModule
		| ActionBehaviorPopUpFormSubModule
		| ActionBehaviorPopUpFormSubmitSubModule
	)[];
	module_settings: ModuleGridSettings[];
}
