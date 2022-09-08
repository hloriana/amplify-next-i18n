module.exports = {
	name: 'body_flex_settings',
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
		direction: {
			type: 'option',
			pos: 1,
			use_uuid: true,
			options: [
				{ value: 'col', name: 'Column' },
				{ value: 'col-reverse', name: 'Column reverse' },
				{ value: 'row', name: 'Row' },
				{ value: 'row-reverse', name: 'Row reverse' }
			],
			description:
				'This establishes the main-axis, thus defining the direction flex items are placed in the flex container.',
			default_value: 'col',
			required: true,
			no_translate: true
		},
		justify: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' },
				{ value: 'stretch', name: 'Stretch' },
				{ value: 'between', name: 'Space between' },
				{ value: 'around', name: 'Space around' },
				{ value: 'evenly', name: 'Space evenly' }
			],
			pos: 2,
			description: 'This defines the alignment along the main axis. (content)',
			no_translate: true
		},
		align: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' },
				{ value: 'stretch', name: 'Stretch' },
				{ value: 'between', name: 'Space between' },
				{ value: 'around', name: 'Space around' },
				{ value: 'evenly', name: 'Space evenly' }
			],
			pos: 3,
			description: 'This defines the alignment along the cross axis. (items)',
			no_translate: true
		},
		wrap: {
			type: 'boolean',
			description:
				'Tick to allow content to wrap if it exceeds the width of the element'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'<div>\n{{if(options.screen_size)}}\nScreen {{screen_size}}\n{{#else}}\nAll screens\n{{/if}}\n</div>\n<div>Direction: {{direction}}</div>\n{{if(options.justify)}}\n<div>Justify {{justify}}</div>\n{{/if}}\n{{if(options.align)}}\n<div>Align {{align}}</div>\n{{/if}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'body_flex_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
