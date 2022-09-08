module.exports = {
	name: 'video_module',
	display_name: null,
	schema: {
		'thumbnail': {
			type: 'custom',
			pos: 0,
			restrict_components: true,
			component_whitelist: ['graphic'],
			no_translate: true,
			maximum: '1',
			required: false,
			description: 'The thumbnail to display before the video is loaded.',
			image_crop: false,
			image_width: '',
			image_height: '80',
			field_type: 'advanced-image',
			options: []
		},
		'video_url': {
			type: 'text',
			pos: 1,
			description: 'The video URL to load into the player.',
			no_translate: true,
			translatable: true
		},
		'video_file': {
			type: 'file',
			pos: 2,
			add_https: false,
			description: 'A custom video file from the assets.',
			translatable: true,
			no_translate: true
		},
		'mobile_file': {
			type: 'file',
			pos: 3,
			no_translate: true,
			translatable: true
		},
		'loop': {
			type: 'boolean',
			description: 'Loop video',
			pos: 4,
			no_translate: true
		},
		'controls': {
			type: 'boolean',
			display_name: 'Display controls',
			pos: 5,
			description:
				'Show/hide the video controls. Controls cannot be hidden for Wistia videos.',
			no_translate: true
		},
		'auto_play': {
			type: 'boolean',
			description: 'Automatically start the video when it is available',
			pos: 6
		},
		'aspect_ratio_settings': {
			type: 'bloks',
			pos: 7,
			restrict_components: true,
			restrict_type: '',
			component_whitelist: ['aspect_ratio_settings'],
			description: 'Set an aspect ratio for this video.',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['spacing_component_settings'],
			pos: 8,
			default_value: '',
			description: 'Apply margins and paddings to the module.',
			no_translate: true
		},
		'tab-fc1622af-e2a1-47d0-882a-9b7f808fad24': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'spacing_settings',
				'shape_settings',
				'size_settings',
				'sizing_settings',
				'aspect_ratio_settings',
				'gradient'
			],
			pos: 9
		},
		'tab-efc453d7-edb3-48ee-9152-15fd3d5acc27': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['module_settings'],
			pos: 10
		},
		'module_settings': {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['module_grid_settings'],
			default_value: '',
			pos: 11,
			no_translate: true
		},
		'gradient': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['gradient_module'],
			pos: 12
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'video_module',
	component_group_uuid: 'e9b0281a-fc38-4e4e-b68f-428260aad1e3',
	component_group_name: 'Modules'
};
