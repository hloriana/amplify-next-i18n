module.exports = {
	name: 'switcher_module',
	display_name: null,
	schema: {
		'tab-18c37a64-a79f-4bb8-8103-cf98701b5528': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['spacing_settings', 'switcher_style', 'switcher_behavior'],
			pos: 0
		},
		'tab-e694f8a4-4a53-459c-bc71-4d683c5ceb45': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 0
		},
		'body': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['switcher_body_sub_module'],
			required: true,
			description: 'The body of the various filters to be placed in the grid.'
		},
		'module_settings': {
			type: 'bloks',
			no_translate: true,
			restrict_components: true,
			component_whitelist: ['module_grid_settings']
		},
		'spacing_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			no_translate: true
		},
		'switcher_behavior': {
			type: 'bloks',
			required: true,
			restrict_components: true,
			maximum: '1',
			default_value: '',
			restrict_type: '',
			component_whitelist: [
				'switcher_behavior_dropdown_sub_module',
				'switcher_behavior_toggle_sub_module'
			]
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'switcher_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
