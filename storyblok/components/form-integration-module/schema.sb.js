module.exports = {
	name: 'form_integration_module',
	display_name: null,
	schema: {
		'type': {
			type: 'bloks',
			pos: 0,
			maximum: '1',
			restrict_components: true,
			component_whitelist: [
				'form_integration_type_brochure_sub_module',
				'form_integration_type_contact_sub_module',
				'form_integration_type_shared_hs_ia_brochure_sub_module',
				'form_integration_type_efset_sf_sub_module',
				'form_integration_type_infomeeting_sf_sub_module',
				'form_integration_type_brochure_sf_sub_module',
				'form_integration_type_contact_sf_sub_module',
				'form_integration_type_efset_admissions_sf_sub_module',
				'form_integration_type_efset_school_sf_sub_module'
			],
			no_translate: true,
			required: false
		},
		'action': {
			type: 'bloks',
			translatable: false,
			restrict_components: true,
			component_whitelist: ['action_module', 'action_reference_module'],
			maximum: '1',
			pos: 3
		},
		'tab-10b6e947-b06b-4730-a6e9-a207cf3658c1': {
			type: 'tab',
			display_name: 'Styles',
			keys: [],
			pos: 4
		},
		'tab-656cdf0f-24dc-4226-acb6-f8f5ff6acc56': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 5
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
			no_translate: true,
			pos: 6
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'form_integration_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
