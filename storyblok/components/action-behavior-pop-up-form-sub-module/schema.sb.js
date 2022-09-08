module.exports = {
	name: 'action_behavior_pop_up_form_sub_module',
	display_name: 'Pop Up Form Behavior',
	schema: {
		'body': { type: 'bloks', pos: 0 },
		'form': {
			type: 'bloks',
			maximum: '1',
			required: true,
			restrict_components: true,
			component_whitelist: ['form_integration_module'],
			pos: 1
		},
		'thank_you_page': { type: 'bloks', pos: 2, required: true },
		'border_radius': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'border-radius',
			pos: 3,
			description: 'Apply a border radius to the box edges.',
			no_translate: true
		},
		'variant': {
			type: 'option',
			pos: 4,
			use_uuid: true,
			options: [
				{ value: 'light', name: 'Light' },
				{ value: 'dark', name: 'Dark' }
			],
			required: true,
			default_value: 'dark',
			description: '',
			display_name: 'UI Elements schema',
			no_translate: true
		},
		'coloring_settings': {
			type: 'bloks',
			pos: 5,
			default_value: '',
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			description: 'Apply coloring to the modal window.',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			no_translate: true,
			maximum: '',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			pos: 6,
			description: 'Apply padding to the body.'
		},
		'tab-2afc82ef-68a1-4cdc-af96-f116cc9f07a0': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'close_icon',
				'border_radius',
				'colors_settings',
				'coloring_settings',
				'spacing_settings',
				'type',
				'variant',
				'hide_overflow'
			],
			pos: 7
		},
		'tab-e80a58a7-fec4-41fb-ba4c-6c3e28d18438': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['body_settings'],
			pos: 8
		},
		'body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_flex_settings', 'body_grid_settings'],
			no_translate: true,
			pos: 9
		},
		'hide_overflow': {
			type: 'boolean',
			description:
				'Check this to hide the overflow of the modal in the event that it extends over 80% of the screen height. (good to pair with an overflow scroll surface)',
			pos: 10
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: 'Modules: {{body.length}}',
	is_nestable: true,
	all_presets: [
		{ id: 953892, name: 'Pop-Up Form Module', component_id: 1318780, image: '' }
	],
	preset_id: null,
	real_name: 'Pop Up Form Behavior',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
