import { StoryblokComponent } from 'storyblok-js-client';

import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';

export interface CardTestimonialModule
	extends StoryblokComponent<'card_testimonial_module'> {
	name: string;
	module_settings: ModuleGridSettings[];
	testimonial: string;
	flipper_characters_limit: number;
}
