module.exports = {
	name: 'Teaser - Text + Video',
	preset: {
		_uid: 'e15729eb-8cc7-4f4f-9ab6-247f60b72783',
		body: [
			{
				_uid: '27fd74b0-d0c9-4cbd-a41c-95274e8842c6',
				body: [
					{
						_uid: '0aef4f42-db20-4858-83e8-3763ac5a6603',
						extra: '',
						title: 'Title',
						component: 'heading_module',
						extra_type: 'super',
						font_settings: [],
						heading_level: 'h2',
						module_settings: [],
						spacing_settings: [
							{
								_uid: '6d24ba5a-1b82-49b9-b2a4-d066dcee4c79',
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
						_uid: 'fdcb5f01-eca2-47da-9fbe-6769e511d325',
						text: {
							type: 'doc',
							content: [
								{
									type: 'paragraph',
									content: [
										{ text: 'Lorem Ipsum', type: 'text' },
										{
											text:
												" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
											type: 'text',
											marks: [{ type: 'styled', attrs: { class: '' } }]
										}
									]
								}
							]
						},
						component: 'text_module',
						text_level: 'paragraph',
						font_settings: [
							{
								_uid: 'f8479129-8401-4207-9841-c5cf9ee3077a',
								weight: 'light',
								alignment: '',
								component: 'font_settings',
								screen_size: ''
							}
						],
						module_settings: [],
						spacing_settings: [],
						coloring_settings: []
					},
					{
						_uid: '3bdfc8f2-65b4-40ed-b8c5-7574044c2396',
						icon: [
							{
								_uid: 'a62d380b-8a31-4fb6-a154-31c160b24dc1',
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
						text: 'Action',
						type: 'link',
						shape: 'square',
						shadow: '',
						variant: 'light',
						behavior: [
							{
								_uid: 'ea737e89-4e58-4f52-8fea-6dd5d6f481fe',
								link: {
									id: '',
									url: 'https://efacademy.com',
									linktype: 'url',
									fieldtype: 'multilink',
									cached_url: 'https://efacademy.com'
								},
								component: 'action_behavior_link_sub_module',
								carry_params: false,
								open_external: false,
								campus_parameter: ''
							}
						],
						component: 'action_module',
						justify_content: 'start',
						module_settings: [],
						spacing_settings: []
					}
				],
				type: 'flat',
				action: [],
				component: 'surface_module',
				fill_parent: false,
				body_settings: [],
				border_radius: '',
				border_settings: [],
				module_settings: [
					{
						_uid: '9a0b2cb1-e4b7-431b-ba77-9b95329c31f3',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '',
						column_span: '4',
						screen_size: '',
						column_start: ''
					},
					{
						_uid: '3353a9f1-cf52-4260-88a9-c1878a35c4c7',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '7',
						column_span: '',
						screen_size: 'md',
						column_start: '1'
					},
					{
						_uid: 'a6a79015-46e4-4a60-a1d4-f70aaf44a797',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '5',
						column_span: '',
						screen_size: 'lg',
						column_start: '1'
					}
				],
				spacing_settings: [
					{
						_uid: '47d582a8-8a25-4b26-a981-c0f78bce52f8',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: '',
						margin_value: '6',
						padding_type: 'r',
						padding_value: '6',
						margin_negative: false
					},
					{
						_uid: 'cecc1bc6-630a-42db-ac6c-5d3d1355fcf8',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: 'md',
						margin_value: '0',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					},
					{
						_uid: 'b55bdae7-62bb-433c-92d4-3cb31ce2ab80',
						component: 'spacing_component_settings',
						margin_type: '',
						screen_size: 'lg',
						margin_value: '',
						padding_type: 'r',
						padding_value: '0',
						margin_negative: false
					}
				],
				coloring_settings: [],
				background_settings: []
			},
			{
				_uid: '8e823dc1-3082-4858-a503-3fe29674923f',
				loop: false,
				controls: false,
				gradient: [],
				auto_play: false,
				component: 'video_module',
				thumbnail: {
					_uid: '450c8c86-fc33-49cb-8a9e-a217a7f56985',
					image:
						'https://a.storyblok.com/f/67719/960x540/ce1d139fd0/960x540.png',
					plugin: 'advanced-image',
					alt_tag: '',
					caption: '',
					copyright_info: ''
				},
				video_url:
					'https://www.youtube.com/watch?v=-3T78fc65vE&feature=youtu.be',
				video_file: '',
				mobile_file: '',
				module_settings: [
					{
						_uid: 'a5ea095d-838c-44ea-b655-1a8f4457d2e5',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '',
						column_span: '4',
						screen_size: '',
						column_start: ''
					},
					{
						_uid: '87d5266d-399f-48d0-99f9-7f0630a9ce45',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '-7',
						column_span: '',
						screen_size: 'md',
						column_start: '-1'
					},
					{
						_uid: '296b54ac-e3f9-4be0-b960-0558bc1cd2a6',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '-8',
						column_span: '',
						screen_size: 'lg',
						column_start: '-1'
					}
				],
				spacing_settings: [],
				aspect_ratio_settings: []
			}
		],
		name: 'Teaser - Text+Video',
		component: 'grid_section',
		anchor_slug: '',
		body_settings: [],
		spacing_settings: [
			{
				_uid: '78b59bba-9250-4fc5-8e8c-fb1c5b9c6a0a',
				component: 'spacing_layout_settings',
				padding_type: 'y',
				padding_value: 'l'
			}
		],
		coloring_settings: [],
		background_settings: []
	},
	component_id: 723378,
	image: '',
	component_name: 'grid_section'
};
