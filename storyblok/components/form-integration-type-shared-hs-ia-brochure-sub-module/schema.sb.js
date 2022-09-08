module.exports = {
	name: 'form_integration_type_shared_hs_ia_brochure_sub_module',
	display_name: 'HSEY x IA shared',
	schema: {
		hsey_text: {
			type: 'bloks',
			maximum: '1',
			required: true,
			restrict_components: true,
			component_whitelist: ['text_module']
		},
		academy_text: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['text_module'],
			maximum: '1',
			required: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'HSEY x IA shared',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
