import { StoryblokComponent } from 'storyblok-js-client';

import { ActionModule } from '~/storyblok/components/action-module/definition';
import { ActionReferenceModule } from '~/storyblok/components/action-reference-module/definition';
import { FormIntegrationTypeBrochureSfSubModule } from '~/storyblok/components/form-integration-type-brochure-sf-sub-module/definition';
import { FormIntegrationTypeBrochureSubModule } from '~/storyblok/components/form-integration-type-brochure-sub-module/definition';
import { FormIntegrationTypeContactSfSubModule } from '~/storyblok/components/form-integration-type-contact-sf-sub-module/definition';
import { FormIntegrationTypeContactSubModule } from '~/storyblok/components/form-integration-type-contact-sub-module/definition';
import { FormIntegrationTypeEfsetAdmissionsSfSubModule } from '~/storyblok/components/form-integration-type-efset-admissions-sf-sub-module/definition';
import { FormIntegrationTypeEfsetSchoolSfSubModule } from '~/storyblok/components/form-integration-type-efset-school-sf-sub-module/definition';
import { FormIntegrationTypeEfsetSfSubModule } from '~/storyblok/components/form-integration-type-efset-sf-sub-module/definition';
import { FormIntegrationTypeInfomeetingSfSubModule } from '~/storyblok/components/form-integration-type-infomeeting-sf-sub-module/definition';
import { FormIntegrationTypeSharedHsIaBrochureSubModule } from '~/storyblok/components/form-integration-type-shared-hs-ia-brochure-sub-module/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';

export interface FormIntegrationModule
	extends StoryblokComponent<'form_integration_module'> {
	type: (
		| FormIntegrationTypeBrochureSubModule
		| FormIntegrationTypeContactSubModule
		| FormIntegrationTypeSharedHsIaBrochureSubModule
		| FormIntegrationTypeEfsetSfSubModule
		| FormIntegrationTypeInfomeetingSfSubModule
		| FormIntegrationTypeBrochureSfSubModule
		| FormIntegrationTypeContactSfSubModule
		| FormIntegrationTypeEfsetAdmissionsSfSubModule
		| FormIntegrationTypeEfsetSchoolSfSubModule
	)[];
	action: (ActionModule | ActionReferenceModule)[];
	module_settings: ModuleGridSettings[];
}
