module.exports = {
	name: 'header_content_type',
	display_name: null,
	schema: {
		main_menu: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['menu_link_module'],
			maximum: ''
		},
		campus_menus: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['campus_menu_module']
		},
		dark_icon: {
			type: 'bloks',
			filetypes: [],
			restrict_components: true,
			component_whitelist: ['graphic_module'],
			maximum: '1'
		},
		light_icon: {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['graphic_module']
		},
		dark_logo: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['graphic_module'],
			maximum: '1'
		},
		light_logo: {
			type: 'bloks',
			maximum: '1',
			restrict_components: true,
			component_whitelist: ['graphic_module']
		},
		home_text: { type: 'text', translatable: true },
		logo_text: { type: 'text', translatable: true },
		menu_text: { type: 'text', translatable: true },
		close_text: { type: 'text', translatable: true },
		our_campuses_text: { type: 'text', translatable: true },
		primary_action: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['action_module'],
			maximum: '1'
		},
		secondary_action: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['action_module'],
			maximum: '1'
		}
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: null,
	is_nestable: false,
	all_presets: [],
	preset_id: null,
	real_name: 'header_content_type',
	component_group_uuid: '0a6808f2-cbd3-469c-b263-896a6bd343dd',
	component_group_name: 'Content Types'
};
