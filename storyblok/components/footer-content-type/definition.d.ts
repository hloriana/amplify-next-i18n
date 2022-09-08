import { StoryblokComponent } from 'storyblok-js-client';

import { ActionModule } from '~/storyblok/components/action-module/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';
import { ScrollTopModule } from '~/storyblok/components/scroll-top-module/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';

export interface FooterContentType
	extends StoryblokComponent<'footer_content_type'> {
	icon: GraphicModule[];
	academy_logo: GraphicModule[];
	text: TextModule[];
	menu: MenuLinkModule[];
	social_menu: MenuLinkModule[];
	office_text: string;
	map_link_text: string;
	actions: ActionModule[];
	ef_logo: GraphicModule[];
	select_language_text: string;
	scroll_top: ScrollTopModule[];
}
