module.exports = {
	name: 'text_module',
	display_name: null,
	schema: {
		'text_level': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'subtitle', name: 'Subtitle (1.5rem, 24px)' },
				{ value: 'paragraph', name: 'Paragraph (1rem, 16px)' },
				{ value: 'ui-label', name: 'UI Label (0.875rem, 14px)' },
				{ value: 'caption', name: 'Caption (0.75rem, 12px)' }
			],
			pos: 0,
			display_name: 'Text Type',
			description: 'Set the type of text to render.',
			datasource_slug: null,
			no_translate: true,
			default_value: 'paragraph',
			required: true
		},
		'font_settings': {
			type: 'bloks',
			pos: 1,
			default_value: '',
			restrict_components: true,
			component_whitelist: ['font_settings'],
			description: 'Set the alignment and the weight to apply.',
			no_translate: true
		},
		'coloring_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			pos: 2,
			description: 'Apply background and text colors to the module.',
			default_value: '',
			display_name: 'Colors',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			pos: 3,
			description: 'Apply margins and paddings to the module.',
			default_value: '',
			display_name: '',
			no_translate: true
		},
		'text': {
			type: 'richtext',
			customize_toolbar: true,
			toolbar: [
				'bold',
				'italic',
				'underline',
				'strike',
				'paragraph',
				'inlinecode',
				'code',
				'list',
				'olist',
				'quote',
				'link'
			],
			pos: 4,
			required: true,
			translatable: true,
			description: 'The text content of the module.'
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings', 'module_flex_settings'],
			pos: 5,
			maximum: '',
			default_value: '',
			description: 'Apply how the module should behave within its grid.',
			no_translate: true
		},
		'tab-abbfe235-7eb1-4872-bb6d-ab66bb3e7edc': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'spacing_settings',
				'text_level',
				'text_alignment',
				'color_settings',
				'styles',
				'space_settings',
				'font_settings',
				'coloring_settings'
			],
			pos: 6
		},
		'tab-4a8be54d-9794-440b-a161-1ec8f036fe58': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['column_settings', 'module_settings'],
			pos: 7
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{text.content[0].content[0].text}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'text_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
