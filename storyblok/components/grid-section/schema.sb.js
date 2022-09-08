module.exports = {
	name: 'grid_section',
	display_name: 'Section',
	schema: {
		'name': {
			type: 'text',
			pos: 0,
			description:
				'This is a friendly name used to identify this section within the Storyblok UI.',
			display_name: '',
			no_translate: true,
			translatable: true
		},
		'anchor_slug': {
			type: 'text',
			pos: 1,
			description:
				'This is used as an anchor to scroll the page into this section.',
			translatable: true,
			required: false,
			no_translate: true
		},
		'coloring_settings': {
			type: 'bloks',
			pos: 2,
			restrict_components: true,
			component_whitelist: ['coloring_settings'],
			maximum: '',
			description:
				'Apply a text and background color to the section. Colors are responsive.',
			no_translate: true
		},
		'body': {
			type: 'bloks',
			restrict_components: true,
			restrict_type: 'groups',
			pos: 3,
			component_group_whitelist: ['e9b0281a-fc38-4e4e-b68f-428260aad1e3'],
			component_whitelist: [],
			maximum: '',
			required: true,
			component_group_whitelist_names: ['Modules']
		},
		'body_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['body_grid_settings'],
			maximum: '1',
			pos: 4,
			default_value: '',
			no_translate: true
		},
		'spacing_settings': {
			type: 'bloks',
			pos: 5,
			restrict_components: true,
			component_whitelist: ['spacing_layout_settings'],
			maximum: '',
			description: 'Apply dynamic margins and paddings to the section.',
			no_translate: true
		},
		'tab-6c6fae99-2eaf-4af4-8a3c-dfb2838b5826': {
			type: 'tab',
			display_name: 'Styles',
			keys: [
				'spacing_settings',
				'colors_settings',
				'coloring_settings',
				'background_settings'
			],
			pos: 6
		},
		'tab-1c123d5e-9be4-4789-b794-7903338fe085': {
			type: 'tab',
			display_name: 'Layout',
			keys: ['grid_settings', 'section_settings', 'body_settings'],
			pos: 7
		},
		'background_settings': {
			type: 'bloks',
			restrict_components: true,
			component_whitelist: ['background_settings'],
			maximum: '',
			no_translate: true
		}
	},
	image: null,
	preview_field: null,
	is_root: false,
	preview_tmpl:
		'<div>{{name}}</div>\n{{if(options.anchor_slug)}}\n<div>#{{anchor_slug}}</div>\n{{/if}}',
	is_nestable: true,
	all_presets: [
		{
			id: 953890,
			name: 'Body - Heading - Text',
			component_id: 723378,
			image: ''
		},
		{
			id: 710360,
			name: 'Body - Image - Left',
			component_id: 723378,
			image: ''
		},
		{
			id: 710361,
			name: 'Body - Image - Right',
			component_id: 723378,
			image: ''
		},
		{ id: 693829, name: 'Cards - Basic', component_id: 723378, image: '' },
		{ id: 701852, name: 'Cards - Extra', component_id: 723378, image: '' },
		{ id: 693830, name: 'Cards - Lite', component_id: 723378, image: '' },
		{
			id: 692801,
			name: 'Carousel - Cards - Basic',
			component_id: 723378,
			image: ''
		},
		{
			id: 692847,
			name: 'Carousel - Cards - Extra',
			component_id: 723378,
			image: ''
		},
		{
			id: 697714,
			name: 'Carousel - Cards - Image - Basic',
			component_id: 723378,
			image: ''
		},
		{
			id: 697715,
			name: 'Carousel - Cards - Image - Extra',
			component_id: 723378,
			image: ''
		},
		{
			id: 712007,
			name: 'Carousel - Cards - Popup - Basic',
			component_id: 723378,
			image: ''
		},
		{
			id: 712008,
			name: 'Carousel - Cards - Popup - Extra',
			component_id: 723378,
			image: ''
		},
		{ id: 534468, name: 'Carousel - ImgText', component_id: 723378, image: '' },
		{
			id: 706781,
			name: 'Carousel - Surface - Basic',
			component_id: 723378,
			image: ''
		},
		{
			id: 710189,
			name: 'Carousel - Surface - Extra',
			component_id: 723378,
			image: ''
		},
		{
			id: 535935,
			name: 'Carousel - Testimonial',
			component_id: 723378,
			image: ''
		},
		{
			id: 814413,
			name: 'Carousel - Testimonial - Basic',
			component_id: 723378,
			image: ''
		},
		{
			id: 814414,
			name: 'Carousel - Testimonial - Lite - LP',
			component_id: 723378,
			image: ''
		},
		{
			id: 814415,
			name: 'Carousel - Testimonial - Lite - MW',
			component_id: 723378,
			image: ''
		},
		{ id: 953891, name: 'Carousel - Video', component_id: 723378, image: '' },
		{ id: 751819, name: 'Collapse - Basic', component_id: 723378, image: '' },
		{
			id: 694871,
			name: 'Collapse - Colored - Basic',
			component_id: 723378,
			image: ''
		},
		{ id: 695029, name: 'Collapse - Extra', component_id: 723378, image: '' },
		{ id: 783241, name: 'Error - 404', component_id: 723378, image: '' },
		{
			id: 924523,
			name: 'Error - 404 - events',
			component_id: 723378,
			image: ''
		},
		{
			id: 924524,
			name: 'Error - 404 - external',
			component_id: 723378,
			image: ''
		},
		{
			id: 933377,
			name: 'Header - Hero + Cards',
			component_id: 723378,
			image: ''
		},
		{
			id: 694043,
			name: 'Image Gallery - Large - Basic',
			component_id: 723378,
			image: ''
		},
		{
			id: 701853,
			name: 'Image Gallery - Large - Extra',
			component_id: 723378,
			image: ''
		},
		{
			id: 694159,
			name: 'Image Gallery - Small - Extra',
			component_id: 723378,
			image: ''
		},
		{ id: 695380, name: 'Images - Basic', component_id: 723378, image: '' },
		{ id: 695261, name: 'Images - Extra', component_id: 723378, image: '' },
		{
			id: 933378,
			name: 'Infomeetings - Empty Section',
			component_id: 723378,
			image: ''
		},
		{ id: 713221, name: 'Special - Team', component_id: 723378, image: '' },
		{ id: 692726, name: 'Stage - Basic', component_id: 723378, image: '' },
		{
			id: 710446,
			name: 'Stage - Hero + Facts',
			component_id: 723378,
			image: ''
		},
		{
			id: 533124,
			name: 'Stage - Hero + Surface',
			component_id: 723378,
			image: ''
		},
		{
			id: 710318,
			name: 'Stage - Hero - Title',
			component_id: 723378,
			image: ''
		},
		{ id: 933380, name: 'Stage - Lite', component_id: 723378, image: '' },
		{ id: 704676, name: 'Stepper - Basic', component_id: 723378, image: '' },
		{ id: 537299, name: 'Stepper - tiles', component_id: 723378, image: '' },
		{
			id: 953893,
			name: 'Surfaces - 2col - Basic',
			component_id: 723378,
			image: ''
		},
		{
			id: 741544,
			name: 'Surfaces - 2col - Extra',
			component_id: 723378,
			image: ''
		},
		{
			id: 697716,
			name: 'Surfaces - 3col - Large Icons',
			component_id: 723378,
			image: ''
		},
		{
			id: 701974,
			name: 'Surfaces - 3col - Large Icons - Links',
			component_id: 723378,
			image: ''
		},
		{
			id: 706780,
			name: 'Surfaces - 3col - Small Icons',
			component_id: 723378,
			image: ''
		},
		{
			id: 953894,
			name: 'Surfaces - Image Background - Left',
			component_id: 723378,
			image: ''
		},
		{
			id: 701850,
			name: 'Teaser - Background-Photo',
			component_id: 723378,
			image: ''
		},
		{
			id: 710358,
			name: 'Teaser - Text + Image Left',
			component_id: 723378,
			image: ''
		},
		{
			id: 710357,
			name: 'Teaser - Text + Image Right',
			component_id: 723378,
			image: ''
		},
		{
			id: 933381,
			name: 'Teaser - Text + Video',
			component_id: 723378,
			image: ''
		},
		{ id: 933379, name: 'Video - Basic', component_id: 723378, image: '' },
		{ id: 934705, name: 'Video - Extra', component_id: 723378, image: '' }
	],
	preset_id: null,
	real_name: 'Section',
	component_group_uuid: '8887a257-9b26-4f96-a903-3f1166aaa6f1',
	component_group_name: 'Sections'
};
