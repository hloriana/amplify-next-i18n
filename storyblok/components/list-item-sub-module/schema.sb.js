module.exports = {
	name: 'list_item_sub_module',
	display_name: 'List Item',
	schema: {
		icon: {
			type: 'bloks',
			default_value: '',
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['graphic_module', 'icon_module'],
			pos: 0,
			description: 'The left side icon.'
		},
		text: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['text_module'],
			maximum: '1',
			required: true,
			default_value: '',
			pos: 1,
			description: 'The text of this item.'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{text[0].text.content[0].content[0].text}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'List Item',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
