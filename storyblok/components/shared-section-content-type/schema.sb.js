module.exports = {
	name: 'shared_section_content_type',
	display_name: null,
	schema: {
		section: {
			type: 'bloks',
			maximum: '1',
			required: true,
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['8887a257-9b26-4f96-a903-3f1166aaa6f1'],
			component_group_whitelist_names: ['Sections']
		}
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'shared_section_content_type',
	component_group_uuid: '0a6808f2-cbd3-469c-b263-896a6bd343dd',
	component_group_name: 'Content Types'
};
