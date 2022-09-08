module.exports = {
	name: 'border_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			pos: 0
		},
		border_colour: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'colors',
			pos: 1
		},
		border_shade: {
			type: 'option',
			pos: 2,
			use_uuid: true,
			options: [
				{ value: '-650', name: '650' },
				{ value: '-600', name: '600' },
				{ value: '-550', name: '550' },
				{ value: '', name: '500' },
				{ value: '-450', name: '450' },
				{ value: '-400', name: '400' },
				{ value: '-350', name: '350' },
				{ value: '-300', name: '300' }
			]
		},
		border_side: {
			type: 'option',
			use_uuid: true,
			datasource_slug: 'spacing-sides',
			options: [
				{ value: 't', name: 'Top' },
				{ value: 'b', name: 'Bottom' },
				{ value: 'l', name: 'Left' },
				{ value: 'r', name: 'Right' }
			],
			pos: 3
		},
		border_width: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: '1', name: '1' },
				{ value: '2', name: '2' },
				{ value: '4', name: '4' },
				{ value: '0', name: '0' }
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
	real_name: 'border_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
