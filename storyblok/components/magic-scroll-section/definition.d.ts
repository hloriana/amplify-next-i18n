import { StoryblokComponent } from 'storyblok-js-client';

export interface MagicScrollSection
	extends StoryblokComponent<'magic_scroll_section'> {
	name: string;
	body: StoryblokComponent<string>[];
	skip_after_sections: number;
}
