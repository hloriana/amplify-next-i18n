module.exports = {
	name: 'team_member_content_type',
	display_name: null,
	schema: {
		image: {
			type: 'bloks',
			maximum: '1',
			required: true,
			restrict_components: true,
			component_whitelist: ['graphic_module']
		},
		name: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['text_module'],
			maximum: '1'
		},
		position: {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['text_module']
		}
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [
		{ id: 713217, name: 'Default', component_id: 1083214, image: '' }
	],
	preset_id: 713217,
	real_name: 'team_member_content_type',
	component_group_uuid: '0a6808f2-cbd3-469c-b263-896a6bd343dd',
	component_group_name: 'Content Types'
};
