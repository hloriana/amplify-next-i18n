module.exports = {
	name: 'infomeeting_module',
	display_name: null,
	schema: {
		'marketCode': { type: 'text', pos: 0 },
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
			pos: 2
		},
		'empty_body': {
			type: 'bloks',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			maximum: '',
			description:
				'Alternative body to be displayed when there are no info-meetings available',
			component_group_whitelist_names: ['Modules']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'infomeeting_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
