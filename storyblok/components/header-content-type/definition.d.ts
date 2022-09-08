import { StoryblokComponent } from 'storyblok-js-client';

import { ActionModule } from '~/storyblok/components/action-module/definition';
import { CampusMenuModule } from '~/storyblok/components/campus-menu-module/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';

export interface HeaderContentType
	extends StoryblokComponent<'header_content_type'> {
	main_menu: MenuLinkModule[];
	campus_menus: CampusMenuModule[];
	dark_icon: GraphicModule[];
	light_icon: GraphicModule[];
	dark_logo: GraphicModule[];
	light_logo: GraphicModule[];
	home_text: string;
	logo_text: string;
	menu_text: string;
	close_text: string;
	our_campuses_text: string;
	primary_action: ActionModule[];
	secondary_action: ActionModule[];
}
