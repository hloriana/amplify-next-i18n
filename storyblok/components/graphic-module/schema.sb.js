module.exports = {
	name: 'graphic_module',
	display_name: null,
	schema: {
		'name': {
			type: 'text',
			pos: 0,
			no_translate: true,
			description:
				'This is a friendly name used to identify this section within the Storyblok UI.'
		},
		'graphic': {
			type: 'custom',
			field_type: 'ef-sbe-image-focus',
			options: [],
			no_translate: true,
			required: true,
			translatable: true,
			pos: 1
		},
		'mobile_graphic': {
			type: 'custom',
			field_type: 'ef-sbe-image-focus',
			options: [],
			required: false,
			pos: 2,
			no_translate: true,
			translatable: true
		},
		'action': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['graphic_action_sub_module'],
			maximum: '1',
			pos: 3
		},
		'is_centered': {
			type: 'boolean',
			description: 'Center the image within its parent box.',
			display_name: '',
			pos: 4,
			no_translate: true
		},
		'border_radius': {
			type: 'option',
			pos: 5,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius',
			description: 'Apply a border radius to the image.',
			no_translate: true
		},
		'gradient': {
			type: 'bloks',
			pos: 6,
			restrict_components: true,
			component_whitelist: ['gradient_module'],
			maximum: '',
			description: 'Apply a gradient to the image.',
			default_value: '',
			no_translate: true
		},
		'aspect_ratio_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['aspect_ratio_settings'],
			maximum: '',
			required: false,
			no_translate: true,
			pos: 7,
			description: 'Set the aspect ratio of the image.'
		},
		'sizing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['sizing_preset_settings'],
			maximum: '',
			pos: 8,
			default_value: '',
			description: 'Use a custom width and height instead of the aspect ratio.',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			maximum: '',
			pos: 9,
			default_value: '',
			description: 'Apply margins and paddings to the module.',
			no_translate: true
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings', 'module_flex_settings'],
			maximum: '',
			pos: 10,
			description: 'Apply how the module should behave within its grid.',
			default_value: '',
			no_translate: true
		},
		'tab-8467ed00-5f48-451f-ae41-2174bca41647': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'shape_settings',
				'gradient',
				'spacing_settings',
				'is_not_lazyloaded',
				'sizing_settings',
				'is_centered',
				'border_radius',
				'aspect_ratio',
				'aspect_ratio_settings'
			],
			pos: 11
		},
		'tab-ff6dedba-a50b-4d9c-8da6-0d3b6fafb3f0': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 12
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{name}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'graphic_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
