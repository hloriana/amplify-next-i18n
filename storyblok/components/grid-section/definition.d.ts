import { StoryblokComponent } from 'storyblok-js-client';

import { BackgroundSettings } from '~/storyblok/components/background-settings/definition';
import { BodyGridSettings } from '~/storyblok/components/body-grid-settings/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { SpacingLayoutSettings } from '~/storyblok/components/spacing-layout-settings/definition';

export interface GridSection extends StoryblokComponent<'grid_section'> {
	name: string;
	anchor_slug: string;
	coloring_settings: ColoringSettings[];
	body: StoryblokComponent<string>[];
	body_settings: BodyGridSettings[];
	spacing_settings: SpacingLayoutSettings[];
	background_settings: BackgroundSettings[];
}
