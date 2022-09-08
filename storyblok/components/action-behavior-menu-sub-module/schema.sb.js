module.exports = {
	name: 'action_behavior_menu_sub_module',
	display_name: 'Menu Module',
	schema: {
		children: {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['menu_link_module']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Menu Module',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
