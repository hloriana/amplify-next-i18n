import { StoryblokComponent } from 'storyblok-js-client';

import { BannerModule } from '~/storyblok/components/banner-module/definition';
import { SeoMetatagsField } from '~/storyblok/space';

export interface WebsitePage extends StoryblokComponent<'website_page'> {
	seo: SeoMetatagsField;
	seo_index: boolean;
	body: StoryblokComponent<string>[];
	campus: string;
	promo_settings: StoryblokComponent<string>[];
	top_banner: BannerModule[];
	bottom_banner: BannerModule[];
	header_variant: 'light' | 'dark' | '';
}
