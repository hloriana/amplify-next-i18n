module.exports = {
	name: 'heading_module',
	display_name: null,
	schema: {
		'heading_level': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'h1', name: 'Heading 1 (2rem, 32px / 3rem, 48px)' },
				{ value: 'h2', name: 'Heading 2 (1.5rem, 24px / 2rem, 32px)' },
				{ value: 'h3', name: 'Heading 3 (1.25rem, 20px / 1.5rem, 24px)' },
				{ value: 'h4', name: 'Heading 4 (1rem, 16px)' }
			],
			required: true,
			default_value: 'h1',
			pos: 0,
			no_translate: true,
			description: 'Set the type of heading to render.',
			display_name: 'Heading Type'
		},
		'extra_type': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'super', name: 'Super' },
				{ value: 'sub', name: 'Sub' }
			],
			required: false,
			default_value: 'super',
			pos: 1,
			description: 'Set the extra to subtext or supertext.',
			no_translate: true
		},
		'font_settings': {
			type: 'bloks',
			pos: 2,
			restrict_components: true,
			component_whitelist: ['font_settings'],
			description: 'Set the alignment and the weight to apply.',
			no_translate: true
		},
		'coloring_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			default_value: '',
			pos: 3,
			description:
				'Apply a text and background color to the module. Colors are responsive.',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			default_value: '',
			pos: 4,
			description: 'Apply margins and paddings to the module.',
			no_translate: true
		},
		'title': {
			type: 'textarea',
			pos: 5,
			required: true,
			translatable: true,
			description: 'The heading title. You can use new lines.'
		},
		'tab-9b470b3d-2093-46c1-9c8d-68b020733fc2': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'heading_level',
				'heading_alignment',
				'spacing_settings',
				'colors_settings',
				'font_settings',
				'coloring_settings',
				'extra_type'
			],
			pos: 6
		},
		'tab-6bf1f924-e998-48d6-9372-afcd1635c40b': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 7
		},
		'module_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['module_grid_settings', 'module_flex_settings'],
			pos: 8,
			no_translate: true
		},
		'extra': {
			type: 'text',
			description:
				'Add subtext or supertext to the heading (choose which in style settings)',
			translatable: true,
			pos: 9
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{title}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'heading_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
