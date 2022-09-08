module.exports = {
	name: 'map_module',
	display_name: null,
	schema: {
		'tab-b5d6e4a2-4057-49f5-9b9d-966f22e7e0b8': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['hide_inactive'],
			pos: 0
		},
		'tab-26dc23a6-c03e-488d-8a96-17bc0538904e': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 1
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings']
		},
		'sections': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['map_section_sub_module']
		},
		'hide_inactive': { type: 'boolean' }
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'map_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
