import { StoryblokComponent } from 'storyblok-js-client';

import { RegionBodySubModule } from '~/storyblok/components/region-body-sub-module/definition';

export interface RegionalModule extends StoryblokComponent<'regional_module'> {
	default_content: StoryblokComponent<string>[];
	regional_content: RegionBodySubModule[];
}
