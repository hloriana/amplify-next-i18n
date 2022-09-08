import { StoryblokComponent } from 'storyblok-js-client';

import { AspectRatioSettings } from '~/storyblok/components/aspect-ratio-settings/definition';
import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';
import { CardBehaviorCharacterSensitiveSubModule } from '~/storyblok/components/card-behavior-character-sensitive-sub-module/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { FontSettings } from '~/storyblok/components/font-settings/definition';
import { GradientModule } from '~/storyblok/components/gradient-module/definition';
import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SizingPresetSettings } from '~/storyblok/components/sizing-preset-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface TestimonialModule
	extends StoryblokComponent<'testimonial_module'> {
	details_text_type: string;
	details_font_settings: FontSettings[];
	details_coloring_settings: ColoringSettings[];
	details_spacing_settings: SpacingComponentSettings[];
	details_module_settings: (ModuleFlexSettings | ModuleGridSettings)[];
	testimonial_reference: string;
	quote_text_type: '';
	quote_font_settings: FontSettings[];
	quote_coloring_settings: ColoringSettings[];
	quote_spacing_settings: SpacingComponentSettings[];
	quote_module_settings: (ModuleFlexSettings | ModuleGridSettings)[];
	is_centered: boolean;
	graphic_border_radius: string;
	aspect_ratio_settings: AspectRatioSettings[];
	gradient: GradientModule[];
	sizing_settings: SizingPresetSettings[];
	graphic_spacing_settings: SpacingComponentSettings[];
	graphic_module_settings: (ModuleFlexSettings | ModuleGridSettings)[];
	type: 'flat' | 'shadow' | 'deep-shadow';
	border_radius: string;
	behavior: CardBehaviorCharacterSensitiveSubModule[];
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	module_settings: ModuleGridSettings[];
	card_body_settings: BodyFlexSettings[];
	overlay_body_settings: BodyFlexSettings[];
	content_body_settings: BodyFlexSettings[];
	last_item_at_end: boolean;
}
