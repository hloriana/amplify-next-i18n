import { StoryblokComponent } from 'storyblok-js-client';

import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface CollapsePanelSubModule
	extends StoryblokComponent<'collapse_panel_sub_module'> {
	module_spacing_settings: SpacingComponentSettings[];
	spacing_settings: SpacingComponentSettings[];
	color_settings: ColoringSettings[];
	expanded_color_settings: ColoringSettings[];
	border_radius: string;
	heading_body: StoryblokComponent<string>[];
	content_body: StoryblokComponent<string>[];
	heading_body_settings: BodyFlexSettings[];
	content_body_settings: BodyFlexSettings[];
	faq: string;
	hide_border: boolean;
	shadow_on_expand: boolean;
}
