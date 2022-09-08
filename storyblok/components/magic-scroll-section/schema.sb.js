module.exports = {
	name: 'magic_scroll_section',
	display_name: '',
	schema: {
		'name': {
			type: 'text',
			pos: 0,
			display_name: '',
			description:
				'This is a friendly name used to identify this section within the Storyblok UI.',
			no_translate: true
		},
		'body': {
			type: 'bloks',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['8887a257-9b26-4f96-a903-3f1166aaa6f1'],
			pos: 1,
			component_group_whitelist_names: ['Sections']
		},
		'tab-2892dd87-0c73-4b8d-9ac6-86d19f57cf00': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['skip_after_sections'],
			pos: 2
		},
		'tab-2c7f23c8-6125-4243-8c2e-cb77e8a0307c': {
			type: 'tab',
			display_name: 'Layout',
			keys: [],
			pos: 3
		},
		'skip_after_sections': {
			type: 'number',
			required: false,
			description:
				'After how many sections the skip arrow should appear. Empty means that you cannot skip the content.',
			default_value: '',
			no_translate: true,
			pos: 4
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '<div>{{name}}</div>\nSections: {{body.length}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'magic_scroll_section',
	component_group_uuid: '8887a257-9b26-4f96-a903-3f1166aaa6f1',
	component_group_name: 'Sections'
};
