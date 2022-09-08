import dynamic from 'next/dynamic';

import Action from './Action';
import ActionReference from './ActionReference';
import Banner from './Banner';
import Blog from './Blog';
import Card from './Card';
import CardTestimonial from './CardTestimonial';
import Collapse from './Collapse';
import Divider from './Divider';
import Graphic from './Graphic';
import Heading from './Heading';
import Icon from './Icon';
import Leadoo from './Leadoo';
import LeadooVisualbots from './LeadooVisualbots';
import List from './List';
import MapComponent from './Map';
import Promo from './Promo';
import Regional from './Regional';
import ScrollTop from './ScrollTop';
import Stepper from './Stepper';
import Sticky from './Sticky';
import Surface from './Surface';
import Switcher from './Switcher';
import TeamMember from './TeamMember';
import TestimonialReference from './TestimonialReference';
import Text from './Text';

// Space definition
import { StoryblokNames } from '~/storyblok/space';

/* eslint-disable @typescript-eslint/camelcase */
// declare available modules
const modules: Partial<Record<StoryblokNames, any>> = {
	action_module: Action,
	action_reference_module: ActionReference,
	banner_module: Banner,
	blog_module: Blog,
	card_module: Card,
	card_testimonial_module: CardTestimonial,
	carousel_module: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "carousel-module" */
				`./Carousel`
			),
		// TODO fix ssr rendering of carousels MW-401
		ssr: false
	}),
	calendly_module: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "calendly-module" */
				`./Calendly`
			),
		ssr: false
	}),
	collapse_module: Collapse,
	divider_module: Divider,
	form_integration_module: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "form-integration-module" */
				`./FormIntegration`
			)
	}),
	graphic_module: Graphic,
	heading_module: Heading,
	icon_module: Icon,
	infomeeting_module: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "website-page-chunk" */
				`./Infomeeting`
			)
	}),
	news_module: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "website-page-chunk" */
				`./News`
			)
	}),
	list_module: List,
	map_module: MapComponent,
	promo_module: Promo,
	regional_module: Regional,
	scroll_top_module: ScrollTop,
	stepper_module: Stepper,
	sticky_module: Sticky,
	surface_module: Surface,
	switcher_module: Switcher,
	team_member_module: TeamMember,
	testimonial_module: TestimonialReference,
	text_module: Text,
	leadoo_module: Leadoo,
	leadoo_visualbots_module: LeadooVisualbots,
	efset: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "website-page-chunk" */
				`./EFSET`
			)
	}),
	video_module: dynamic({
		loader: () =>
			import(
				/* webpackChunkName: "video-module" */
				`./Video`
			)
	})
};
/* eslint-enable @typescript-eslint/camelcase */

export default modules;
