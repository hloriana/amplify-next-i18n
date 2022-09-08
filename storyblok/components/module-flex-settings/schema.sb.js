module.exports = {
	name: 'module_flex_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			description:
				'The screen size from which this setting would apply. Empty means that it will applied to all screen sizes.',
			no_translate: true
		},
		flex_grow: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: '0', name: '0' },
				{ value: '1', name: '1' }
			],
			pos: 1,
			no_translate: true
		},
		flex_shrink: {
			type: 'option',
			pos: 2,
			use_uuid: true,
			options: [
				{ value: '0', name: '0' },
				{ value: '1', name: '1' }
			],
			no_translate: true
		},
		equal_width: {
			type: 'boolean',
			description:
				'Tick this on each sibling to make elements the same width (ie column layout)'
		},
		scroll_container: {
			type: 'boolean',
			description:
				'Check this to make the surface a scroll container (ie in modals). NB: only use inside a flex column.'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'module_flex_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
