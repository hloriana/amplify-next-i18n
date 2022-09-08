module.exports = {
	name: 'column_component_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			no_translate: true,
			description:
				'The screen size from which this setting would apply. Empty means that it will applied to all screen sizes.'
		},
		slides_columns: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: '4', name: '4 columns' },
				{ value: '6', name: '6 columns' },
				{ value: '12', name: '12 columns' },
				{ value: '3', name: '3 columns' }
			]
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'<div>\n{{if(options.screen_size)}}\nScreen {{screen_size}}\n{{#else}}\nAll screens\n{{/if}}\n</div>\n\n{{if(options.slides_columns)}}\n<div>\nColumns\n: {{slides_columns}}\n</div>\n{{/if}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'column_component_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
