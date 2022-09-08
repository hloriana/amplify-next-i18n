import { StoryblokComponent } from 'storyblok-js-client';

import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

export interface TeamMemberModule
	extends StoryblokComponent<'team_member_module'> {
	team_member: string;
	module_settings: ModuleGridSettings[];
	spacing_settings: SpacingComponentSettings[];
}
