import { FunctionComponent, ComponentClass, ClassAttributes } from 'react';
import { StoryblokComponent } from 'storyblok-js-client';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';
import { ActionBehaviorMenuSubModule } from '~/storyblok/components/action-behavior-menu-sub-module/definition';
import { ActionBehaviorModalSubModule } from '~/storyblok/components/action-behavior-modal-sub-module/definition';
import { ActionBehaviorPopUpFormSubModule } from '~/storyblok/components/action-behavior-pop-up-form-sub-module/definition';
import { ActionBehaviorPopUpFormSubmitSubModule } from '~/storyblok/components/action-behavior-pop-up-form-submit-sub-module/definition';
import { ActionBehaviorScrollSubModule } from '~/storyblok/components/action-behavior-scroll-sub-module/definition';
import { ActionModule } from '~/storyblok/components/action-module/definition';
import { ActionReferenceModule } from '~/storyblok/components/action-reference-module/definition';
import { AspectRatioSettings } from '~/storyblok/components/aspect-ratio-settings/definition';
import { BackgroundPositionSettings } from '~/storyblok/components/background-position-settings/definition';
import { BackgroundSettings } from '~/storyblok/components/background-settings/definition';
import { BackgroundSizeSettings } from '~/storyblok/components/background-size-settings/definition';
import { BannerModule } from '~/storyblok/components/banner-module/definition';
import { Blog } from '~/storyblok/components/blog/definition';
import { BlogModule } from '~/storyblok/components/blog-module/definition';
import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';
import { BodyGridSettings } from '~/storyblok/components/body-grid-settings/definition';
import { BorderSettings } from '~/storyblok/components/border-settings/definition';
import { CampusMenuModule } from '~/storyblok/components/campus-menu-module/definition';
import { CardActionSubModule } from '~/storyblok/components/card-action-sub-module/definition';
import { CardBehaviorCharacterSensitiveSubModule } from '~/storyblok/components/card-behavior-character-sensitive-sub-module/definition';
import { CardBehaviorFlipSubModule } from '~/storyblok/components/card-behavior-flip-sub-module/definition';
import { CardModule } from '~/storyblok/components/card-module/definition';
import { CardTestimonialModule } from '~/storyblok/components/card-testimonial-module/definition';
import { CardTestimonialsSection } from '~/storyblok/components/card-testimonials-section/definition';
import { CarouselBehaviorHideSubModule } from '~/storyblok/components/carousel-behavior-hide-sub-module/definition';
import { CarouselModule } from '~/storyblok/components/carousel-module/definition';
import { CollapseModule } from '~/storyblok/components/collapse-module/definition';
import { CollapsePanelSubModule } from '~/storyblok/components/collapse-panel-sub-module/definition';
import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { ColumnComponentSettings } from '~/storyblok/components/column-component-settings/definition';
import { CookieConsent } from '~/storyblok/components/cookie-consent/definition';
import { DividerModule } from '~/storyblok/components/divider-module/definition';
import { Efset } from '~/storyblok/components/efset/definition';
import { FaqContentType } from '~/storyblok/components/faq-content-type/definition';
import { FontSettings } from '~/storyblok/components/font-settings/definition';
import { FooterContentType } from '~/storyblok/components/footer-content-type/definition';
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
import { GradientModule } from '~/storyblok/components/gradient-module/definition';
import { GraphicActionSubModule } from '~/storyblok/components/graphic-action-sub-module/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { GridSection } from '~/storyblok/components/grid-section/definition';
import { GridSettings } from '~/storyblok/components/grid-settings/definition';
import { HeaderContentType } from '~/storyblok/components/header-content-type/definition';
import { HeadingModule } from '~/storyblok/components/heading-module/definition';
import { IconModule } from '~/storyblok/components/icon-module/definition';
import { InfomeetingModule } from '~/storyblok/components/infomeeting-module/definition';
import { InfomeetingPageSection } from '~/storyblok/components/infomeeting-page-section/definition';
import { LandingPage } from '~/storyblok/components/landing-page/definition';
import { LeadooModule } from '~/storyblok/components/leadoo-module/definition';
import { LeadooVisualbotsModule } from '~/storyblok/components/leadoo-visualbots-module/definition';
import { ListItemSubModule } from '~/storyblok/components/list-item-sub-module/definition';
import { ListModule } from '~/storyblok/components/list-module/definition';
import { MagicScrollSection } from '~/storyblok/components/magic-scroll-section/definition';
import { MapModule } from '~/storyblok/components/map-module/definition';
import { MapSectionSubModule } from '~/storyblok/components/map-section-sub-module/definition';
import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';
import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';
import { NewsModule } from '~/storyblok/components/news-module/definition';
import { PromoModule } from '~/storyblok/components/promo-module/definition';
import { RedirectorContainer } from '~/storyblok/components/redirector-container/definition';
import { RedirectorRedirection } from '~/storyblok/components/redirector-redirection/definition';
import { RegionBodySubModule } from '~/storyblok/components/region-body-sub-module/definition';
import { RegionalModule } from '~/storyblok/components/regional-module/definition';
import { ScrollTopModule } from '~/storyblok/components/scroll-top-module/definition';
import { SharedActionContentType } from '~/storyblok/components/shared-action-content-type/definition';
import { SharedActionModule } from '~/storyblok/components/shared-action-module/definition';
import { SharedSection } from '~/storyblok/components/shared-section/definition';
import { SharedSectionContentType } from '~/storyblok/components/shared-section-content-type/definition';
import { SharedTestimonialContentType } from '~/storyblok/components/shared-testimonial-content-type/definition';
import { SizingPresetSettings } from '~/storyblok/components/sizing-preset-settings/definition';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';
import { SpacingLayoutSettings } from '~/storyblok/components/spacing-layout-settings/definition';
import { StepModule } from '~/storyblok/components/step-module/definition';
import { StepperModule } from '~/storyblok/components/stepper-module/definition';
import { StickyModule } from '~/storyblok/components/sticky-module/definition';
import { SurfaceModule } from '~/storyblok/components/surface-module/definition';
import { SwitcherBehaviorDropdownSubModule } from '~/storyblok/components/switcher-behavior-dropdown-sub-module/definition';
import { SwitcherBehaviorToggleSubModule } from '~/storyblok/components/switcher-behavior-toggle-sub-module/definition';
import { SwitcherBodySubModule } from '~/storyblok/components/switcher-body-sub-module/definition';
import { SwitcherModule } from '~/storyblok/components/switcher-module/definition';
import { TeamMemberContentType } from '~/storyblok/components/team-member-content-type/definition';
import { TeamMemberModule } from '~/storyblok/components/team-member-module/definition';
import { TestimonialModule } from '~/storyblok/components/testimonial-module/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';
import { TransformSettings } from '~/storyblok/components/transform-settings/definition';
import { VideoModule } from '~/storyblok/components/video-module/definition';
import { WebsitePage } from '~/storyblok/components/website-page/definition';

export interface MultilinkField {
	id: string;
	cached_url: string;
	url: string;
	linktype: string;
}

export interface AdvancedImageField {
	alt_tag: string;
	caption: string;
	copyright_info: string;
	image: string;
	plugin: string;
}

export interface NativeColorPickerField {
	color: string;
	plugin: string;
}

export interface SeoMetatagsField {
	title: string;
	description: string;
	og_title: string;
	og_description: string;
	og_image: string;
	twitter_title: string;
	twitter_description: string;
	twitter_image: string;
}

export interface OptimizelyField {
	segments: number[];
}

export interface ComponentSelectorField {
	version: 'draft' | 'published';
	type: string;
	reference: string;
	name: string;
	selected: string;
}

export interface ImageFocusField {
	src: string;
	x: string;
	y: string;
}

export interface StoryblokProps<T> extends ClassAttributes<T> {
	content: T;
}

export type StoryblokReactComponent =
	| FunctionComponent<StoryblokProps<any>>
	| ComponentClass<StoryblokProps<any>>;

export type StoryblokSpaceComponents = Partial<
	Record<StoryblokNames, StoryblokReactComponent>
> &
	Record<string, StoryblokReactComponent>;

export interface StoryblokDatasourceEntry {
	name: string;
	value: string;
	id: number;
	dimension_value: string;
}

export type StoryblokComponents =
	| ActionBehaviorLinkSubModule
	| ActionBehaviorMenuSubModule
	| ActionBehaviorModalSubModule
	| ActionBehaviorPopUpFormSubmitSubModule
	| ActionBehaviorPopUpFormSubModule
	| ActionBehaviorScrollSubModule
	| ActionModule
	| ActionReferenceModule
	| AspectRatioSettings
	| BackgroundPositionSettings
	| BackgroundSettings
	| BackgroundSizeSettings
	| BannerModule
	| Blog
	| BlogModule
	| BodyFlexSettings
	| BodyGridSettings
	| BorderSettings
	| CampusMenuModule
	| CardActionSubModule
	| CardBehaviorCharacterSensitiveSubModule
	| CardBehaviorFlipSubModule
	| CardModule
	| CardTestimonialModule
	| CardTestimonialsSection
	| CarouselBehaviorHideSubModule
	| CarouselModule
	| CollapseModule
	| CollapsePanelSubModule
	| ColoringSettings
	| ColumnComponentSettings
	| CookieConsent
	| DividerModule
	| Efset
	| FaqContentType
	| FontSettings
	| FooterContentType
	| FormIntegrationModule
	| FormIntegrationTypeBrochureSfSubModule
	| FormIntegrationTypeBrochureSubModule
	| FormIntegrationTypeContactSfSubModule
	| FormIntegrationTypeContactSubModule
	| FormIntegrationTypeEfsetAdmissionsSfSubModule
	| FormIntegrationTypeEfsetSchoolSfSubModule
	| FormIntegrationTypeEfsetSfSubModule
	| FormIntegrationTypeInfomeetingSfSubModule
	| FormIntegrationTypeSharedHsIaBrochureSubModule
	| GradientModule
	| GraphicActionSubModule
	| GraphicModule
	| GridSection
	| GridSettings
	| HeaderContentType
	| HeadingModule
	| IconModule
	| InfomeetingModule
	| InfomeetingPageSection
	| LandingPage
	| LeadooModule
	| LeadooVisualbotsModule
	| ListItemSubModule
	| ListModule
	| MagicScrollSection
	| MapModule
	| MapSectionSubModule
	| MenuLinkModule
	| ModuleFlexSettings
	| ModuleGridSettings
	| NewsModule
	| PromoModule
	| RedirectorContainer
	| RedirectorRedirection
	| RegionalModule
	| RegionBodySubModule
	| ScrollTopModule
	| SharedActionContentType
	| SharedActionModule
	| SharedSection
	| SharedSectionContentType
	| SharedTestimonialContentType
	| SizingPresetSettings
	| SpacingComponentSettings
	| SpacingLayoutSettings
	| StepModule
	| StepperModule
	| StickyModule
	| SurfaceModule
	| SwitcherBehaviorDropdownSubModule
	| SwitcherBehaviorToggleSubModule
	| SwitcherBodySubModule
	| SwitcherModule
	| TeamMemberContentType
	| TeamMemberModule
	| TestimonialModule
	| TextModule
	| TransformSettings
	| VideoModule
	| WebsitePage;

export type StoryblokNames =
	| 'action_behavior_link_sub_module'
	| 'action_behavior_menu_sub_module'
	| 'action_behavior_modal_sub_module'
	| 'action_behavior_pop_up_form_submit_sub_module'
	| 'action_behavior_pop_up_form_sub_module'
	| 'action_behavior_scroll_sub_module'
	| 'action_module'
	| 'action_reference_module'
	| 'aspect_ratio_settings'
	| 'background_position_settings'
	| 'background_settings'
	| 'background_size_settings'
	| 'banner_module'
	| 'blog'
	| 'blog_module'
	| 'body_flex_settings'
	| 'body_grid_settings'
	| 'border_settings'
	| 'campus_menu_module'
	| 'card_action_sub_module'
	| 'card_behavior_character_sensitive_sub_module'
	| 'card_behavior_flip_sub_module'
	| 'card_module'
	| 'card_testimonial_module'
	| 'card_testimonials_section'
	| 'carousel_behavior_hide_sub_module'
	| 'carousel_module'
	| 'collapse_module'
	| 'calendly_module'
	| 'collapse_panel_sub_module'
	| 'coloring_settings'
	| 'column_component_settings'
	| 'cookie_consent'
	| 'divider_module'
	| 'efset'
	| 'faq_content_type'
	| 'font_settings'
	| 'footer_content_type'
	| 'form_integration_module'
	| 'form_integration_type_brochure_sf_sub_module'
	| 'form_integration_type_brochure_sub_module'
	| 'form_integration_type_contact_sf_sub_module'
	| 'form_integration_type_contact_sub_module'
	| 'form_integration_type_efset_admissions_sf_sub_module'
	| 'form_integration_type_efset_school_sf_sub_module'
	| 'form_integration_type_efset_sf_sub_module'
	| 'form_integration_type_infomeeting_sf_sub_module'
	| 'form_integration_type_shared_hs_ia_brochure_sub_module'
	| 'gradient_module'
	| 'graphic_action_sub_module'
	| 'graphic_module'
	| 'grid_section'
	| 'grid_settings'
	| 'header_content_type'
	| 'heading_module'
	| 'icon_module'
	| 'infomeeting_module'
	| 'infomeeting_page_section'
	| 'landing_page'
	| 'leadoo_module'
	| 'leadoo_visualbots_module'
	| 'list_item_sub_module'
	| 'list_module'
	| 'magic_scroll_section'
	| 'map_module'
	| 'map_section_sub_module'
	| 'menu_link_module'
	| 'module_flex_settings'
	| 'module_grid_settings'
	| 'news_module'
	| 'promo_module'
	| 'redirector_container'
	| 'redirector_redirection'
	| 'regional_module'
	| 'region_body_sub_module'
	| 'scroll_top_module'
	| 'shared_action_content_type'
	| 'shared_action_module'
	| 'shared_section'
	| 'shared_section_content_type'
	| 'shared_testimonial_content_type'
	| 'sizing_preset_settings'
	| 'spacing_component_settings'
	| 'spacing_layout_settings'
	| 'step_module'
	| 'stepper_module'
	| 'sticky_module'
	| 'surface_module'
	| 'switcher_behavior_dropdown_sub_module'
	| 'switcher_behavior_toggle_sub_module'
	| 'switcher_body_sub_module'
	| 'switcher_module'
	| 'team_member_content_type'
	| 'team_member_module'
	| 'testimonial_module'
	| 'text_module'
	| 'transform_settings'
	| 'video_module'
	| 'website_page';
