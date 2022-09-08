module.exports = {
	name: 'collapse_panel_sub_module',
	display_name: 'Panel',
	schema: {
		'module_spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			description:
				'Apply spacing to the outer panel (ie margin between two panels).',
			pos: 0
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			no_translate: true,
			description: 'Apply margins to the heading and paddings to the body.',
			pos: 1
		},
		'color_settings': {
			type: 'bloks',
			maximum: '',
			description: '',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			pos: 2
		},
		'expanded_color_settings': {
			type: 'bloks',
			pos: 3,
			maximum: '',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			default_value: '',
			description:
				'Choose the colours you would like to transition to when the panel is expanded.'
		},
		'border_radius': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius',
			pos: 4
		},
		'heading_body': {
			type: 'bloks',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			description: 'The heading body.',
			required: false,
			pos: 5,
			component_group_whitelist_names: ['Modules']
		},
		'content_body': {
			type: 'bloks',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			description: 'The content body.',
			required: false,
			pos: 6,
			component_group_whitelist_names: ['Modules']
		},
		'tab-7a90db39-890f-4c0c-be11-8eddf9ba16c7': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'spacing_settings',
				'color_settings',
				'border_radius',
				'module_spacing_settings',
				'expanded_color_settings',
				'hide_border',
				'shadow_on_expand'
			],
			pos: 7
		},
		'tab-8d2ac947-e5c6-48a3-8f30-2d2f26ab12ac': {
			type: 'tab',
			display_name: 'Layout',
			keys: [
				'cover_body_settings',
				'heading_body_settings',
				'content_body_settings'
			],
			pos: 8
		},
		'heading_body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			no_translate: true,
			pos: 9
		},
		'content_body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			no_translate: true,
			pos: 10
		},
		'faq': {
			type: 'option',
			use_uuid: true,
			source: 'internal_stories',
			filter_content_type: 'faq_content_type',
			pos: 11
		},
		'hide_border': {
			type: 'boolean',
			description: 'Check to hide the border on the bottom of the pannel.'
		},
		'shadow_on_expand': {
			type: 'boolean',
			translatable: false,
			description: 'Check to add a shadow when the panel is expanded'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: 'Content modules: {{content_body.length}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Panel',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
