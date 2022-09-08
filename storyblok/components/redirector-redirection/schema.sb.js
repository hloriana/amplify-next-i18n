module.exports = {
	name: 'redirector_redirection',
	display_name: 'Redirection',
	schema: {
		skip: {
			type: 'boolean',
			pos: 0,
			description: 'Sets if the redirection should be skipped or processed',
			display_name: ''
		},
		src: {
			type: 'text',
			description:
				'A regular expression that matches each incoming pathname (excluding querystring).',
			display_name: 'Source',
			required: true,
			regex: '',
			pos: 1
		},
		dest: {
			type: 'text',
			display_name: 'Destination',
			description:
				'A destination pathname or full URL (https:// is required), including querystring, with the ability to embed capture groups as $1, $2…',
			regex: '',
			required: true,
			pos: 2
		},
		desc: {
			type: 'textarea',
			pos: 3,
			description: 'Notes to describe why this redirection is in place.',
			display_name: 'Description'
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'<div>\n{{if(options.skip)}}⨯ Skip{{#else}}✓ Process{{/if}}  </div>\n{{src}}  →  {{dest}}',
	is_nestable: true,
	all_presets: [],
	preset_id: null,
	real_name: 'Redirection',
	component_group_uuid: null,
	component_group_name: null
};
