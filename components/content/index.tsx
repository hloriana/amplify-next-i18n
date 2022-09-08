import dynamic from 'next/dynamic';

import CookieBanner from './CookieBanner';
import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import LandingPage from './LandingPage';
import SharedActionContentType from './SharedAction';
import SharedSectionContentType from './SharedSection';
import TeamMember from './TeamMember';
import Testimonial from './Testimonial';
import WebsitePage from './WebsitePage';

// Space definition
import { StoryblokNames } from '~/storyblok/space';

/* eslint-disable @typescript-eslint/camelcase */
// FIXME typescript definition
// declare available content types
const contentTypes: Partial<Record<StoryblokNames, any>> = {
	faq_content_type: FAQ,
	footer_content_type: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "website-page-chunk" */
				`./Footer`
			)
	}),
	header_content_type: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "website-page-chunk" */
				`./Header`
			)
	}),
	landing_page: LandingPage,
	shared_section_content_type: SharedSectionContentType,
	shared_action_content_type: SharedActionContentType,
	shared_testimonial_content_type: Testimonial,
	team_member_content_type: TeamMember,
	website_page: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "website-page-chunk" */
				`./WebsitePage`
			)
	}),
	cookie_consent: CookieBanner
};
/* eslint-enable @typescript-eslint/camelcase */

export default contentTypes;
