module.exports = {
	name: 'spacing_layout_settings',
	display_name: null,
	schema: {
		padding_type: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'spacing-sides',
			description:
				'Where should the padding be applied. Empty means all sides.',
			pos: 3,
			no_translate: true
		},
		padding_value: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'spacing-layout',
			description:
				"The padding area, bounded by the padding edge, extends the content area to include the element's padding. Its dimensions are the padding-box width and the padding-box height.",
			pos: 4,
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		"{{if(options.margin_value)}}\n<div>\nMargin\n{{if(options.margin_type)}}\n  {{margin_type}}\n{{#else}}\n  all sides\n{{/if}}\n: {{margin_negative ? '-' : ''}} {{margin_value}}\n</div>\n{{/if}}\n\n{{if(options.padding_value)}}\n<div>\nPadding\n{{if(options.padding_type)}}\n  {{padding_type}}\n{{#else}}\n  all sides\n{{/if}}\n: {{padding_value}}\n</div>\n{{/if}}",
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'spacing_layout_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
