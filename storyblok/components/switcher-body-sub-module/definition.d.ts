import { StoryblokComponent } from 'storyblok-js-client';

export interface SwitcherBodySubModule
	extends StoryblokComponent<'switcher_body_sub_module'> {
	name: string;
	heading: StoryblokComponent<string>[];
	body: StoryblokComponent<string>[];
}
