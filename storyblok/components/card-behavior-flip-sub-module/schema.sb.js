module.exports = {
	name: 'card_behavior_flip_sub_module',
	display_name: 'Flipper Behavior',
	schema: {
		flip_direction: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			required: false,
			display_name: '',
			description: 'Set the direction of the flip.',
			no_translate: true,
			options: [
				{ value: ' ', name: 'Horizontal' },
				{ value: 'vertical', name: 'Vertical' }
			],
			default_value: ' '
		},
		icon: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['icon_module'],
			maximum: '1',
			description:
				'An icon to display in the bottom corner. If the card expands, this will be hidden.',
			pos: 1,
			no_translate: true
		},
		icon_position: {
			type: 'option',
			pos: 2,
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'end', name: 'End' }
			],
			default_value: 'end',
			description: 'Where should the icon be positioned.',
			required: false,
			no_translate: true
		},
		show_gradient: {
			type: 'boolean',
			pos: 3,
			description:
				'Set if when expanded should show the gradient from the cover image.',
			no_translate: true
		},
		screen_size: {
			type: 'option',
			pos: 4,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			description:
				'Define a screen size at which the card should expand to a normal card. Empty means never.',
			no_translate: true,
			display_name: 'Expand to card'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		"{{if(options.screen_size)}}\n<div>Expand at {{screen_size}}</div>\n{{/if}}\nFlip direction:\n{{if(options.flip_direction == ' ')}}\nhorizontal\n{{#else}}\n{{flip_direction}}\n{{/if}}",
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Flipper Behavior',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
