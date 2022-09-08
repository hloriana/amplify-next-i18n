import { StoryblokComponent } from 'storyblok-js-client';

import { AdvancedImageField } from '~/storyblok/space';
import { AspectRatioSettings } from '~/storyblok/components/aspect-ratio-settings/definition';
import { GradientModule } from '~/storyblok/components/gradient-module/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface VideoModule extends StoryblokComponent<'video_module'> {
	thumbnail: AdvancedImageField;
	video_url: string;
	video_file: any;
	mobile_file: any;
	loop: boolean;
	controls: boolean;
	auto_play: boolean;
	aspect_ratio_settings: AspectRatioSettings[];
	spacing_settings: SpacingComponentSettings[];
	module_settings: ModuleGridSettings[];
	gradient: GradientModule[];
}
