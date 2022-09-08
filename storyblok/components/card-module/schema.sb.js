module.exports = {
	name: 'card_module',
	display_name: null,
	schema: {
		'name': {
			type: 'text',
			pos: 0,
			no_translate: true,
			description:
				'This is a friendly name used to identify this section within the Storyblok UI.'
		},
		'cover': {
			type: 'bloks',
			pos: 1,
			restrict_components: true,
			component_whitelist: ['graphic_module'],
			maximum: '1',
			required: true,
			description: 'The cover image at the top of the card.'
		},
		'overlay_body': {
			type: 'bloks',
			pos: 2,
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			description: 'The overlay body.',
			component_group_whitelist_names: ['Modules']
		},
		'content_body': {
			type: 'bloks',
			pos: 3,
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			required: false,
			description: 'The body content of the card.',
			component_group_whitelist_names: ['Modules']
		},
		'action': {
			type: 'bloks',
			pos: 4,
			restrict_components: true,
			component_whitelist: ['card_action_sub_module'],
			maximum: '1'
		},
		'type': {
			type: 'option',
			pos: 5,
			use_uuid: true,
			options: [
				{ value: 'flat', name: 'Flat' },
				{ value: 'shadow', name: 'Shadow' },
				{ value: 'deep-shadow', name: 'Deep shadow' }
			],
			required: true,
			description: 'The type of card.',
			default_value: 'flat',
			no_translate: true
		},
		'border_radius': {
			type: 'option',
			pos: 6,
			description: "Apply a radius to the card's edges.",
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius',
			no_translate: true
		},
		'behavior': {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: [
				'card_behavior_flip_sub_module',
				'card_behavior_character_sensitive_sub_module'
			],
			pos: 7,
			description:
				'This describes the type of behavior the card should have about its content.'
		},
		'coloring_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			description:
				'Apply a text and background color to the module. Colors are responsive.',
			pos: 8,
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			description: 'Apply a margin to the card and padding to the body.',
			no_translate: true,
			pos: 9
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
			pos: 10,
			no_translate: true
		},
		'card_body_settings': {
			type: 'bloks',
			pos: 11,
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			maximum: '',
			no_translate: true
		},
		'overlay_body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			no_translate: true,
			pos: 12
		},
		'content_body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			description: '',
			pos: 13,
			no_translate: true
		},
		'tab-164e47f6-12b7-4c9a-9283-7261e03b9a22': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'colors_settings',
				'type',
				'border_radius',
				'coloring_settings',
				'spacing_settings',
				'card_border_radius',
				'behavior',
				'extends'
			],
			pos: 14
		},
		'tab-d0321a74-e2bd-434f-846c-efc38e8f02ae': {
			type: 'tab',
			display_name: 'Layout',
			keys: [
				'module_settings',
				'body_settings',
				'content_body_settings',
				'overlay_body_settings',
				'card_body',
				'card_body_settings',
				'last_item_at_end'
			],
			pos: 15
		},
		'last_item_at_end': {
			type: 'boolean',
			description:
				'If this is checked, the last item in the card content will be displayed at the end of the card',
			pos: 16,
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{name}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'card_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
