module.exports = {
	name: 'body_grid_settings',
	display_name: null,
	schema: {
		grid_type: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			required: true,
			options: [
				{ value: 'page', name: 'Page grid (14 cols)' },
				{ value: 'content', name: 'Content grid (12 cols)' }
			],
			description: '',
			no_translate: true,
			default_value: 'content'
		},
		justify: {
			type: 'option',
			pos: 1,
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' }
			],
			display_name: 'Horizontal arrangement',
			description: '',
			default_value: '',
			required: false,
			no_translate: true
		},
		align: {
			type: 'option',
			pos: 2,
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' }
			],
			display_name: 'Vertical alignment',
			description: '',
			default_value: '',
			required: false,
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'Grid type: {{grid_type}}\n\n{{if(options.justify)}}\n<div>justify {{justify}}</div>\n{{/if}}\n{{if(options.align)}}\n<div>align {{align}}</div>\n{{/if}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'body_grid_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
