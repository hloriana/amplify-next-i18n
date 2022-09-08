module.exports = {
	name: 'graphic_action_sub_module',
	display_name: 'Action',
	schema: {
		action_behavior: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['action_behavior_link_sub_module'],
			maximum: '1',
			required: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Action',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
