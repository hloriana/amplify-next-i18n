module.exports = {
	name: 'footer_content_type',
	display_name: null,
	schema: {
		icon: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['graphic_module'],
			maximum: '1',
			pos: 0
		},
		academy_logo: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['graphic_module'],
			maximum: '1',
			pos: 1
		},
		text: {
			type: 'bloks',
			translatable: false,
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['text_module'],
			pos: 2
		},
		menu: {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['menu_link_module'],
			pos: 3
		},
		social_menu: {
			type: 'bloks',
			pos: 4,
			restrict_components: true,
			component_whitelist: ['menu_link_module']
		},
		office_text: { type: 'text', pos: 5, translatable: true },
		map_link_text: { type: 'text', pos: 6, translatable: true },
		actions: {
			type: 'bloks',
			maximum: '',
			restrict_components: true,
			component_whitelist: ['action_module'],
			pos: 7
		},
		ef_logo: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['graphic_module'],
			maximum: '1',
			pos: 8
		},
		select_language_text: { type: 'text', pos: 9, translatable: true },
		scroll_top: {
			type: 'bloks',
			restrict_components: true,
			maximum: '1',
			component_whitelist: ['scroll_top_module']
		}
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: null,
	is_nestable: false,
	all_presets: [],
	preset_id: null,
	real_name: 'footer_content_type',
	component_group_uuid: '0a6808f2-cbd3-469c-b263-896a6bd343dd',
	component_group_name: 'Content Types'
};
