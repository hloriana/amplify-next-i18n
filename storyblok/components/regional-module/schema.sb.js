module.exports = {
	name: 'regional_module',
	display_name: null,
	schema: {
		default_content: {
			type: 'bloks',
			maximum: '',
			required: true,
			description: '',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			component_group_whitelist_names: ['Modules']
		},
		regional_content: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['region_body_sub_module']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'regional_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
