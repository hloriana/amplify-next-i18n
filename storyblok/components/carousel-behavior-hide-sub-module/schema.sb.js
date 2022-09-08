module.exports = {
	name: 'carousel_behavior_hide_sub_module',
	display_name: 'Hide Behavior',
	schema: {
		screen_size: {
			type: 'option',
			restrict_components: true,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			description:
				'Hide the carousel functionality from the chosen screen size. Empty means never.',
			required: false,
			display_name: 'Hide at Screen Size',
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
	real_name: 'Hide Behavior',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
