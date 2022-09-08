/* eslint-disable no-nested-ternary */
import dynamic from 'next/dynamic';

import React, {
	FunctionComponent,
	useState,
	useEffect,
} from 'react';

import {
	ValidFieldConfiguration,
	IForm
} from '@ilc-technology/form-renderer/react';
import { cx, css } from 'linaria';
import SbEditable from 'storyblok-react';

import ActionReference from './ActionReference';

import { ActionModule } from '~/storyblok/components/action-module/definition';
import { FormIntegrationModule } from '~/storyblok/components/form-integration-module/definition';
import { FormIntegrationTypeBrochureSfSubModule } from '~/storyblok/components/form-integration-type-brochure-sf-sub-module/definition';
import { FormIntegrationTypeBrochureSubModule } from '~/storyblok/components/form-integration-type-brochure-sub-module/definition';
import { FormIntegrationTypeContactSfSubModule } from '~/storyblok/components/form-integration-type-contact-sf-sub-module/definition';
import { FormIntegrationTypeContactSubModule } from '~/storyblok/components/form-integration-type-contact-sub-module/definition';
import { FormIntegrationTypeEfsetAdmissionsSfSubModule } from '~/storyblok/components/form-integration-type-efset-admissions-sf-sub-module/definition';
import { FormIntegrationTypeEfsetSchoolSfSubModule } from '~/storyblok/components/form-integration-type-efset-school-sf-sub-module/definition';
import { FormIntegrationTypeEfsetSfSubModule } from '~/storyblok/components/form-integration-type-efset-sf-sub-module/definition';
import { FormIntegrationTypeInfomeetingSfSubModule } from '~/storyblok/components/form-integration-type-infomeeting-sf-sub-module/definition';
import { FormIntegrationTypeSharedHsIaBrochureSubModule } from '~/storyblok/components/form-integration-type-shared-hs-ia-brochure-sub-module/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';
import {
	getAlignmentFontClasses,
	getSizeWeightFontClasses
} from '~/components/settings/Font';
import { getColoringClasses } from '~/components/settings/Coloring';
import Action from '~/components/modules/Action';
import EnvContext from '~/contexts/EnvContext';
import ModuleWrap from '~/components/other/ModuleWrap';

import { ActionReferenceModule } from '~/storyblok/components/action-reference-module/definition';
import RichTextResolver from '~/utils/richtext.service';

// Get Storyblok content resolver
const richTextResolver = new RichTextResolver();

// eslint-disable-next-line import/dynamic-import-chunkname
const FormWrapper = dynamic(() =>
	import('@ilc-technology/form-renderer/react').then(
		(mod) => mod.FormWrapper,
		(e) => null as never
	)
);

// NOTE monkey patching forms styles
const FormCss = css`
	& .ef-form-control {
		@apply relative mb-2 align-items-center;
		// display: flex;
		// flex-wrap: wrap;
		transition: all 0.15s;

		&.ef-form-date-wrapper {
			display: flex;
		}

		& .ef-form-group {
			@apply w-full mx-2 justify-content-center;

			& .ef-form-input-group {
				@apply mb-2;
			}
		}

		&:not(.ef-boolean) {
			@apply text-ink-black;
		}

		& .ef-form-group.-inline {
			display: flex;
			flex-direction: column;

			@screen md {
				flex-direction: row;
			}
		}

		&.ef-form-hidden {
			display: none;
		}

		& .ef-input {
			@apply w-full p-4 pb-0 h-12 bg-white border border-ui-light-gray rounded;

			& + .ef-input {
				@apply ml-2;
			}
		}

		// radio
		&.ef-boolean {
			& .ef-boolean {
				display: flex;
			}

			.ef-boolean__input {
				display: none;
			}

			.label-text {
				@apply mx-2;
			}
		}

		& .ef-boolean__element {
			@apply relative w-6 h-6 align-self-start align-items-center justify-content-center bg-white border border-ui-light-gray;
			display: flex;
			flex: 0 0 auto;

			&.-radio {
				@apply rounded-full;

				&::before {
					@apply rounded-full bg-white invisible;
				}
			}

			&.-checkbox {
				@apply rounded-sm;
			}

			&::before {
				@apply w-3 h-3 z-10 block;
				content: '';
			}

			&::after {
				@apply z-0 absolute rounded-none opacity-0 block;
				content: '';
				width: 140%;
				height: 100%;
				top: 0;
				left: -20%;
			}
		}

		& .ef-boolean__input:checked {
			& ~ .-radio::before,
			& ~ .-checkbox::before {
				@apply visible;
			}

			& ~ .-checkbox::before {
				background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQuNzEgMTEuMTdsLS43MS0uNzFhMSAxIDAgMDAtMS40MSAwbC04LjcxIDguNzEtNC40Ni00LjQ2YTEgMSAwIDAwLTEuNDEgMGwtLjcxLjcxYTEgMSAwIDAwMCAxLjQxTDEyLjQ2IDIybC43MS43MWExLjE1IDEuMTUgMCAwMC4zMy4yMS45NC45NCAwIDAwLjc2IDAgMS4xNSAxLjE1IDAgMDAuMzMtLjIxbC43LS43MSA5LjQyLTkuNDJhMSAxIDAgMDAwLTEuNDF6Ii8+PC9zdmc+);
				background-size: 16px;
				background-repeat: no-repeat;
				background-position: 50%;
			}

			&:not(:disabled):not([disabled]) ~ .-radio,
			&:not(:disabled):not([disabled]) ~ .-checkbox {
				@apply overflow-hidden relative bg-fire-alarm;

				&::after {
					@apply opacity-100;
				}
			}
		}

		// Form label movement
		&.ef-form-empty.ef-form-text-wrapper .ef-form-label {
			@apply text-paragraph opacity-100;
			top: 1.5rem;
			transform: translateY(-50%);
		}

		&:not(.ef-boolean) .ef-input:focus ~ .ef-form-label,
		&:not(.ef-boolean) .ef-form-label {
			@apply absolute px-4 text-ui-label opacity-75;
			left: 0;
			top: 2px;
			transition: all 0.2s ease 0s;
		}

		&.ef-form-text-wrapper.ef-form-empty .ef-input:focus ~ .ef-form-label {
			top: 12px;
		}

		// Form validation
		&.ef-form-birthDate-wrapper .ef-input {
			flex: 1;
		}
		// &.ef-boolean.-is-valid .ef-boolean__element,
		// &.-is-valid .ef-input {
		// 	@apply border-ui-success;
		// }
		&.ef-boolean.-is-invalid .ef-boolean__element,
		&.-is-invalid .ef-input {
			@apply border-ui-warning;
		}

		&:not(.ef-boolean, .ef-form-richtext-wrapper).-is-invalid,
		&:not(.ef-boolean, .ef-form-richtext-wrapper).-is-valid {
			&::after {
				@apply block w-4 h-4 rounded-full absolute z-10 pointer-events-none;
				top: 24px;
				transform: translateY(-50%);
				right: 1rem;
				content: '';
				transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			}
		}

		&:not(.ef-boolean).ef-form-invalid {
			.ef-form-validation {
				margin-top: 5px;
				p {
					@apply text-ui-label;
					color: #f26552;
				}
			}
		}

		&:not(.ef-boolean).-is-valid::after {
			background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48cGF0aCBkPSJNMTYgMGExNiAxNiAwIDEwMTYgMTZBMTYgMTYgMCAwMDE2IDB6bTguNzEgMTIuNThMMTUuMjkgMjJsLS43LjcxYTEuMTUgMS4xNSAwIDAxLS4zMy4yMS45NC45NCAwIDAxLS43NiAwIDEuMTUgMS4xNSAwIDAxLS4zMy0uMjFsLS43MS0uNzEtNS4xNi01LjE3YTEgMSAwIDAxMC0xLjQxbC43LS43MWExIDEgMCAwMTEuNDEgMGw0LjQ2IDQuNDYgOC43MS04LjcxYTEgMSAwIDAxMS40MSAwbC43MS43MWExIDEgMCAwMS4wMSAxLjQxeiIgZmlsbD0iIzVEQTMzNSIvPjwvc3ZnPg==);
			background-size: 16px;
			background-repeat: no-repeat;
			background-position: 50%;
		}

		&:not(.ef-boolean).-is-invalid::after {
			background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48cGF0aCBkPSJNMTYgMGExNiAxNiAwIDEwMTYgMTZBMTYgMTYgMCAwMDE2IDB6bTYuNzEgMjAuNTlhMSAxIDAgMDEwIDEuNDFsLS43MS43MWExIDEgMCAwMS0xLjQxIDBMMTYgMTguMTJsLTQuNTkgNC41OWExIDEgMCAwMS0xLjQxIDBMOS4yOSAyMmExIDEgMCAwMTAtMS40MUwxMy44OCAxNmwtNC41OS00LjU5YTEgMSAwIDAxMC0xLjQxbC43MS0uNzFhMSAxIDAgMDExLjQxIDBMMTYgMTMuODhsNC41OS00LjU5YTEgMSAwIDAxMS40MSAwbC43MS43MWExIDEgMCAwMTAgMS40MUwxOC4xMiAxNnoiIGZpbGw9IiNEMTMzNEEiLz48L3N2Zz4=);
			background-size: 16px;
			background-repeat: no-repeat;
			background-position: 50%;
		}
	}

	& .ef-form-submit-container:not(.ef-form-hidden) {
		@apply justify-content-center;
		display: flex;
	}

	& .ef-form-submitTextCombined-wrapper {
		display: block;
		color: inherit !important;
	}

	& .ef-form-submit {
		@apply w-full py-4 px-6 text-ui-label rounded-full bg-fire-alarm text-white justify-content-center;
		display: flex;

		&:hover {
			@apply shadow;
		}

		@screen md {
			@apply w-auto;
			min-width: 275px;
		}
	}

	& select,
	& input[type='date'] {
		appearance: none;
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KCTxwYXRoIGQ9Ik0yNS45IDExLjU3QTEgMSAwIDAwMjUgMTFIN2ExIDEgMCAwMC0uNzcgMS42M2w5IDExYTEgMSAwIDAwMS41NCAwbDktMTFhMSAxIDAgMDAuMTMtMS4wNnoiIC8+Cjwvc3ZnPg==');
		background-size: 16px;
		background-position: center right 0.5rem;
		background-repeat: no-repeat;
	}

	& .iti--separate-dial-code .iti__selected-flag {
		background-color: transparent;
	}

	& .iti__selected-dial-code {
		display: none;
	}
`;

interface FormType {
	id: string;
	settings?: Function;
	fields?: ValidFieldConfiguration[];
}

// endpoint, enqformtype, formtype, enqformid
const formTypeMapping: {
	[key: string]: string[];
} = {
	'brochure': ['B'],
	'contactus': ['CU'],
	'infomeeting': ['IM'],
	'campaign': ['CAM'],
	'efset-school': ['EFSET_SCHOOL']
};

function getFormTypeMapping(type: string) {
	let index = 'brochure';
	Object.keys(formTypeMapping).forEach((key) => {
		if (new RegExp(key).test(type)) {
			index = key;
		}
	});

	const [FormType] = formTypeMapping[index];

	return { FormType };
}

const SharedHSEYIAType = (
	content: FormIntegrationTypeSharedHsIaBrochureSubModule
): FormType => {
	// NOTE monkey patch to fit in the rendering of the form (accepts only string)
	const embeddedTextModule = (module: TextModule) => `
		<div
			class="${cx(
				'typo-richtext',
				`typo-${module.text_level}`,
				getAlignmentFontClasses(module.font_settings),
				getSizeWeightFontClasses(module.font_settings),
				getColoringClasses(module.coloring_settings)
			)}"
			data-name="text-module"
		>
			${
				module.text &&
				richTextResolver
					.render(module.text)
					// replaces escaped '&nbsp;' back to html
					.replace(/&ampnbsp;/g, '&nbsp;')
					// replaces empty p tag as br for new lines
					.replace(/<p><\/p>/g, '<br />')
			}
		</div>
`;

	return {
		id: 'brochure-ia-sf',
		settings: (form: IForm) => {
			/* eslint-disable no-param-reassign */
			form.data.extendedDetail.ProductCode =
				form.settings.plugins?.legacySettings.productCode;
			form.data.extendedDetail.ProgramCode =
				form.settings.plugins?.legacySettings.programCode;
			/* eslint-enable no-param-reassign */
		},
		fields: [
			{
				name: 'productRadio',
				type: 'radio',
				// group: 'productRadio',
				businessRules: [],
				validationRules: [
					{
						type: 'required',
						value: 'true',
						errorMessage: 'Required field',
						async: false
					}
				],
				defaultValue: undefined,
				options: [
					{
						code: 'HSEY',
						text: `EF High School Exchange Year<br />${embeddedTextModule(
							content.hsey_text?.[0]
						)}`
					},
					{
						code: 'IA',
						text: `EF Academy<br />${embeddedTextModule(
							content.academy_text?.[0]
						)}`
					}
				]
			}
		]
	};
};

const BrochureType = (
	content: FormIntegrationTypeBrochureSubModule
): FormType => {
	return {
		id: 'brochure-ia'
	};
};

const ContactType = (
	content: FormIntegrationTypeContactSubModule
): FormType => {
	return {
		id: 'contactus-ia'
	};
};

const BrochureSFType = (
	content: FormIntegrationTypeBrochureSfSubModule
): FormType => {
	return {
		id: 'brochure-ia-sf'
	};
};

const ContactSFType = (
	content: FormIntegrationTypeContactSfSubModule
): FormType => {
	return {
		id: 'contactus-ia-sf'
	};
};

const InfomeetingType = (
	content: FormIntegrationTypeInfomeetingSfSubModule
): FormType => {
	return {
		id: 'infomeeting-ia-sf'
	};
};

const EfsetType = (content: FormIntegrationTypeEfsetSfSubModule): FormType => {
	return {
		id: 'efset-ia-sf'
	};
};

const EfsetAdmissionsType = (
	content: FormIntegrationTypeEfsetAdmissionsSfSubModule
): FormType => {
	return {
		id: 'efset-admissions-ia-sf'
	};
};

const EfsetSchoolType = (
	content: FormIntegrationTypeEfsetSchoolSfSubModule
): FormType => {
	return {
		id: 'efset-school-test-ia-sf'
	};
};

enum FormStatus {
	LOADED, // the form is loaded
	STARTED, // the form has started
	LOADING, // the form request is on the fly
	DONE // the form has been submitted
}

let logger;

const FormIntegration: FunctionComponent<{
	content: FormIntegrationModule;
	handleFormSubmit: any;
}> = (props) => {
	const { content, handleFormSubmit } = props;
	const action = content.action[0];

	const [formState, setFormState] = useState(FormStatus.LOADED);

	const [btn, setBtn] = useState<Element | null>(null);
	// NOTE this is a monkey patch for SSR on FormsX
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const importLogger = async () => {
			logger = (await import('~/utils/logger')).default;
		};
		importLogger();
		setMounted(true);
	}, []);

	const contentType = content.type?.[0];
	let renderedType: FormType = { id: 'contactus' };

	switch (contentType?.component) {
		case 'form_integration_type_shared_hs_ia_brochure_sub_module':
			renderedType = SharedHSEYIAType(contentType);
			break;
		case 'form_integration_type_brochure_sub_module':
			renderedType = BrochureType(contentType);
			break;
		case 'form_integration_type_contact_sub_module':
			renderedType = ContactType(contentType);
			break;
		case 'form_integration_type_brochure_sf_sub_module':
			renderedType = BrochureSFType(contentType);
			break;
		case 'form_integration_type_contact_sf_sub_module':
			renderedType = ContactSFType(contentType);
			break;
		case 'form_integration_type_infomeeting_sf_sub_module':
			renderedType = InfomeetingType(contentType);
			break;
		case 'form_integration_type_efset_sf_sub_module':
			renderedType = EfsetType(contentType);
			break;
		case 'form_integration_type_efset_admissions_sf_sub_module':
			renderedType = EfsetAdmissionsType(contentType);
			break;
		case 'form_integration_type_efset_school_sf_sub_module':
			renderedType = EfsetSchoolType(contentType);
			break;
		default:
			break;
	}

	const editorsView = (action as ActionReferenceModule).action_reference ? (
		<ActionReference
			content={action as ActionReferenceModule}
			formHack={[formState, null, handleFormSubmit]}
		/>
	) : (
		<Action
			content={action as ActionModule}
			formHack={[formState, null, handleFormSubmit]}
		/>
	);

	const realView = (action as ActionReferenceModule).action_reference ? (
		<ActionReference
			content={action as ActionReferenceModule}
			formHack={[formState, btn, null]}
		/>
	) : (
		<Action
			content={action as ActionModule}
			formHack={[formState, btn, null]}
		/>
	);

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<div className={cx(``)} data-name="form-integration-module">
					<EnvContext.Consumer>
						{({ efMarketCode }) =>
							mounted && (
								<>
									<FormWrapper
										// eslint-disable-next-line no-underscore-dangle
										formWrapperId={`form-${content._uid}`}
										id={renderedType.id || ''}
										marketCode={efMarketCode}
										formWrapperCSSClass={FormCss}
										labelAsPlaceholder={['textarea']}
										formConfigurationEndpoint={
											process.env.ENVIRONMENT !== 'production'
												? `https://qa.ef.com/wwen/forms/{type}/{market}.json?${new Date().getTime()}`
												: `https://www.ef.com/wwen/forms/{type}/{market}.json?${new Date().getTime()}`
										}
										plugins={{
											legacySettings: {
												productCode: 'IA',
												programCode: 'IB',
												websiteId: 'LP'
											}
										}}
										onPreConfigurationDownloaded={(form) => {
											if (form.formConfiguration) {
												form.formConfiguration.fields.unshift(
													...(renderedType.fields ?? [])
												);
											}
										}}
										onFormRendered={(form) => {
											// // read event id
											// const urlParams = new URLSearchParams(
											// 	window.location.search
											// );
											// const formId = urlParams.get('id');

											if (form.htmlElement) {
												// NOTE hack to hook custom action to form
												setBtn(
													form.htmlElement.querySelector(
														'button.ef-form-submit'
													)
												);

												// Hide fields not needed
												const hiddenFields = [
													'.ef-form-phoneRadio-wrapper',
													'.ef-form-userSelectedSourceCode-wrapper',
													'.ef-form-submit-container'
												];

												// if (
												// 	renderedType.id === 'infomeeting-ia-sf' &&
												// 	formId !== '5200'
												// ) {
												// 	//	disable adress fields except pasadena(5200) meeting
												// 	hiddenFields.push(
												// 		'.ef-form-addressLine1-wrapper',
												// 		'.ef-form-houseNumber-wrapper',
												// 		'.ef-form-postalCode-wrapper',
												// 		'.ef-form-city-wrapper'
												// 	);
												// }

												if (renderedType.id !== 'contactus-ia-sf') {
													hiddenFields.push('.ef-form-comments-wrapper');
												}

												hiddenFields.forEach((selector) => {
													form.htmlElement
														?.querySelector(selector)
														?.classList.add('ef-form-hidden');
												});

												// NOTE attach for GTM event
												form.htmlElement
													.querySelectorAll('input')
													.forEach((i) => {
														i.addEventListener('focus', () => {
															if (formState === FormStatus.LOADED)
																setFormState(FormStatus.STARTED);
														});
													});
												// NOTE add missing class to date input types
												form.htmlElement
													.querySelectorAll(`input[type='date']`)
													.forEach((i) => i.classList.add('ef-input'));
												// NOTE add form type attribute
												const { id: formType } = form.settings;
												const { FormType } = getFormTypeMapping(formType);
												form.htmlElement.setAttribute('form-type', FormType);
											}
										}}
										onSubmissionCompleted={() => {
											// reset state
											setFormState(FormStatus.DONE);
											if (handleFormSubmit) {
												handleFormSubmit();
											}
											// NOTE GTM event form.submitted
											if (
												renderedType.id === 'efset-ia-sf' ||
												renderedType.id === 'efset-admissions-ia-sf'
											) {
												window.location.href = `${
													window.location.toString().split('?')[0]
												}test`;
											}
										}}
										onValidationFailed={(form) => {
											logger.push({
												hook: 'onValidationFailed',
												data: form.data,
												haveIntlPluginInitialised: (window as any)
													.intlTelInputGlobals
													? 'yes'
													: 'no',
												errors: form.validationErrors
											});
										}}
										//onPreSubmissionObjectReady
										onPreSubmissionObjectReady={(form) => {
											if (form.data.productRadio) {
												// eslint-disable-next-line no-param-reassign
												form.settings.plugins = {
													legacySettings: {
														productCode:
															form.data.productRadio === 'IA' ? 'IA' : 'HSY',
														programCode:
															form.data.productRadio === 'IA' ? 'IB' : 'HSY',
														websiteId: 'LP'
													}
												};
											}
											if (
												renderedType.id === 'efset-ia-sf' ||
												renderedType.id === 'efset-admissions-ia-sf'
											) {
												const userId = new Array(32)
													.fill(0)
													.map((x) => Math.random().toString(36).charAt(2))
													.join('');

												if (typeof window !== 'undefined') {
													localStorage.setItem('userId', userId);
												}

												// eslint-disable-next-line no-param-reassign
												form.data.campaignData = {
													campaignName: 'EFSET_Academy',
													campaignAllocationCode: 'single',
													campaignAllocationPrograms: 'IB',
													campaignQuestionAnswer: [
														{
															question: 'CampaignID',
															answer: userId
														}
													]
												};
											}
											logger.push({
												hook: 'onPreSubmissionObjectReady',
												data: form.data
											});
										}}
										onPostSubmissionObjectReady={(form) => {
											logger.push({
												hook: 'onPostSubmissionObjectReady',
												data: form.data
											});

											if (renderedType.id === 'infomeeting-ia-sf') {
												const urlParams = new URLSearchParams(
													window.location.search
												);
												const result = urlParams.get('id');

												// eslint-disable-next-line no-param-reassign
												form.data.infomeetingData = {
													infomeetingId: result,
													attendees: form.data.attendees
												};
											}

											if (
												renderedType.id !== 'brochure-ia' &&
												renderedType.id !== 'contactus-ia' &&
												efMarketCode === 'kr'
											) {
												// eslint-disable-next-line no-param-reassign
												form.data.lastName = form.data.firstName.slice(0, 1);
												// eslint-disable-next-line no-param-reassign
												form.data.firstName = form.data.firstName.slice(
													1,
													form.data.firstName.length
												);
											}

											// set form type
											const { id: formType } = form.settings;
											const { FormType } = getFormTypeMapping(formType);
											const location = window.location.toString();
											// eslint-disable-next-line no-param-reassign
											form.data.internalData = {
												FormType
											};

											// set country code
											// eslint-disable-next-line no-param-reassign
											form.data.countryCode =
												form.data.countryCode ?? form.settings.marketCode;
											/* eslint-disable no-param-reassign */
											form.data.extendedDetail = form.data.extendedDetail ?? {};
											form.data.tracking = form.data.tracking ?? {};
											form.data.tracking.entryPage =
												form.data.tracking.entryPage ?? location;
											form.data.tracking.formUrl =
												form.data.tracking.formUrl ?? location;
											form.data.tracking.externalReferringUrl =
												form.data.tracking.externalReferringUrl ??
												(document.referrer || location);
											form.data.tracking.referringUrl =
												form.data.tracking.referringUrl ??
												(document.referrer || location);
											form.data.tracking.deviceType = `${form.data.tracking.deviceType} ${navigator.userAgent}`;
											/* eslint-enable no-param-reassign */

											// match and extract etag and other stuff
											const extracted = location.match(
												/.+\?source=(\d+),(\w+).+/
											);
											// if has some matches
											if (extracted && extracted.length > 2) {
												// const url = extracted[0];
												const entryCode = extracted[1];
												const eTag = extracted[2];

												/* eslint-disable no-param-reassign */
												form.data.tracking.EntrySourceCode =
													form.data.tracking.EntrySourceCode ?? entryCode;
												form.data.tracking.Etag =
													form.data.tracking.Etag ?? eTag;
												form.data.tracking.rawEtag =
													form.data.tracking.rawEtag ?? `${entryCode},${eTag}`;
												/* eslint-enable no-param-reassign */
											}
											// if the rendered type needs to change the settings
											renderedType.settings?.(form);

											// set the form to a loading state
											setFormState(FormStatus.LOADING);

											// NOTE GTM event form.ready
											// NOTE GTM event form.submit
										}}
									/>
								</>
							)
						}
					</EnvContext.Consumer>
				</div>
			</ModuleWrap>
			{/* FIXME seen the name, this is a temporary workaround to monkey patch EF forms */}
			{realView}
			{/* {process.env.ENVIRONMENT === 'editor' ? editorsView : realView} */}
		</SbEditable>
	);
};

export default FormIntegration;

export { FormStatus };
