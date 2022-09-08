module.exports = {
	name: 'aspect_ratio_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			pos: 0,
			max_length: '',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			no_translate: true
		},
		ratio: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: '1/1', name: '1:1' },
				{ value: '4/3', name: '4:3' },
				{ value: '3/4', name: '3:4' },
				{ value: '3/2', name: '3:2' },
				{ value: '2/3', name: '2:3' },
				{ value: '16/9', name: '16:9' },
				{ value: '9/16', name: '9:16' }
			],
			default_value: '4/3',
			required: true,
			no_translate: true,
			pos: 1,
			source: 'internal',
			datasource_slug: 'aspect-ratio',
			description:
				'The aspect ratio that the box should have within its boundaries.'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'<div>\n{{if(options.screen_size)}}\nScreen {{screen_size}}\n{{#else}}\nAll screens\n{{/if}}\n</div>\n<div>Ratio: {{ratio}}</div>',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'aspect_ratio_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
