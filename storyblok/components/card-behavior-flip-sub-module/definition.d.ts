import { StoryblokComponent } from 'storyblok-js-client';

import { IconModule } from '~/storyblok/components/icon-module/definition';

export interface CardBehaviorFlipSubModule
	extends StoryblokComponent<'card_behavior_flip_sub_module'> {
	flip_direction: ' ' | 'vertical' | '';
	icon: IconModule[];
	icon_position: 'start' | 'end' | '';
	show_gradient: boolean;
	screen_size: string;
}
