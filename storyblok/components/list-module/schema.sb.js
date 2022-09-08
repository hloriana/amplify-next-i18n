module.exports = {
	name: 'list_module',
	display_name: null,
	schema: {
		'tab-b57cec98-33ec-4ee6-bc6e-c7e474e59670': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['spacing_settings', 'list_style_type'],
			pos: 0
		},
		'tab-e54305c3-b43e-4601-bb2b-6d2c50191f36': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 0
		},
		'body': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['list_item_sub_module'],
			default_value: '',
			description: 'The items of the list.'
		},
		'module_settings': {
			type: 'bloks',
			default_value: '',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			translatable: false,
			no_translate: true,
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			maximum: '',
			description: 'Apply margin and paddings to all list items.'
		},
		'list_style_type': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'list-disc', name: 'Disc' },
				{ value: 'list-decimal', name: 'Decimal' },
				{ value: 'list-none', name: 'None' }
			]
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: 'Items: {{body.length}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'list_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
