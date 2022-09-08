module.exports = {
	name: 'gradient_module',
	display_name: null,
	schema: {
		degrees: {
			type: 'number',
			pos: 0,
			required: true,
			description: '',
			default_value: '0',
			no_translate: true
		},
		from_color: {
			type: 'custom',
			field_type: 'native-color-picker',
			options: [],
			pos: 1,
			required: true,
			no_translate: true
		},
		from_position: {
			type: 'number',
			pos: 2,
			description: '',
			display_name: '',
			default_value: '',
			regex: '',
			required: true,
			no_translate: true
		},
		to_color: {
			type: 'custom',
			field_type: 'native-color-picker',
			options: [],
			pos: 3,
			required: true,
			no_translate: true
		},
		to_position: { type: 'number', required: true, no_translate: true },
		opacity: {
			type: 'number',
			description: 'Opacity from 0 to 1.',
			no_translate: true,
			required: false,
			default_value: '1'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'{{degrees}}deg, {{from_color.color}} {{from_position}}%, {{to_color.color}} {{to_position}}%',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'gradient_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
