import { StoryblokComponent } from 'storyblok-js-client';

export interface SharedSectionContentType
	extends StoryblokComponent<'shared_section_content_type'> {
	section: StoryblokComponent<string>[];
}
