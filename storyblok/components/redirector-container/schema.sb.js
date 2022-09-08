module.exports = {
	name: 'redirector_container',
	display_name: 'Redirector',
	schema: {
		redirections: {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['redirector_redirection'],
			description:
				'A set of redirections for the incoming requests. (more at https://zeit.co/docs/configuration#project/routes)'
		}
	},
	image: null,
	preview_field: null,
	is_root: true,
	preview_tmpl: null,
	is_nestable: false,
	all_presets: [],
	preset_id: null,
	real_name: 'Redirector',
	component_group_uuid: null,
	component_group_name: null
};
