module.exports = {
	name: 'banner_module',
	display_name: null,
	schema: {
		'coloring_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			description:
				'Apply a text and background color to the module. Colors are responsive.',
			pos: 1,
			default_value: ''
		},
		'spacing_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			description: 'Apply a margin to the card and padding to the body.',
			pos: 2
		},
		'body': {
			type: 'bloks',
			maximum: '',
			description: '',
			restrict_components: true,
			component_whitelist: [
				'text_module',
				'action_module',
				'action_reference_module'
			],
			pos: 3,
			display_name: 'body'
		},
		'time_to_appear': {
			type: 'number',
			description:
				'The value in seconds before the component shows up on the page',
			pos: 5,
			default_value: '10'
		},
		'tab-47ed751c-a64f-42b9-8bb5-7ea490e443ee': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['coloring_settings', 'spacing_settings'],
			pos: 6
		},
		'scroll_position_show': {
			type: 'number',
			display_name: '',
			default_value: '10',
			description: 'Scroll percentage after which banner should appear',
			required: false,
			pos: 7
		},
		'scroll_position_hide': {
			type: 'number',
			description: 'Scroll percentage after which banner should disappear',
			default_value: '75',
			pos: 8
		},
		'enabled': {
			type: 'boolean',
			translatable: true,
			required: false,
			description: 'Turn off to disable for specific markets',
			display_name: 'Enable for this market',
			pos: 9
		},
		'action': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['action_behavior_link_sub_module'],
			maximum: '1',
			description: '',
			display_name: ''
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [
		{ id: 935698, name: 'Banner - Basic', component_id: 1305615, image: '' },
		{
			id: 955287,
			name: 'Banner - Basic - Bottom',
			component_id: 1305615,
			image: ''
		},
		{
			id: 955288,
			name: 'Banner - Basic - Top',
			component_id: 1305615,
			image: ''
		}
	],
	preset_id: null,
	real_name: 'banner_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
