module.exports = {
	name: 'action_reference_module',
	display_name: 'Shared Action Reference',
	schema: {
		'shape': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'rounded', name: 'Rounded' },
				{ value: 'square', name: 'Square' }
			],
			default_value: 'rounded',
			pos: 0,
			description: 'Shape of the action type.',
			required: true,
			no_translate: true
		},
		'size': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'small', name: 'Small' },
				{ value: 'normal', name: 'Normal' },
				{ value: 'cta', name: 'CTA' },
				{ value: 'extraSmall', name: 'Extra Small' }
			],
			default_value: 'normal',
			pos: 1,
			description: 'The size of the action type.',
			required: true,
			no_translate: true
		},
		'type': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'primary', name: 'Primary button' },
				{ value: 'secondary', name: 'Secondary button' },
				{ value: 'link', name: 'Link' }
			],
			default_value: 'primary',
			pos: 2,
			description: 'The type of this action.',
			required: true,
			no_translate: true
		},
		'variant': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'dark', name: 'On dark' },
				{ value: 'light', name: 'On light' }
			],
			default_value: 'dark',
			pos: 3,
			required: true,
			no_translate: true,
			description: ''
		},
		'shadow': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'flat', name: 'Flat' },
				{ value: 'shadow', name: 'Shadow' },
				{ value: 'deep-shadow', name: 'Deep' }
			],
			pos: 4
		},
		'justify_content': {
			type: 'option',
			pos: 5,
			regex: '',
			description: 'Set how the content should justify within the button.',
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' },
				{ value: 'between', name: 'Between' },
				{ value: 'around', name: 'Around' },
				{ value: 'evenly', name: 'Evenly' }
			],
			default_value: 'center',
			required: true,
			no_translate: true
		},
		'icon': {
			type: 'bloks',
			pos: 6,
			restrict_components: true,
			component_whitelist: ['icon_module'],
			maximum: '1',
			description: 'Add an icon to display on the end side of this action.',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			pos: 7,
			maximum: '',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			description: 'Apply margins and paddings.',
			no_translate: true
		},
		'tab-b79e9fed-9fd0-4b02-9242-00cccbe7ceb2': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'size',
				'type',
				'contrast',
				'shape',
				'button_type',
				'type',
				'icon',
				'center_content',
				'style',
				'variant',
				'group_content',
				'spacing_settings',
				'justify_content',
				'shadow'
			],
			pos: 10
		},
		'tab-361a6b0d-2a59-493e-82ec-55a2d9221d55': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 11
		},
		'module_settings': {
			type: 'bloks',
			default_value: '',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
			pos: 12,
			no_translate: true
		},
		'action_reference': {
			type: 'option',
			use_uuid: true,
			source: 'internal_stories',
			folder_slug: '',
			filter_content_type: 'shared_action_content_type',
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
	real_name: 'Shared Action Reference',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
