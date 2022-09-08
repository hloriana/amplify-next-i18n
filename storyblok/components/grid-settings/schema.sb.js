module.exports = {
	name: 'grid_settings',
	display_name: null,
	schema: {
		alignment: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			options: [
				{ value: 'top', name: 'Top' },
				{ value: 'middle', name: 'Middle' },
				{ value: 'bottom', name: 'Bottom' },
				{ value: 'stretch', name: 'Stretch' }
			],
			display_name: 'Vertical alignment',
			description: 'The vertical alignment of the blocks within the layout.',
			default_value: 'top',
			required: true
		},
		justify: {
			type: 'option',
			pos: 1,
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' },
				{ value: 'space-around', name: 'Space around' },
				{ value: 'space-between', name: 'Space between' }
			],
			display_name: 'Horizontal arrangement',
			description:
				'The horizontal arrangement of the blocks within the layout.',
			default_value: 'start',
			required: true
		},
		vertical_gutter: {
			type: 'number',
			pos: 2,
			default_value: '0',
			description: "The vertical spacing between grids' elements.",
			required: true
		},
		horizontal_gutter: {
			type: 'number',
			pos: 3,
			description: "The vertical spacing between grids' elements.",
			default_value: '0',
			required: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'v {{alignment}},\nh {{justify}},\ny {{vertical_gutter}},\nx {{horizontal_gutter}}',
	is_nestable: false,
	all_presets: [],
	preset_id: null,
	real_name: 'grid_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
