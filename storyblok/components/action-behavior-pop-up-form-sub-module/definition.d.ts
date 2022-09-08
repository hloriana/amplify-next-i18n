import { StoryblokComponent } from 'storyblok-js-client';

import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';
import { BodyGridSettings } from '~/storyblok/components/body-grid-settings/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { FormIntegrationModule } from '~/storyblok/components/form-integration-module/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface ActionBehaviorPopUpFormSubModule
	extends StoryblokComponent<'action_behavior_pop_up_form_sub_module'> {
	body: StoryblokComponent<string>[];
	form: FormIntegrationModule[];
	thank_you_page: StoryblokComponent<string>[];
	border_radius: string;
	variant: 'light' | 'dark';
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	body_settings: (BodyFlexSettings | BodyGridSettings)[];
	hide_overflow: boolean;
}
