module.exports = {
	name: 'map_section_sub_module',
	display_name: null,
	schema: {
		id: { type: 'text', pos: 0 },
		label: {
			type: 'bloks',
			pos: 1,
			restrict_components: true,
			component_whitelist: ['text_module']
		},
		items: {
			type: 'bloks',
			pos: 2,
			restrict_components: true,
			component_whitelist: ['list_item_sub_module']
		},
		image: {
			type: 'bloks',
			pos: 3,
			restrict_components: true,
			component_whitelist: ['graphic_module']
		},
		gradient: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['gradient_module'],
			pos: 4
		},
		active_icon_background_color: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['coloring_settings']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'map_section_sub_module',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
