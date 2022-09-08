import { StoryblokComponent } from 'storyblok-js-client';

import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { IconModule } from '~/storyblok/components/icon-module/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';

export interface ListItemSubModule
	extends StoryblokComponent<'list_item_sub_module'> {
	icon: (GraphicModule | IconModule)[];
	text: TextModule[];
}
