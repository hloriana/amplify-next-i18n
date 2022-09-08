module.exports = {
	name: 'shared_action_content_type',
	display_name: null,
	schema: {
		text: { type: 'text', required: true, pos: 1, translatable: true },
		behavior: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: [
				'action_behavior_link_sub_module',
				'action_behavior_modal_sub_module',
				'action_behavior_scroll_sub_module'
			],
			required: true,
			maximum: '1',
			pos: 2
		}
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'shared_action_content_type',
	component_group_uuid: '0a6808f2-cbd3-469c-b263-896a6bd343dd',
	component_group_name: 'Content Types'
};
