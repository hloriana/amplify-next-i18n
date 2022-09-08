module.exports = {
	name: 'icon_module',
	display_name: null,
	schema: {
		'border_radius': {
			type: 'option',
			pos: 0,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius'
		},
		'coloring_settings': {
			type: 'bloks',
			default_value: '',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			pos: 1,
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			default_value: '',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			pos: 2,
			no_translate: true
		},
		'sizing_settings': {
			type: 'bloks',
			default_value: '',
			restrict_components: true,
			component_whitelist: ['sizing_preset_settings'],
			pos: 3,
			maximum: '',
			no_translate: true,
			description:
				'Apply width and height to the image. By default is height 4 (16px).'
		},
		'icon': {
			type: 'option',
			use_uuid: true,
			options: [],
			pos: 4,
			source: 'internal',
			datasource_slug: 'icons',
			required: true,
			no_translate: true,
			description:
				'Icon to use. Academicons are meant to be used with a "large" size.',
			translatable: true
		},
		'tab-996a54f5-fbf0-4e36-baa5-3576176aec35': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'spacing_settings',
				'sizing_settings',
				'colors_settings',
				'coloring_settings',
				'border_radius',
				'transform_settings'
			],
			pos: 5
		},
		'tab-845af2d0-8adc-4943-b505-4da57003f436': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 6
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
			default_value: '',
			pos: 7,
			no_translate: true
		},
		'transform_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['transform_settings']
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'icon_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
