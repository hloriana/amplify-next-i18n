import { StoryblokComponent } from 'storyblok-js-client';

import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';

export interface TeamMemberContentType
	extends StoryblokComponent<'team_member_content_type'> {
	image: GraphicModule[];
	name: TextModule[];
	position: TextModule[];
}
