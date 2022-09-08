module.exports = {
	name: 'divider_module',
	display_name: null,
	schema: {
		'spacing_settings': {
			type: 'bloks',
			pos: 1,
			restrict_components: true,
			component_whitelist: ['spacing_component_settings']
		},
		'coloring_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			maximum: '',
			pos: 2
		},
		'opacity': {
			type: 'number',
			display_name: '',
			description: 'Opacity from 0 to 1.',
			default_value: '1',
			pos: 3
		},
		'tab-798e395b-8f70-4071-b0d0-f078e7da447c': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'coloring_settings',
				'opacity',
				'spacing_settings',
				'sizing_settings',
				'divider_width'
			],
			pos: 4
		},
		'divider_width': {
			type: 'number',
			description: 'Width of the divider (in pixels)'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'divider_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
