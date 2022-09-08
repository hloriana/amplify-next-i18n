import { StoryblokComponent } from 'storyblok-js-client';

export interface InfomeetingModule
	extends StoryblokComponent<'infomeeting_module'> {
	marketCode: string;
	empty_body: StoryblokComponent<string>[];
}
