module.exports = {
	name: 'carousel_module',
	display_name: null,
	schema: {
		'pager_justify': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'start', name: 'Start' },
				{ value: 'center', name: 'Center' },
				{ value: 'end', name: 'End' }
			],
			default_value: 'center',
			description: 'Where the pager should be justified.',
			pos: 0,
			required: true,
			no_translate: true
		},
		'slides_columns': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: '4', name: '4 columns' },
				{ value: '6', name: '6 columns' },
				{ value: '12', name: '12 columns' },
				{ value: '3', name: '3 columns' }
			],
			default_value: '4',
			required: true,
			no_translate: true,
			description:
				'The number of columns used for each slide.\n(Used as a default value, can be overridden by Responsive Column Settings)',
			pos: 1
		},
		'columns_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['column_component_settings'],
			pos: 2,
			display_name: 'Responsive Column Settings',
			description:
				'Responsive carousel column settings\n(if this is not set up Slide Columns value is used)'
		},
		'behavior': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['carousel_behavior_hide_sub_module'],
			description: 'Apply a special behavior to the carousel.',
			pos: 3,
			maximum: '1'
		},
		'spacing_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			no_translate: true,
			pos: 4,
			description: 'Apply margin to the carousel and padding to the pager.'
		},
		'overflow_breakpoint': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens',
			description:
				'Select which breakpoint at which the overflow becomes hidden. (Default md, none = never)',
			default_value: 'md',
			pos: 5
		},
		'variant': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'light', name: 'On Light' },
				{ value: 'dark', name: 'On Dark' }
			],
			description: 'Choose the colour variant for the carousel',
			pos: 6
		},
		'body': {
			type: 'bloks',
			required: false,
			description: 'The slides of this carousel.',
			restrict_components: true,
			component_whitelist: [],
			pos: 7,
			restrict_type: 'groups',
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			component_group_whitelist_names: ['Modules']
		},
		'tab-2f54f2d9-ea3b-4105-93e8-ff9c9886b21a': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'slides_columns',
				'spacing_settings',
				'pager_justify',
				'behavior',
				'overflow_breakpoint',
				'variant',
				'slides_columns_settings',
				'columns_settings'
			],
			pos: 8
		},
		'tab-1df04c05-63c8-4244-b4c0-f8fed687d4f4': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 9
		},
		'module_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['module_grid_settings', 'module_flex_settings'],
			no_translate: true,
			pos: 10
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: 'Slides: {{body.length}}',
	is_nestable: true,
	all_presets: [
		{ id: 878904, name: 'Blog - Carousel', component_id: 725630, image: '' },
		{
			id: 737910,
			name: 'Infomeeting - Carousel',
			component_id: 725630,
			image: ''
		},
		{
			id: 741469,
			name: 'Infomeeting - Carousel - Burgundy',
			component_id: 725630,
			image: ''
		},
		{ id: 750715, name: 'News - Carousel', component_id: 725630, image: '' }
	],
	preset_id: null,
	real_name: 'carousel_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
