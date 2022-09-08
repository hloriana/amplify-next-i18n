module.exports = {
	name: 'surface_module',
	display_name: null,
	schema: {
		'type': {
			type: 'option',
			pos: 0,
			use_uuid: true,
			options: [
				{ value: 'flat', name: 'Flat' },
				{ value: 'shadow', name: 'Shadow' },
				{ value: 'deep-shadow', name: 'Deep shadow' }
			],
			default_value: 'flat',
			required: true,
			description: 'The type of surface.',
			no_translate: true
		},
		'border_radius': {
			type: 'option',
			pos: 1,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius',
			description: "Apply a radius to the surface's edges.",
			no_translate: true
		},
		'coloring_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			pos: 2,
			default_value: '',
			description:
				'Apply a text and background color to the module. Colors are responsive.',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			pos: 3,
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			maximum: '',
			default_value: '',
			description: 'Apply margins and paddings to the module.',
			no_translate: true
		},
		'body': {
			type: 'bloks',
			pos: 4,
			customize_toolbar: true,
			toolbar: [
				'bold',
				'italic',
				'strike',
				'underline',
				'code',
				'quote',
				'hrule',
				'paragraph',
				'undo',
				'redo',
				'help'
			],
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			default_value: '',
			required: true,
			description: 'The content of the surface body.',
			component_group_whitelist_names: ['Modules']
		},
		'module_settings': {
			type: 'bloks',
			pos: 5,
			maximum: '',
			restrict_components: true,
			component_whitelist: ['module_grid_settings', 'module_flex_settings'],
			default_value: '',
			no_translate: true
		},
		'tab-fb6acd03-d0ea-4434-a430-fff7ed768b50': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'spacing_settings',
				'color_settings',
				'variant',
				'type',
				'border_radius',
				'coloring_settings',
				'background_settings',
				'fill_parent',
				'border_settings'
			],
			pos: 6
		},
		'tab-9850db83-21b9-409c-a96c-8d130e5c3b89': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['grid_settings', 'module_settings', 'body_settings'],
			pos: 7
		},
		'body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			pos: 8,
			no_translate: true
		},
		'background_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['background_settings'],
			no_translate: true
		},
		'action': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['card_action_sub_module'],
			maximum: '1',
			description: 'Add an action to the surface'
		},
		'fill_parent': {
			type: 'boolean',
			description:
				'Check this to force the surface to fill the parent (Equal heights)'
		},
		'border_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['border_settings']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: 'Modules: {{body.length}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'surface_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
