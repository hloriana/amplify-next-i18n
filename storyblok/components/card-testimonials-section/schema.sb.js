module.exports = {
	name: 'card_testimonials_section',
	display_name: 'Testimonials section',
	schema: {
		'tab-af21461e-7034-45ab-a25a-de4bf4c6f829': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['coloring_settings', 'spacing_settings', 'background_settings'],
			pos: 0
		},
		'name': {
			type: 'text',
			translatable: true,
			description:
				'This is a friendly name used to identify this section within the Storyblok UI.',
			default_value: '',
			no_translate: true
		},
		'body': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['card_testimonial_module'],
			required: true,
			restrict_type: ''
		},
		'coloring_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			description:
				'Apply a text and background color to the section. Colors are responsive.',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_layout_settings'],
			description: 'Apply dynamic margins and paddings to the section.',
			no_translate: true
		},
		'background_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['background_settings'],
			no_translate: true
		},
		'tab-19573e5d-1096-4839-9110-10f5edd66c4c': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['body_settings'],
			pos: 0
		},
		'body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_grid_settings'],
			maximum: '1',
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Testimonials section',
	component_group_uuid: '8887a257-9b26-4f96-a903-3f1166aaa6f1',
	component_group_name: 'Sections'
};
