import { StoryblokComponent } from 'storyblok-js-client';

import { TextModule } from '~/storyblok/components/text-module/definition';

export interface FormIntegrationTypeSharedHsIaBrochureSubModule
	extends StoryblokComponent<'form_integration_type_shared_hs_ia_brochure_sub_module'> {
	hsey_text: TextModule[];
	academy_text: TextModule[];
}
