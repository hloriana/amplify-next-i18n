import { StoryblokComponent } from 'storyblok-js-client';

import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { StepModule } from '~/storyblok/components/step-module/definition';

export interface StepperModule extends StoryblokComponent<'stepper_module'> {
	steps: StepModule[];
	module_settings: ModuleGridSettings[];
}
