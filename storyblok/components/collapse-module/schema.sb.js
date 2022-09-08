module.exports = {
	name: 'collapse_module',
	display_name: null,
	schema: {
		'tab-9f352981-2a84-4b39-bdde-70bcf1e22151': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['spacing_settings', 'theme_variant', 'default_panel_behavior'],
			pos: 0
		},
		'tab-e69e9169-0c82-4fc8-88c5-79953579fe15': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 0
		},
		'module_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['module_grid_settings', 'module_flex_settings'],
			no_translate: true
		},
		'body': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['collapse_panel_sub_module'],
			required: true,
			description: 'The panels available in this module.'
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			required: false,
			description: 'Apply margin and padding to this module.',
			default_value: '',
			no_translate: true
		},
		'theme_variant': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'light', name: 'Light' },
				{ value: 'dark', name: 'Dark' }
			]
		},
		'default_panel_behavior': {
			type: 'option',
			use_uuid: true,
			translatable: false,
			options: [
				{ value: 'expanded', name: 'Expanded' },
				{ value: 'minimized', name: 'Minimized' }
			],
			exclude_empty_option: true,
			required: false
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: 'Panels: {{body.length}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'collapse_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
