import { StoryblokComponent } from 'storyblok-js-client';

import { BackgroundSettings } from '~/storyblok/components/background-settings/definition';
import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';
import { BorderSettings } from '~/storyblok/components/border-settings/definition';
import { CardActionSubModule } from '~/storyblok/components/card-action-sub-module/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface PromoModule extends StoryblokComponent<'promo_module'> {
	enabled: boolean;
	promo_page: string;
	action: CardActionSubModule[];
	icon_section: StoryblokComponent<string>[];
	promo_section: StoryblokComponent<string>[];
	arrow_section: StoryblokComponent<string>[];
	type: 'flat' | 'shadow' | 'deep-shadow';
	border_radius: string;
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	module_settings: (ModuleGridSettings | ModuleFlexSettings)[];
	body_settings: BodyFlexSettings[];
	background_settings: BackgroundSettings[];
	fill_parent: boolean;
	border_settings: BorderSettings[];
}
