import { StoryblokComponent } from 'storyblok-js-client';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';
import { ActionBehaviorModalSubModule } from '~/storyblok/components/action-behavior-modal-sub-module/definition';
import { ActionBehaviorScrollSubModule } from '~/storyblok/components/action-behavior-scroll-sub-module/definition';

export interface SharedActionContentType
	extends StoryblokComponent<'shared_action_content_type'> {
	text: string;
	behavior: (
		| ActionBehaviorLinkSubModule
		| ActionBehaviorModalSubModule
		| ActionBehaviorScrollSubModule
	)[];
}
