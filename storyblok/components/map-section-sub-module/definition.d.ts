import { StoryblokComponent } from 'storyblok-js-client';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { GradientModule } from '~/storyblok/components/gradient-module/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { ListItemSubModule } from '~/storyblok/components/list-item-sub-module/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';

export interface MapSectionSubModule
	extends StoryblokComponent<'map_section_sub_module'> {
	id: string;
	label: TextModule[];
	items: ListItemSubModule[];
	image: GraphicModule[];
	gradient: GradientModule[];
	active_icon_background_color: ColoringSettings[];
}
