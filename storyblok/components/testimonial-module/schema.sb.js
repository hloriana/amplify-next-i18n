module.exports = {
	name: 'testimonial_module',
	display_name: 'Testimonial Module',
	schema: {
		'tab-164e47f6-12b7-4c9a-9283-7261e03b9a22': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'colors_settings',
				'type',
				'border_radius',
				'coloring_settings',
				'spacing_settings',
				'card_border_radius',
				'behavior',
				'extends'
			],
			pos: 0
		},
		'tab-d0321a74-e2bd-434f-846c-efc38e8f02ae': {
			type: 'tab',
			display_name: 'Layout',
			keys: [
				'module_settings',
				'body_settings',
				'content_body_settings',
				'overlay_body_settings',
				'card_body',
				'card_body_settings',
				'last_item_at_end'
			],
			pos: 1
		},
		'tab-b8c88f99-847a-4c0a-b7bf-cbaa9fd200a2': {
			type: 'tab',
			display_name: 'Graphic',
			keys: [
				'graphic_border_radius',
				'gradient',
				'is_centered',
				'aspect_ratio_settings',
				'sizing_settings',
				'graphic_spacing_settings',
				'graphic_module_settings'
			],
			pos: 2
		},
		'tab-7fac3429-68d6-4c0a-ab3c-26498abe7ec3': {
			type: 'tab',
			display_name: 'Quote',
			keys: [
				'title_text_type',
				'title_font_settings',
				'subtitle_form_settings',
				'title_colors_settings',
				'title_spacing_settings',
				'title_module_settings',
				'quote_text_type',
				'quote_font_settings',
				'quote_coloring_settings',
				'quote_spacing_settings',
				'quote_module_settings'
			],
			pos: 3
		},
		'tab-31b0ec19-a816-4774-bcc5-0d88abd0df95': {
			type: 'tab',
			display_name: 'Details',
			keys: [
				'subtitle_font_settings',
				'subtitle_text_type',
				'subtitle_colors_settings',
				'subtitle_spacing_settings',
				'subtitle_module_settings',
				'details_spacing_settings',
				'details_coloring_settings',
				'details_font_settings',
				'details_text_type',
				'details_module_settings'
			],
			pos: 4
		},
		'details_text_type': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'text',
			required: true,
			display_name: 'Text Type',
			default_value: 'paragraph',
			description: 'Set the type of text to render.',
			pos: 0
		},
		'details_font_settings': {
			type: 'bloks',
			pos: 1,
			restrict_components: true,
			component_whitelist: ['font_settings'],
			description: 'Set the alignment and the weight to apply.'
		},
		'details_coloring_settings': {
			type: 'bloks',
			pos: 2,
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			description: 'Apply background and text colors to the module.',
			display_name: 'Subtitle colors'
		},
		'details_spacing_settings': {
			type: 'bloks',
			pos: 3,
			description: 'Apply margins and paddings to the module.',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings']
		},
		'details_module_settings': {
			type: 'bloks',
			pos: 4,
			description: 'Apply how the module should behave within its grid.',
			restrict_components: true,
			component_whitelist: ['module_flex_settings', 'module_grid_settings']
		},
		'testimonial_reference': {
			type: 'option',
			use_uuid: true,
			source: 'internal_stories',
			required: true,
			filter_content_type: 'shared_testimonial_content_type',
			pos: 5
		},
		'quote_text_type': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			options: [{ value: '', name: '' }],
			datasource_slug: 'text',
			required: true,
			description: 'Set the type of text to render.',
			display_name: 'Text Type',
			default_value: 'paragraph',
			pos: 7
		},
		'quote_font_settings': {
			type: 'bloks',
			pos: 8,
			maximum: '',
			restrict_components: true,
			component_whitelist: ['font_settings'],
			description: 'Set the alignment and the weight to apply.'
		},
		'quote_coloring_settings': {
			type: 'bloks',
			pos: 9,
			display_name: 'Title colors',
			description: 'Apply background and text colors to the module.',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['coloring_settings']
		},
		'quote_spacing_settings': {
			type: 'bloks',
			pos: 10,
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			description: 'Apply margins and paddings to the module.'
		},
		'quote_module_settings': {
			type: 'bloks',
			pos: 11,
			description: 'Apply how the module should behave within its grid.',
			restrict_components: true,
			component_whitelist: ['module_flex_settings', 'module_grid_settings']
		},
		'is_centered': { type: 'boolean', pos: 17 },
		'graphic_border_radius': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius',
			description: 'Apply a border radius to the image.',
			pos: 18
		},
		'aspect_ratio_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['aspect_ratio_settings'],
			no_translate: false,
			pos: 19
		},
		'gradient': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['gradient_module'],
			description: 'Apply a gradient to the image.',
			no_translate: true,
			pos: 20
		},
		'sizing_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['sizing_preset_settings'],
			description: 'Use a custom width and height instead of the aspect ratio.',
			no_translate: true,
			pos: 21
		},
		'graphic_spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			description: 'Apply margins and paddings to the module.',
			no_translate: true,
			pos: 22
		},
		'graphic_module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_flex_settings', 'module_grid_settings'],
			no_translate: true,
			description: 'Apply how the module should behave within its grid.',
			pos: 23
		},
		'type': {
			type: 'option',
			pos: 24,
			use_uuid: true,
			options: [
				{ value: 'flat', name: 'Flat' },
				{ value: 'shadow', name: 'Shadow' },
				{ value: 'deep-shadow', name: 'Deep shadow' }
			],
			required: true,
			description: 'The type of card.',
			default_value: 'flat',
			no_translate: true
		},
		'border_radius': {
			type: 'option',
			pos: 25,
			description: "Apply a radius to the card's edges.",
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius',
			no_translate: true
		},
		'behavior': {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['card_behavior_character_sensitive_sub_module'],
			pos: 26,
			description:
				'This describes the type of behavior the card should have about its content.'
		},
		'coloring_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			description:
				'Apply a text and background color to the module. Colors are responsive.',
			pos: 27,
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			description: 'Apply a margin to the card and padding to the body.',
			no_translate: true,
			pos: 28
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
			pos: 29,
			no_translate: true
		},
		'card_body_settings': {
			type: 'bloks',
			pos: 30,
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			maximum: '',
			no_translate: true
		},
		'overlay_body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			no_translate: true,
			pos: 31
		},
		'content_body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_flex_settings'],
			description: '',
			pos: 32,
			no_translate: true
		},
		'last_item_at_end': {
			type: 'boolean',
			description:
				'If this is checked, the last item in the card content will be displayed at the end of the card',
			pos: 33,
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{testimonial_reference}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Testimonial Module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
