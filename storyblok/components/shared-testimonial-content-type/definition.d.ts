import { StoryblokComponent } from 'storyblok-js-client';

import { ImageFocusField } from '~/storyblok/space';

export interface SharedTestimonialContentType
	extends StoryblokComponent<'shared_testimonial_content_type'> {
	graphic: ImageFocusField;
	quote: any;
	details: any;
	program: string;
	campus: string;
	type: string;
	country: string;
	name: string;
}
