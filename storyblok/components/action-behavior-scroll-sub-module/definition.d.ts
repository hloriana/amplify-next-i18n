import { StoryblokComponent } from 'storyblok-js-client';

import { ComponentSelectorField } from '~/storyblok/space';

export interface ActionBehaviorScrollSubModule
	extends StoryblokComponent<'action_behavior_scroll_sub_module'> {
	section_reference: ComponentSelectorField;
	program_parameter: 'HSEY' | 'IA' | '';
}
