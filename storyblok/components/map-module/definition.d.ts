import { StoryblokComponent } from 'storyblok-js-client';

import { MapSectionSubModule } from '~/storyblok/components/map-section-sub-module/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';

export interface MapModule extends StoryblokComponent<'map_module'> {
	module_settings: ModuleGridSettings[];
	sections: MapSectionSubModule[];
	hide_inactive: boolean;
}
