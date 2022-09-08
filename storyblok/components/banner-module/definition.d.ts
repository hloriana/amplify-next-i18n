import { StoryblokComponent } from 'storyblok-js-client';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';
import { ActionModule } from '~/storyblok/components/action-module/definition';
import { ActionReferenceModule } from '~/storyblok/components/action-reference-module/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';

export interface BannerModule extends StoryblokComponent<'banner_module'> {
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	body: (TextModule | ActionModule | ActionReferenceModule)[];
	time_to_appear: number;
	scroll_position_show: string;
	scroll_position_hide: string;
	enabled: boolean;
	action: ActionBehaviorLinkSubModule[];
}
