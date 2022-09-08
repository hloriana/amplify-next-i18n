module.exports = {
	name: 'background_settings',
	display_name: null,
	schema: {
		'background': {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['graphic_module', 'gradient_module'],
			no_translate: true,
			pos: 5
		},
		'tab-952dd72b-ea02-4f51-951f-4d02e35d1954': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'position',
				'horizontal_align',
				'vertical_align',
				'horizontal_adjust',
				'vertical_adjust',
				'position_settings',
				'size_settings',
				'transform_settings'
			],
			pos: 6
		},
		'position_settings': {
			type: 'bloks',
			restrict_components: true,
			maximum: '',
			component_whitelist: ['background_position_settings']
		},
		'size_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['background_size_settings']
		},
		'transform_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['transform_settings']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'background_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
