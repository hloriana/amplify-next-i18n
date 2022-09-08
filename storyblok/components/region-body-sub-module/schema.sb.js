module.exports = {
	name: 'region_body_sub_module',
	display_name: null,
	schema: {
		region: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'region',
			required: true
		},
		body: {
			type: 'bloks',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			component_group_whitelist_names: ['Modules']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'region_body_sub_module',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
