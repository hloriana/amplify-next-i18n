import { StoryblokComponent } from 'storyblok-js-client';

import { BannerModule } from '~/storyblok/components/banner-module/definition';
import { SeoMetatagsField } from '~/storyblok/space';

export interface LandingPage extends StoryblokComponent<'landing_page'> {
	seo: SeoMetatagsField;
	body: StoryblokComponent<string>[];
	top_banner: BannerModule[];
	bottom_banner: BannerModule[];
	seo_index: boolean;
}
