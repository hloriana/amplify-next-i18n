module.exports = {
	name: 'team_member_module',
	display_name: null,
	schema: {
		'tab-e7372f37-3040-4403-b358-06aa4c743ad9': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['spacing_settings'],
			pos: 0
		},
		'tab-7be363dd-8a2d-4cc4-bf3d-14368add8f7c': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 1
		},
		'team_member': {
			type: 'option',
			use_uuid: true,
			source: 'internal_stories',
			folder_slug: '',
			filter_content_type: 'team_member_content_type'
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings']
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'team_member_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
