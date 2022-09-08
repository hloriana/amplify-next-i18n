module.exports = {
	name: 'menu_link_module',
	display_name: null,
	schema: {
		'link_text': {
			type: 'text',
			restrict_components: true,
			component_whitelist: ['menu_link_module'],
			translatable: true,
			pos: 0
		},
		'action': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: [
				'action_behavior_link_sub_module',
				'action_behavior_menu_sub_module'
			],
			pos: 1,
			maximum: '1'
		},
		'exclude_top': {
			type: 'boolean',
			description: 'Check this to exclude from the top bar',
			translatable: true
		},
		'exclude_side': {
			type: 'boolean',
			description: 'Check this to exclude from the side bar',
			translatable: true
		},
		'tab-cded7105-c0d5-488d-a6e6-4f16f4fe2ee7': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['icon', 'hide_text'],
			pos: 0
		},
		'icon': {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['icon_module']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'menu_link_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
