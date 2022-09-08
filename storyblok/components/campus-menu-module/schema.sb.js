module.exports = {
	name: 'campus_menu_module',
	display_name: null,
	schema: {
		campus: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			exclude_empty_option: false,
			datasource_slug: 'campus',
			pos: 0
		},
		title: { type: 'text', pos: 1, translatable: true },
		menu: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['menu_link_module'],
			pos: 2
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'campus_menu_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
