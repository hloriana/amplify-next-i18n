import dynamic from 'next/dynamic';

import Grid from './Grid';
import InfomeetingPage from './InfomeetingPage';
import SharedSection from './Shared';
import TestimonialSection from './Testimonials';

import Testimonial from '../content/Testimonial';

import { StoryblokNames } from '~/storyblok/space';

// Space definition

/* eslint-disable @typescript-eslint/camelcase */
// FIXME typescript definition
// declare available sections
const sections: Partial<Record<StoryblokNames, any>> = {
	grid_section: Grid,
	card_testimonials_section: TestimonialSection,
	magic_scroll_section: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "magic-scroll-section" */
				`./MagicScroll`
			)
	}),
	shared_section: SharedSection,
	infomeeting_page_section: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "website-page-chunk" */
				`./InfomeetingPage`
			)
	})
};
/* eslint-enable @typescript-eslint/camelcase */

export default sections;
