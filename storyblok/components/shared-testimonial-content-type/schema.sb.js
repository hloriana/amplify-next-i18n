module.exports = {
	name: 'shared_testimonial_content_type',
	display_name: '',
	schema: {
		'graphic': {
			type: 'custom',
			translatable: true,
			field_type: 'ef-sbe-image-focus',
			options: [],
			required: true,
			no_translate: true,
			pos: 0
		},
		'quote': { type: 'richtext', pos: 2, translatable: true },
		'details': { type: 'richtext', pos: 3, translatable: true },
		'tab-18cb7eab-e1bc-4c04-9c97-5c0e0e14406a': {
			type: 'tab',
			display_name: 'Metadata',
			keys: ['program', 'campus', 'type', 'country'],
			pos: 0
		},
		'program': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			exclude_empty_option: true,
			datasource_slug: 'program',
			required: true
		},
		'campus': {
			type: 'option',
			max_length: '',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'campus',
			required: true,
			exclude_empty_option: true
		},
		'type': {
			type: 'option',
			use_uuid: true,
			exclude_empty_option: true,
			source: 'internal',
			required: true,
			datasource_slug: 'testimonial-type'
		},
		'country': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			exclude_empty_option: true,
			datasource_slug: 'region',
			required: true,
			display_name: ''
		},
		'name': { type: 'text', display_name: 'First Name Last Name' }
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: '{{name}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'shared_testimonial_content_type',
	component_group_uuid: '0a6808f2-cbd3-469c-b263-896a6bd343dd',
	component_group_name: 'Content Types'
};
