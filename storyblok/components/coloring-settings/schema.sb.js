module.exports = {
	name: 'coloring_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			description:
				'The screen size from which this setting would apply. Empty means that it will applied to all screen sizes.',
			no_translate: true
		},
		text_color: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'colors',
			description: 'The color to apply to the text.',
			pos: 1,
			no_translate: true
		},
		text_shade: {
			type: 'option',
			pos: 2,
			use_uuid: true,
			options: [
				{ value: '-650', name: '650' },
				{ value: '-600', name: '600' },
				{ value: '-550', name: '550' },
				{ value: ' ', name: '500' },
				{ value: '-450', name: '450' },
				{ value: '-400', name: '400' },
				{ value: '-350', name: '350' },
				{ value: '-300', name: '300' }
			],
			default_value: ' ',
			description: 'The shade of the text color.',
			required: false,
			no_translate: true
		},
		background_color: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'colors',
			description: 'The color to apply to the background. ',
			pos: 3,
			no_translate: true
		},
		background_shade: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: '-650', name: '650' },
				{ value: '-600', name: '600' },
				{ value: '-550', name: '550' },
				{ value: ' ', name: '500' },
				{ value: '-450', name: '450' },
				{ value: '-400', name: '400' },
				{ value: '-350', name: '350' },
				{ value: '-300', name: '300' }
			],
			default_value: ' ',
			description: 'The shade of the background color.',
			required: false,
			pos: 4,
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'<div>\n{{if(options.screen_size)}}\nScreen {{screen_size}}\n{{#else}}\nAll screens\n{{/if}}\n</div>\n\n{{if(options.text_color)}}\n<div>\ntext: {{text_color}}{{text_shade}}\n</div>\n{{/if}}\n\n{{if(options.background_color)}}\n<div>\nbg: {{background_color}}{{background_shade}}\n</div>\n{{/if}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'coloring_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
