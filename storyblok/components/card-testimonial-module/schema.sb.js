module.exports = {
	name: 'card_testimonial_module',
	display_name: null,
	schema: {
		'name': {
			type: 'text',
			description:
				'This is a friendly name used to identify this section within the Storyblok UI.',
			no_translate: true,
			pos: 3
		},
		'tab-1fa1c62f-6f04-4f9e-9217-697ad1e96a1e': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings', 'card_body_settings'],
			pos: 5
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
			no_translate: true,
			pos: 6
		},
		'testimonial': {
			type: 'option',
			use_uuid: true,
			source: 'internal_stories',
			filter_content_type: 'shared_testimonial_content_type',
			required: true,
			pos: 7
		},
		'flipper_characters_limit': { type: 'number', required: true }
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'card_testimonial_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
