module.exports = {
	name: 'sizing_preset_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens'
		},
		width: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'widths',
			pos: 1,
			description: 'Set a specific width of this box.',
			no_translate: true
		},
		height: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'heights',
			pos: 2,
			description: 'Set a specific height of this box.',
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{width}} \n{{height}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'sizing_preset_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
