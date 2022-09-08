module.exports = {
	name: 'background_position_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			pos: 0
		},
		alignment_1: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'center', name: 'Center' },
				{ value: 'left', name: 'Left' },
				{ value: 'right', name: 'Right' },
				{ value: 'top', name: 'Top' },
				{ value: 'bottom', name: 'Bottom' }
			],
			display_name: 'Alignment 1',
			pos: 1
		},
		adjustment_1: {
			type: 'option',
			use_uuid: true,
			datasource_slug: 'widths',
			options: [
				{ value: '1/4', name: '1/4' },
				{ value: '1/3', name: '1/3' },
				{ value: '2/3', name: '2/3' },
				{ value: '3/4', name: '3/4' }
			],
			pos: 2
		},
		alignment_2: {
			type: 'option',
			pos: 3,
			use_uuid: true,
			options: [
				{ value: 'left', name: 'Left' },
				{ value: 'right', name: 'Right' },
				{ value: 'top', name: 'Top' },
				{ value: 'bottom', name: 'Bottom' }
			]
		},
		adjustment_2: {
			type: 'option',
			use_uuid: true,
			datasource_slug: 'widths',
			description: '',
			options: [
				{ value: '1/4', name: '1/4' },
				{ value: '1/3', name: '1/3' },
				{ value: '2/3', name: '2/3' },
				{ value: '3/4', name: '3/4' }
			],
			pos: 4
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'background_position_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
