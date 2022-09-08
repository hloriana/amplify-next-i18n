import { StoryblokComponent } from 'storyblok-js-client';

import { HeadingModule } from '~/storyblok/components/heading-module/definition';

export interface StepModule extends StoryblokComponent<'step_module'> {
	title: HeadingModule[];
	body: StoryblokComponent<string>[];
}
