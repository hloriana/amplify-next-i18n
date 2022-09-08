module.exports = {
	name: 'action_behavior_scroll_sub_module',
	display_name: 'Scroll Behavior',
	schema: {
		section_reference: {
			type: 'custom',
			required: false,
			description: 'To which section should it scroll to.',
			no_translate: true,
			required_fields: '',
			options: [
				{ value: 'draft', name: 'version' },
				{ value: 'body', name: 'path' },
				{ value: 'grid_section', name: 'type' },
				{ value: 'name', name: 'name' },
				{ value: '_uid', name: 'reference' }
			],
			field_type: 'ef-sbe-component-selector'
		},
		program_parameter: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'HSEY', name: 'EF High School Exchange Year' },
				{ value: 'IA', name: 'EF Academy' }
			]
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: 'To: {{section_reference.selected}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Scroll Behavior',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
