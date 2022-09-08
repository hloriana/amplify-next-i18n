module.exports = {
	name: 'switcher_body_sub_module',
	display_name: 'Switcher Body',
	schema: {
		'name': {
			type: 'text',
			no_translate: true,
			description:
				'This is a friendly name used to identify this section within the Storyblok UI. Used in the switcher dropdown behaviour.',
			default_value: '',
			pos: 0,
			translatable: true
		},
		'heading': {
			type: 'bloks',
			pos: 1,
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			description:
				'The switcher body heading. Used in the switcher toggle behaviour. ',
			component_group_whitelist_names: ['Modules']
		},
		'body': {
			type: 'bloks',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			required: true,
			description: 'The modules to be placed in the grid.',
			pos: 2,
			component_group_whitelist_names: ['Modules']
		},
		'tab-a4d10327-ce86-471c-b651-39e8617418d7': {
			type: 'tab',
			display_name: 'Styles',
			keys: [],
			pos: 3
		},
		'tab-a5dd20fb-cce2-429a-bf44-474a028266d0': {
			type: 'tab',
			display_name: 'Layout',
			keys: [],
			pos: 4
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{name}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Switcher Body',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
