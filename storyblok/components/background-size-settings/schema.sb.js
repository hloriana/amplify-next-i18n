module.exports = {
	name: 'background_size_settings',
	display_name: null,
	schema: {
		screen_size: {
			type: 'option',
			pos: 0,
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'screens'
		},
		horizontal_size: {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'full', name: 'Full' },
				{ value: 'cover', name: 'Cover' },
				{ value: 'contain', name: 'Contain' },
				{ value: '1/4', name: '1/4' },
				{ value: '1/3', name: '1/3' },
				{ value: '1/2', name: '1/2' },
				{ value: '2/3', name: '2/3' },
				{ value: '3/4', name: '3/4' },
				{ value: 'auto', name: 'auto' }
			],
			pos: 1
		},
		vertical_size: {
			type: 'option',
			use_uuid: true,
			exclude_empty_option: false,
			options: [
				{ value: 'full', name: 'Full' },
				{ value: '1/4', name: '1/4' },
				{ value: '1/3', name: '1/3' },
				{ value: '1/2', name: '1/2' },
				{ value: '2/3', name: '2/3' },
				{ value: '3/4', name: '3/4' },
				{ value: 'auto', name: 'auto' }
			],
			pos: 2
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl: null,
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'background_size_settings',
	component_group_uuid: '69ef1da9-2ac0-41dc-9600-48de99fe7730',
	component_group_name: 'Settings'
};
