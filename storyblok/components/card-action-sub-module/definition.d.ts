import { StoryblokComponent } from 'storyblok-js-client';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';
import { ActionBehaviorModalSubModule } from '~/storyblok/components/action-behavior-modal-sub-module/definition';
import { ActionBehaviorScrollSubModule } from '~/storyblok/components/action-behavior-scroll-sub-module/definition';
import { IconModule } from '~/storyblok/components/icon-module/definition';

export interface CardActionSubModule
	extends StoryblokComponent<'card_action_sub_module'> {
	clickable_area: 'whole' | 'cover' | 'content';
	icon: IconModule[];
	icon_placement: 'cover' | 'content' | '';
	icon_position: 'start' | 'center' | 'end' | '';
	action_behavior: (
		| ActionBehaviorLinkSubModule
		| ActionBehaviorModalSubModule
		| ActionBehaviorScrollSubModule
	)[];
}
