import { StoryblokComponent } from 'storyblok-js-client';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';

export interface GraphicActionSubModule
	extends StoryblokComponent<'graphic_action_sub_module'> {
	action_behavior: ActionBehaviorLinkSubModule[];
}
