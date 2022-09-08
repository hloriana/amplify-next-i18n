import { StoryblokComponent } from 'storyblok-js-client';

import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';
import { BodyGridSettings } from '~/storyblok/components/body-grid-settings/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface ActionBehaviorPopUpFormSubmitSubModule
	extends StoryblokComponent<'action_behavior_pop_up_form_submit_sub_module'> {
	border_radius: string;
	variant: 'light' | 'dark';
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	body_settings: (BodyFlexSettings | BodyGridSettings)[];
	hide_overflow: boolean;
}
