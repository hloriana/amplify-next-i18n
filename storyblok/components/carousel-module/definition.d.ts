import { StoryblokComponent } from 'storyblok-js-client';

import { CarouselBehaviorHideSubModule } from '~/storyblok/components/carousel-behavior-hide-sub-module/definition';
import { ColumnComponentSettings } from '~/storyblok/components/column-component-settings/definition';
import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface CarouselModule extends StoryblokComponent<'carousel_module'> {
	pager_justify: 'start' | 'center' | 'end';
	slides_columns: '4' | '6' | '12' | '3';
	columns_settings: ColumnComponentSettings[];
	behavior: CarouselBehaviorHideSubModule[];
	spacing_settings: SpacingComponentSettings[];
	overflow_breakpoint: string;
	variant: 'light' | 'dark' | '';
	body: StoryblokComponent<string>[];
	module_settings: (ModuleGridSettings | ModuleFlexSettings)[];
}
