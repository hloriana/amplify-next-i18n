import { StoryblokComponent } from 'storyblok-js-client';

import { MultilinkField } from '~/storyblok/space';

export interface ActionBehaviorLinkSubModule
	extends StoryblokComponent<'action_behavior_link_sub_module'> {
	link: MultilinkField;
	carry_params: boolean;
	open_external: boolean;
	campus_parameter: string;
}
