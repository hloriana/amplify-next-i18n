import { StoryblokComponent } from 'storyblok-js-client';

import { BackgroundSettings } from '~/storyblok/components/background-settings/definition';
import { BodyGridSettings } from '~/storyblok/components/body-grid-settings/definition';
import { CardTestimonialModule } from '~/storyblok/components/card-testimonial-module/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { SpacingLayoutSettings } from '~/storyblok/components/spacing-layout-settings/definition';

export interface CardTestimonialsSection
	extends StoryblokComponent<'card_testimonials_section'> {
	name: string;
	body: CardTestimonialModule[];
	coloring_settings: ColoringSettings[];
	spacing_settings: SpacingLayoutSettings[];
	background_settings: BackgroundSettings[];
	body_settings: BodyGridSettings[];
}
