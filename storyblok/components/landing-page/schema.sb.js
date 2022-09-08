module.exports = {
	name: 'landing_page',
	display_name: 'Landing Page',
	schema: {
		seo: {
			type: 'custom',
			field_type: 'seo-metatags',
			options: [],
			pos: 0,
			translatable: true,
			no_translate: false
		},
		body: {
			type: 'bloks',
			display_name: '',
			restrict_components: true,
			restrict_type: 'groups',
			component_group_whitelist: ['8887a257-9b26-4f96-a903-3f1166aaa6f1'],
			pos: 2,
			component_group_whitelist_names: ['Sections']
		},
		top_banner: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['banner_module'],
			maximum: '1',
			display_name: 'Top Banner',
			pos: 3
		},
		bottom_banner: {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['banner_module'],
			display_name: 'Bottom Banner',
			pos: 4
		},
		seo_index: {
			type: 'boolean',
			pos: 1,
			translatable: true,
			description:
			'To prevent most search engine (incl. Google) web crawlers from indexing a page by default a  noindex tag is added. \n\nTo enable search indexing check this box.',
			display_name: 'Index page'
		}
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: null,
	is_nestable: false,
	all_presets: [],
	preset_id: null,
	real_name: 'Landing Page',
	component_group_uuid: '0a6808f2-cbd3-469c-b263-896a6bd343dd',
	component_group_name: 'Content Types'
};
