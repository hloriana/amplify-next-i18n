import { StoryblokComponent } from 'storyblok-js-client';

import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';

export interface ActionBehaviorMenuSubModule
	extends StoryblokComponent<'action_behavior_menu_sub_module'> {
	children: MenuLinkModule[];
}
