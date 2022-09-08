import { StoryblokComponent } from 'storyblok-js-client';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';
import { ActionBehaviorMenuSubModule } from '~/storyblok/components/action-behavior-menu-sub-module/definition';
import { IconModule } from '~/storyblok/components/icon-module/definition';

export interface MenuLinkModule extends StoryblokComponent<'menu_link_module'> {
	link_text: string;
	action: (ActionBehaviorLinkSubModule | ActionBehaviorMenuSubModule)[];
	exclude_top: boolean;
	exclude_side: boolean;
	icon: IconModule[];
}
