import { StoryblokComponent } from 'storyblok-js-client';

import { BackgroundPositionSettings } from '~/storyblok/components/background-position-settings/definition';
import { BackgroundSizeSettings } from '~/storyblok/components/background-size-settings/definition';
import { GradientModule } from '~/storyblok/components/gradient-module/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { TransformSettings } from '~/storyblok/components/transform-settings/definition';

export interface BackgroundSettings
	extends StoryblokComponent<'background_settings'> {
	background: (GraphicModule | GradientModule)[];
	position_settings: BackgroundPositionSettings[];
	size_settings: BackgroundSizeSettings[];
	transform_settings: TransformSettings[];
}
