import { StoryblokComponent } from 'storyblok-js-client';

import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';

export interface CampusMenuModule
	extends StoryblokComponent<'campus_menu_module'> {
	campus: string;
	title: string;
	menu: MenuLinkModule[];
}
