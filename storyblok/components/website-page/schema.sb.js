module.exports = {
	name: 'website_page',
	display_name: 'Website Page',
	schema: {
		'seo': {
			type: 'custom',
			field_type: 'seo-metatags',
			options: [],
			pos: 0,
			translatable: true
		},
		'seo_index': {
			type: 'boolean',
			pos: 1,
			translatable: true,
			description:
				'To prevent most search engine (incl. Google) web crawlers from indexing a page by default a  noindex tag is added. \n\nTo enable search indexing check this box.',
			display_name: 'Index page'
		},
		'body': {
			type: 'bloks',
			display_name: '',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['8887a257-9b26-4f96-a903-3f1166aaa6f1'],
			pos: 2,
			component_group_whitelist_names: ['Sections']
		},
		'campus': {
			type: 'option',
			use_uuid: true,
			source: 'internal',
			datasource_slug: 'campus',
			pos: 3
		},
		'promo_settings': { type: 'bloks', pos: 4 },
		'top_banner': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['banner_module'],
			maximum: '1',
			description: 'Recommended length 55 characters',
			display_name: 'Top Banner',
			pos: 5
		},
		'bottom_banner': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['banner_module'],
			maximum: '1',
			display_name: 'Bottom Banner',
			pos: 6
		},
		'tab-a40961ee-439d-4a3d-9621-a238eac36184': {
			type: 'tab',
			display_name: 'Styles',
			keys: ['header_variant'],
			pos: 7
		},
		'header_variant': {
			type: 'option',
			use_uuid: true,
			options: [
				{ value: 'light', name: 'Light' },
				{ value: 'dark', name: 'Dark' }
			],
			pos: 8
		}
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: null,
	is_nestable: false,
	all_presets: [
		{ id: 762614, name: 'Infomeeting page', component_id: 817987, image: '' }
	],
	preset_id: 757812,
	real_name: 'Website Page',
	component_group_uuid: '0a6808f2-cbd3-469c-b263-896a6bd343dd',
	component_group_name: 'Content Types'
};
