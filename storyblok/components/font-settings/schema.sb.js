module.exports = {
	name: 'font_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			description:
				'The screen size from which this setting would apply. Empty means that it will applied to all screen sizes.',
			no_translate: true
		},
		alignment: {
			type: 'option',
			use_uuid: true,
			options: [],
			source: 'internal',
			datasource_slug: 'text-alignment',
			description: 'Set the text alignment.',
			no_translate: true
		},
		weight: {
			type: 'option',
			use_uuid: true,
			options: [],
			source: 'internal',
			datasource_slug: 'font-weight',
			description: 'Set the font weight.',
			no_translate: true
		},
		size: {
			type: 'option',
			use_uuid: true,
			description: 'Set the font size.',
			options: [
				{ value: 'subtitle', name: 'Subtitle (1.5rem, 24px)' },
				{ value: 'paragraph', name: 'Paragraph (1rem, 16px)' },
				{ value: 'ui-label', name: 'UI Label (0.875rem, 14px)' },
				{ value: 'caption', name: 'Caption (0.75rem, 12px)' },
				{ value: 'title3', name: 'Title 3 (2rem, 32px / 3rem, 48px)' },
				{ value: 'title5', name: 'Title 5 (1.25rem, 20px / 1.5rem, 24px)' },
				{ value: 'title4', name: 'Title 4 (1.5rem, 24px / 2rem, 32px)' }
			],
			display_name: 'Font size to overwrite the default one',
			default_value: '',
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'<div>\n{{if(options.screen_size)}}\nScreen {{screen_size}}\n{{#else}}\nAll screens\n{{/if}}\n</div>\n\n{{if(options.alignment)}}\n<div>Alignment {{alignment}}</div>\n{{/if}}\n\n{{if(options.weight)}}\n<div>Weight {{weight}}</div>\n{{/if}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'font_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
