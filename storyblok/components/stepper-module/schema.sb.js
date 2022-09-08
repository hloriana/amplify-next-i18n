module.exports = {
	name: 'stepper_module',
	display_name: null,
	schema: {
		'steps': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['step_module']
		},
		'tab-ff5a4f79-65e1-404c-9fc7-aea03c132096': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 0
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
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
	real_name: 'stepper_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
