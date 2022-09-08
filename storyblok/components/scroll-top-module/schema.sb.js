module.exports = {
	name: 'scroll_top_module',
	display_name: null,
	schema: {
		'content': { type: 'bloks' },
		'tab-788d5681-bb0e-4b33-9cf1-ae00124dd089': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'spacing_settings',
				'colour_settings',
				'border_radius_settings',
				'shadow_settings'
			],
			pos: 0
		},
		'spacing_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings']
		},
		'colour_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['coloring_settings']
		},
		'border_radius_settings': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius'
		},
		'shadow_settings': {
			type: 'option',
			use_uuid: true,
			exclude_empty_option: false,
			options: [
				{ value: 'flat', name: 'flat' },
				{ value: 'shadow', name: 'shadow' },
				{ value: 'deep-shadow', name: 'deep-shadow' }
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
	real_name: 'scroll_top_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
