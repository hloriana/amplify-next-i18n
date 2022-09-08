module.exports = {
	name: 'shared_section',
	display_name: null,
	schema: {
		section: {
			type: 'option',
			use_uuid: true,
			source: 'internal_stories',
			filter_content_type: 'shared_section_content_type',
			folder_slug: ''
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'shared_section',
	component_group_uuid: '8887a257-9b26-4f96-a903-3f1166aaa6f1',
	component_group_name: 'Sections'
};
