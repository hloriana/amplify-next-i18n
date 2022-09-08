module.exports = {
	name: 'step_module',
	display_name: null,
	schema: {
		title: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['heading_module'],
			maximum: '1'
		},
		body: {
			type: 'bloks',
			maximum: '',
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
	real_name: 'step_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
