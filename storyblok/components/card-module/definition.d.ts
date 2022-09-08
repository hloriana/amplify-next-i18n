import { StoryblokComponent } from 'storyblok-js-client';

import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';
import { CardActionSubModule } from '~/storyblok/components/card-action-sub-module/definition';
import { CardBehaviorCharacterSensitiveSubModule } from '~/storyblok/components/card-behavior-character-sensitive-sub-module/definition';
import { CardBehaviorFlipSubModule } from '~/storyblok/components/card-behavior-flip-sub-module/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface CardModule extends StoryblokComponent<'card_module'> {
	name: string;
	cover: GraphicModule[];
	overlay_body: StoryblokComponent<string>[];
	content_body: StoryblokComponent<string>[];
	action: CardActionSubModule[];
	type: 'flat' | 'shadow' | 'deep-shadow';
	border_radius: string;
	behavior: (
		| CardBehaviorFlipSubModule
		| CardBehaviorCharacterSensitiveSubModule
	)[];
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	module_settings: ModuleGridSettings[];
	card_body_settings: BodyFlexSettings[];
	overlay_body_settings: BodyFlexSettings[];
	content_body_settings: BodyFlexSettings[];
	last_item_at_end: boolean;
}
