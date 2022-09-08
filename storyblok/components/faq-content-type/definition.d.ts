import { StoryblokComponent } from 'storyblok-js-client';

export interface FaqContentType extends StoryblokComponent<'faq_content_type'> {
	head: StoryblokComponent<string>[];
	body: StoryblokComponent<string>[];
}
