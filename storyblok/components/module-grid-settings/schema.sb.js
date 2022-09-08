module.exports = {
	name: 'module_grid_settings',
	display_name: '',
	schema: {
		screen_size: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			options: [],
			description:
				'The screen size from which this setting would apply. Empty means that it will applied to all screen sizes.',
			default_value: '',
			required: false,
			source: 'internal',
			datasource_slug: 'screens',
			no_translate: true
		},
		column_span: {
			type: 'number',
			pos: 1,
			description: 'The number of columns that this module uses.',
			no_translate: true
		},
		column_start: {
			type: 'number',
			pos: 2,
			default_value: '',
			required: false,
			description: 'The column index where this module start its placing.',
			no_translate: true
		},
		column_end: {
			type: 'number',
			pos: 3,
			max_length: '',
			description: 'The column index where this module ends its placing.',
			required: false,
			no_translate: true
		},
		row_start: {
			type: 'number',
			description: 'The row index where this module start its placing.',
			pos: 4,
			no_translate: true
		},
		row_end: {
			type: 'number',
			description: 'The row index where this module ends its placing.',
			pos: 5,
			no_translate: true
		},
		z_index: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: '0', name: '0' },
				{ value: '10', name: '10' },
				{ value: '20', name: '20' },
				{ value: '30', name: '30' },
				{ value: '40', name: '40' },
				{ value: '50', name: '50' },
				{ value: 'auto', name: 'auto' }
			],
			display_name: 'Z-Index',
			description: 'Control how this module should stack with others.',
			pos: 6,
			no_translate: true
		},
		justify: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' }
			],
			pos: 7,
			default_value: '',
			required: false,
			description: 'The horizontal alignment of the items within this module.',
			no_translate: true
		},
		align: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' }
			],
			pos: 8,
			default_value: '',
			required: false,
			description: 'The vertical alignment of the items within this module.',
			no_translate: true
		}
	},
	image: null,
	preview_field: 'screen_size',
	is_root: false,
	preview_tmpl:
		'<div>\n{{if(options.screen_size)}}\nScreen {{screen_size}}\n{{#else}}\nAll screens\n{{/if}}\n</div>\n\n{{if(options.column_span)}}\n<div>col span {{column_span}}</div>\n{{/if}}\n{{if(options.column_start, options.column_end)}}\n<div>col {{column_start}} / {{column_end}}</div>\n{{/if}}\n{{if(options.row_start, options.row_end)}}\n<div>row {{row_start}} / {{row_end}}</div>\n{{/if}}\n\n{{if(options.justify)}}<div>x {{justify}}</div>{{/if}}\n{{if(options.align)}}<div>y {{align}}</div>{{/if}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'module_grid_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
