module.exports = {
	name: 'Surfaces - Image Background - Left',
	preset: {
		_uid: '7dfa85bb-4b21-4421-8b9a-9a9e94171884',
		body: [
			{
				_uid: 'e2d37bee-fa1f-4665-8457-8284c5d7f85e',
				name: '',
				action: [],
				graphic: {
					x: '0.39',
					y: '0.07',
					src: 'https://a.storyblok.com/f/67719/550x467/a8cc94f5fd/550x467.png',
					_uid: 'b7ff0791-378e-42dc-8e71-b7e3f9b8ff61',
					plugin: 'ef-sbe-image-focus'
				},
				gradient: [],
				component: 'graphic_module',
				is_centered: false,
				border_radius: '',
				module_settings: [
					{
						_uid: 'df0b162e-29ea-47c4-8e24-dce310b856cd',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '1',
						column_end: '-1',
						column_span: '',
						screen_size: '',
						column_start: '1'
					}
				],
				sizing_settings: [],
				spacing_settings: [],
				aspect_ratio_settings: [
					{
						_uid: '877aead6-4e20-4853-9cd1-2fb92c5adf72',
						ratio: '6/7',
						component: 'aspect_ratio_settings',
						screen_size: ''
					},
					{
						_uid: '34df2a22-4fa4-4fbe-ae3a-afc338c5b1c4',
						ratio: '3/2',
						component: 'aspect_ratio_settings',
						screen_size: 'md'
					},
					{
						_uid: 'cf9b192f-a364-478f-a081-f94404912fe2',
						ratio: '2/1',
						component: 'aspect_ratio_settings',
						screen_size: 'lg'
					}
				]
			},
			{
				_uid: '3fd7254a-c046-4017-8c84-85bdfdff98d5',
				body: [
					{
						_uid: '52f97a94-1ec6-437e-b551-0f7ce0776580',
						extra: '',
						title: 'Title',
						component: 'heading_module',
						extra_type: 'super',
						font_settings: [],
						heading_level: 'h3',
						module_settings: [],
						spacing_settings: [
							{
								_uid: 'c92e0f06-9320-4433-9d8e-a7f85d68c22d',
								component: 'spacing_component_settings',
								margin_type: 'b',
								screen_size: '',
								margin_value: '4',
								padding_type: '',
								padding_value: '',
								margin_negative: false
							}
						],
						coloring_settings: []
					},
					{
						_uid: '8832c8f2-6345-4279-8187-06004658f149',
						text: {
							_uid: '11df488d-d7e4-437a-b4c2-d285e50e446e',
							type: 'doc',
							content: [
								{
									_uid: '53505c01-55df-44f5-b3d3-7df7a6145aa3',
									type: 'paragraph',
									content: [
										{
											_uid: 'cb888b36-2758-473a-9337-99d220c18fad',
											text:
												"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
											type: 'text',
											marks: [
												{
													_uid: 'ca52fae6-7f45-4275-8bbd-6e4e6908bd8b',
													type: 'styled',
													attrs: {
														_uid: '461e4c8e-69fb-4f74-b6f8-53928caf7e92',
														class: ''
													}
												}
											]
										}
									]
								}
							]
						},
						component: 'text_module',
						text_level: 'paragraph',
						font_settings: [
							{
								_uid: '365b44c0-b9d2-4f85-b515-c8b274706dba',
								weight: 'light',
								alignment: '',
								component: 'font_settings',
								screen_size: ''
							}
						],
						module_settings: [],
						spacing_settings: [
							{
								_uid: '6ac0fca9-1c1c-4b10-84b4-1b4d444a4c50',
								component: 'spacing_component_settings',
								margin_type: 'b',
								screen_size: '',
								margin_value: '1',
								padding_type: '',
								padding_value: '',
								margin_negative: false
							},
							{
								_uid: 'f1b1114f-0830-4631-9524-0b5fa68bd44c',
								component: 'spacing_component_settings',
								margin_type: 'b',
								screen_size: 'lg',
								margin_value: '12',
								padding_type: '',
								padding_value: '',
								margin_negative: false
							}
						],
						coloring_settings: []
					},
					{
						_uid: 'db587538-943a-4fb0-9d3d-345b1d9a6cf1',
						icon: [
							{
								_uid: '96a0dbf5-4a0e-4957-91cd-0ddafa376085',
								icon: 'icons:arrow-right',
								component: 'icon_module',
								border_radius: '',
								module_settings: [],
								sizing_settings: [],
								spacing_settings: [],
								coloring_settings: [],
								transform_settings: []
							}
						],
						size: 'cta',
						text: 'CTA',
						type: 'link',
						shape: 'rounded',
						shadow: '',
						variant: 'light',
						behavior: [
							{
								_uid: 'a949567a-6f4c-4909-b684-c918b613a9af',
								link: {
									id: '',
									url: 'efacademy.com',
									linktype: 'url',
									fieldtype: 'multilink',
									cached_url: 'efacademy.com'
								},
								component: 'action_behavior_link_sub_module',
								carry_params: false,
								open_external: false,
								campus_parameter: ''
							}
						],
						component: 'action_module',
						justify_content: 'between',
						module_settings: [],
						spacing_settings: []
					}
				],
				type: 'shadow',
				action: [],
				component: 'surface_module',
				fill_parent: false,
				body_settings: [],
				border_radius: 'rounded',
				border_settings: [],
				module_settings: [
					{
						_uid: 'd6e06658-7763-4a2b-96be-668a074f1a0a',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '-2',
						column_span: '',
						screen_size: '',
						column_start: '2'
					},
					{
						_uid: '94de3e0e-07eb-42fb-8a42-149cf2d50be2',
						align: 'center',
						justify: '',
						row_end: '2',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '1',
						column_end: '10',
						column_span: '',
						screen_size: 'md',
						column_start: '2'
					},
					{
						_uid: 'af38d835-4798-4204-abac-811949c741c3',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '7',
						column_span: '',
						screen_size: 'lg',
						column_start: '2'
					}
				],
				spacing_settings: [
					{
						_uid: 'eea60b0a-0f57-471b-8f09-cd70eb54ebdc',
						component: 'spacing_component_settings',
						margin_type: '',
						screen_size: '',
						margin_value: '',
						padding_type: 'x',
						padding_value: '12',
						margin_negative: false
					},
					{
						_uid: '1e3f4e15-0d37-4747-a2ec-5a0568bd42c9',
						component: 'spacing_component_settings',
						margin_type: '',
						screen_size: '',
						margin_value: '',
						padding_type: 't',
						padding_value: '12',
						margin_negative: false
					},
					{
						_uid: '8ad7d087-6e96-41a4-8590-e85029bbe8fc',
						component: 'spacing_component_settings',
						margin_type: '',
						screen_size: '',
						margin_value: '',
						padding_type: 'b',
						padding_value: '6',
						margin_negative: false
					},
					{
						_uid: 'd8f02ba9-eb63-408d-80ec-4d12b1eb3d31',
						component: 'spacing_component_settings',
						margin_type: 't',
						screen_size: '',
						margin_value: '16',
						padding_type: '',
						padding_value: '',
						margin_negative: true
					},
					{
						_uid: '1a7f749a-92e2-4064-8f87-2fff4200bc5c',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: '',
						margin_value: '6',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					},
					{
						_uid: 'd45e4165-c4b7-431a-b313-4acfd0ae5234',
						component: 'spacing_component_settings',
						margin_type: 't',
						screen_size: 'md',
						margin_value: '0',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					},
					{
						_uid: 'c34fc330-33db-4eb5-a3e1-9d8540534b2a',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: 'md',
						margin_value: '0',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					},
					{
						_uid: '04a13d01-bd6a-45d8-a024-dfe710c9d3c9',
						component: 'spacing_component_settings',
						margin_type: '',
						screen_size: 'lg',
						margin_value: '',
						padding_type: '',
						padding_value: '16',
						margin_negative: false
					}
				],
				coloring_settings: [
					{
						_uid: 'ba67f6e9-09d3-4d04-9f18-5344cf5618c0',
						component: 'coloring_settings',
						text_color: '',
						text_shade: ' ',
						screen_size: '',
						background_color: 'white',
						background_shade: ' '
					}
				],
				background_settings: []
			}
		],
		name: 'Surface/Image-background/Left',
		component: 'grid_section',
		anchor_slug: '',
		body_settings: [
			{
				_uid: 'cc553ca2-f830-4746-bcf4-9788a2074851',
				align: '',
				justify: '',
				component: 'body_grid_settings',
				grid_type: 'page'
			}
		],
		spacing_settings: [],
		coloring_settings: [],
		background_settings: []
	},
	component_id: 723378,
	image: '',
	component_name: 'grid_section'
};
