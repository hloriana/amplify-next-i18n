import { StoryblokComponent } from 'storyblok-js-client';

export interface RegionBodySubModule
	extends StoryblokComponent<'region_body_sub_module'> {
	region: string;
	body: StoryblokComponent<string>[];
}
