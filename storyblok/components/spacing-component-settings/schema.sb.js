module.exports = {
	name: 'spacing_component_settings',
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
		margin_negative: {
			type: 'boolean',
			pos: 1,
			description: 'Use a negative margin.',
			no_translate: true
		},
		margin_type: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'spacing-sides',
			required: false,
			default_value: '',
			display_name: '',
			description: 'Where should the margin be applied. Empty means all sides.',
			pos: 2,
			no_translate: true
		},
		margin_value: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'spacing',
			description:
				'The margin area, bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. Its dimensions are the margin-box width and the margin-box height.',
			pos: 3,
			no_translate: true
		},
		padding_type: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'spacing-sides',
			description:
				'Where should the padding be applied. Empty means all sides.',
			pos: 4,
			no_translate: true
		},
		padding_value: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'spacing',
			description:
				"The padding area, bounded by the padding edge, extends the content area to include the element's padding. Its dimensions are the padding-box width and the padding-box height.",
			pos: 5,
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		"<div>\n{{if(options.screen_size)}}\nScreen {{screen_size}}\n{{#else}}\nAll screens\n{{/if}}\n</div>\n\n{{if(options.margin_value)}}\n<div>\nMargin\n{{if(options.margin_type)}}\n  {{margin_type}}\n{{#else}}\n  all sides\n{{/if}}\n: {{margin_negative ? '-' : ''}} {{margin_value}}\n</div>\n{{/if}}\n\n{{if(options.padding_value)}}\n<div>\nPadding\n{{if(options.padding_type)}}\n  {{padding_type}}\n{{#else}}\n  all sides\n{{/if}}\n: {{padding_value}}\n</div>\n{{/if}}",
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'spacing_component_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
