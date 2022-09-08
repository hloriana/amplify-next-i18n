module.exports = {
	name: 'sticky_module',
	display_name: null,
	schema: {
		'body': {
			type: 'bloks',
			pos: 0,
			description: 'The content that should be sticked at the bottom.'
		},
		'section_reference': {
			type: 'custom',
			field_type: 'ef-sbe-component-selector',
			options: [
				{ value: 'draft', name: 'version' },
				{ value: 'body', name: 'path' },
				{ value: 'grid_section', name: 'type' },
				{ value: 'name', name: 'name' },
				{ value: '_uid', name: 'reference' }
			],
			pos: 1,
			description:
				'The reference of the section where you want to hide the sticky. ',
			no_translate: true
		},
		'tab-07d61f84-3e5a-489a-9e41-4f36802c24ba': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['coloring_settings', 'spacing_settings', 'shadow_type'],
			pos: 0
		},
		'coloring_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			default_value:
				'[{\n"component": "coloring_settings",\n"text_color": "",\n"text_shade": " ",\n"screen_size": "",\n"background_color": "white",\n"background_shade": " "}]',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			default_value:
				'[{"component": "spacing_component_settings",\n"margin_type": "",\n"screen_size": "",\n"margin_value": "",\n"padding_type": "",\n"padding_value": "3",\n"margin_negative": false}]',
			no_translate: true
		},
		'shadow_type': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'none', name: 'None' },
				{ value: 'regular', name: 'Regular' },
				{ value: 'deep', name: 'Deep' }
			],
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: 'Modules: {{body.length}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'sticky_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
