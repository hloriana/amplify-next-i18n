module.exports = {
	name: 'card_action_sub_module',
	display_name: 'Card Action',
	schema: {
		'clickable_area': {
			type: 'option',
			pos: 0,
			use_uuid: true,
			options: [
				{ value: 'whole', name: 'Whole card' },
				{ value: 'cover', name: 'Cover' },
				{ value: 'content', name: 'Body' }
			],
			required: true,
			no_translate: true,
			default_value: 'whole'
		},
		'icon': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['icon_module'],
			maximum: '1',
			no_translate: true,
			pos: 1
		},
		'icon_placement': {
			type: 'option',
			pos: 2,
			use_uuid: true,
			options: [
				{ value: 'cover', name: 'Cover' },
				{ value: 'content', name: 'Body' }
			],
			required: false,
			default_value: 'content',
			no_translate: true
		},
		'icon_position': {
			type: 'option',
			use_uuid: true,
			pos: 3,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' }
			],
			no_translate: true
		},
		'action_behavior': {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: [
				'action_behavior_link_sub_module',
				'action_behavior_modal_sub_module',
				'action_behavior_scroll_sub_module'
			],
			required: true,
			pos: 4,
			no_translate: true
		},
		'tab-0056e14e-204e-48a5-8200-c9de938b3ac4': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'icon',
				'icon_align',
				'icon_justify',
				'clickable_area',
				'icon_area',
				'icon_placement',
				'icon_position'
			],
			pos: 5
		},
		'tab-72c50d5f-fd07-4b3d-bf2d-6ee50193fad0': {
			type: 'tab',
			display_name: 'Layout',
			keys: [],
			pos: 6
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Card Action',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
