module.exports = {
	name: 'transform_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens'
		},
		translate_x: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'full', name: 'full' },
				{ value: '3/4', name: '3/4' },
				{ value: '2/3', name: '2/3' },
				{ value: '1/2', name: '1/2' },
				{ value: '1/3', name: '1/3' },
				{ value: '1/4', name: '1/4' },
				{ value: '0', name: '0' }
			],
			pos: 1
		},
		translate_x_negative: { type: 'boolean', pos: 2 },
		translate_y: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'full', name: 'full' },
				{ value: '3/4', name: '3/4' },
				{ value: '2/3', name: '2/3' },
				{ value: '1/2', name: '1/2' },
				{ value: '1/3', name: '1/3' },
				{ value: '1/4', name: '1/4' },
				{ value: '0', name: '0' }
			],
			pos: 3
		},
		translate_y_negative: { type: 'boolean', pos: 4 },
		rotation: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: '90', name: '90' },
				{ value: '180', name: '180' },
				{ value: '0', name: '0' }
			],
			pos: 5
		},
		rotation_anticlockwise: { type: 'boolean', pos: 6 }
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'transform_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
