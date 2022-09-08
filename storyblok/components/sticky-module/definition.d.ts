import { StoryblokComponent } from 'storyblok-js-client';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { ComponentSelectorField } from '~/storyblok/space';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface StickyModule extends StoryblokComponent<'sticky_module'> {
	body: StoryblokComponent<string>[];
	section_reference: ComponentSelectorField;
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingComponentSettings[];
	shadow_type: 'none' | 'regular' | 'deep' | '';
}
