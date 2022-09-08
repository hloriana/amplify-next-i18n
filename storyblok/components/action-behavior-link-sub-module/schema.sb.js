module.exports = {
	name: 'action_behavior_link_sub_module',
	display_name: 'Link Behavior',
	schema: {
		link: {
			type: 'multilink',
			required: true,
			description: 'The internal or external page to link.',
			link_scope: '{0}',
			force_link_scope: false,
			no_translate: true,
			translatable: true
		},
		carry_params: {
			type: 'boolean',
			no_translate: true,
			description:
				'Set this to make the URL carrying the search params of the entry page.'
		},
		open_external: {
			type: 'boolean',
			no_translate: true,
			description: 'Set this to make the link opening in a new tab.',
			display_name: 'Open in External'
		},
		campus_parameter: {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'campus'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: '{{link.cached_url || link.url}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Link Behavior',
	component_group_uuid: '440c95ce-6c36-437c-be1f-ae35d0006880',
	component_group_name: 'Modules > Sub Modules'
};
