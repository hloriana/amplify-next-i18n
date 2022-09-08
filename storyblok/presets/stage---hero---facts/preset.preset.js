module.exports = {
	name: 'Stage - Hero + Facts',
	preset: {
		_uid: '6a796d26-02bb-4109-bd16-50d637c91eaf',
		body: [
			{
				_uid: '35e6c8a7-0bfc-4a7f-8116-ea1b396df7a3',
				body: [
					{
						_uid: 'f81b91e7-99d1-478d-9555-4898d1562432',
						name: '',
						action: [],
						graphic: {
							x: '-0.25',
							y: '0.02',
							src:
								'https://a.storyblok.com/f/67719/1280x720/49f18b28fe/1280x720.png',
							_uid: 'f6da782f-3982-41af-a2bc-b101986be420',
							plugin: 'ef-sbe-image-focus'
						},
						gradient: [
							{
								_uid: 'e3328a5b-0ec2-4274-86ed-fd62c3ade7f8',
								degrees: '180',
								opacity: '1',
								to_color: {
									_uid: 'e0cb10d8-7cb9-4e93-b52a-0aa2d5844943',
									color: '#191919',
									plugin: 'native-color-picker'
								},
								component: 'gradient_module',
								from_color: {
									_uid: '311255a7-b675-4d8f-b9c9-b1c41ab2ae0a',
									color: 'transparent',
									plugin: 'native-color-picker'
								},
								to_position: '100',
								from_position: '50'
							}
						],
						component: 'graphic_module',
						is_centered: false,
						border_radius: '',
						module_settings: [],
						sizing_settings: [
							{
								_uid: '833332d3-d7a5-42c0-9848-558ab4f045c6',
								width: '',
								height: '',
								component: 'sizing_preset_settings'
							}
						],
						spacing_settings: [
							{
								_uid: 'd641216c-1ddb-47a7-ba47-2b33024b5258',
								component: 'spacing_component_settings',
								margin_type: 'b',
								screen_size: '',
								margin_value: '40',
								padding_type: '',
								padding_value: '',
								margin_negative: false
							},
							{
								_uid: '25e2c9d0-9ca0-44e3-813d-9d6a39127732',
								component: 'spacing_component_settings',
								margin_type: 'b',
								screen_size: 'md',
								margin_value: '20',
								padding_type: '',
								padding_value: '',
								margin_negative: false
							}
						],
						aspect_ratio_settings: [
							{
								_uid: '3cf5a7e8-5927-4b24-af06-0bc366a210e0',
								ratio: '31/42',
								component: 'aspect_ratio_settings',
								screen_size: ''
							},
							{
								_uid: 'f18b3412-91bc-4518-9195-5e5bcf540ae2',
								ratio: '2/1',
								component: 'aspect_ratio_settings',
								screen_size: 'md'
							}
						]
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
						_uid: 'b97299a7-c309-488d-94b5-36512e89f5dd',
						align: '',
						justify: '',
						row_end: '4',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '1',
						column_end: '-1',
						column_span: '',
						screen_size: '',
						column_start: '1'
					},
					{
						_uid: 'd35ead3e-0ad5-43e8-bc8f-745b6d03c7c8',
						align: '',
						justify: '',
						row_end: '5',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '',
						column_span: '',
						screen_size: 'lg',
						column_start: ''
					}
				],
				spacing_settings: [],
				coloring_settings: [
					{
						_uid: 'e3be8d46-afbc-48c4-b437-dc92a2122898',
						component: 'coloring_settings',
						text_color: '',
						text_shade: ' ',
						screen_size: '',
						background_color: 'ink-black',
						background_shade: ' '
					}
				],
				background_settings: []
			},
			{
				_uid: '3e947689-3cca-45a4-9264-09c396a0a961',
				extra: '',
				title: 'Heading text that sometimes runs over a few lines',
				component: 'heading_module',
				extra_type: 'super',
				font_settings: [
					{
						_uid: '1e12fcfd-f653-4293-b954-12c6c18d9167',
						weight: '',
						alignment: '',
						component: 'font_settings',
						screen_size: ''
					}
				],
				heading_level: 'h1',
				module_settings: [
					{
						_uid: 'fbf82a08-8889-4328-8ce3-bba65eec1194',
						align: '',
						justify: '',
						row_end: '3',
						z_index: '10',
						component: 'module_grid_settings',
						row_start: '2',
						column_end: '-2',
						column_span: '',
						screen_size: '',
						column_start: '2'
					},
					{
						_uid: '257c3937-2811-4b0b-b28f-ec754fb18e71',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '12',
						column_span: '',
						screen_size: 'md',
						column_start: '2'
					},
					{
						_uid: 'bc3b3371-97ac-49d1-893b-4efa3bdc7eff',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '9',
						column_span: '',
						screen_size: 'lg',
						column_start: '2'
					}
				],
				spacing_settings: [
					{
						_uid: '851fdac7-1671-4740-be6b-ac8df370ff96',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: '',
						margin_value: '4',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					}
				],
				coloring_settings: [
					{
						_uid: '57f21291-a357-495d-8dc9-0af4bcfdd89a',
						component: 'coloring_settings',
						text_color: 'white',
						text_shade: ' ',
						screen_size: '',
						background_color: '',
						background_shade: ' '
					}
				]
			},
			{
				_uid: 'e1b981ee-d959-4587-83f9-1a6ae981fdc3',
				text: {
					type: 'doc',
					content: [
						{
							type: 'paragraph',
							content: [
								{
									text:
										'This sub-heading should not be too long, particularly for mobile view.',
									type: 'text'
								}
							]
						}
					]
				},
				component: 'text_module',
				text_level: 'paragraph',
				font_settings: [
					{
						_uid: '550eab2d-650e-430c-a1b6-778842223cdd',
						weight: 'light',
						alignment: '',
						component: 'font_settings',
						screen_size: ''
					}
				],
				module_settings: [
					{
						_uid: 'd81690cc-6fce-4e86-a718-1d8270b50b77',
						align: '',
						justify: '',
						row_end: '4',
						z_index: '10',
						component: 'module_grid_settings',
						row_start: '3',
						column_end: '-3',
						column_span: '',
						screen_size: '',
						column_start: '2'
					},
					{
						_uid: 'c90df4ec-8242-40c8-ae58-58e7370af21c',
						align: '',
						justify: '',
						row_end: '',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '',
						column_end: '11',
						column_span: '',
						screen_size: 'md',
						column_start: '2'
					}
				],
				spacing_settings: [
					{
						_uid: '8b253014-481e-41ba-a762-d72f884f0483',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: '',
						margin_value: '32',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					},
					{
						_uid: 'b46eefac-c69d-48a9-b0be-44435bbd34a7',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: 'md',
						margin_value: '24',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					},
					{
						_uid: '61c27dcf-13a2-48a2-9f04-36a729a8b0cf',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: 'lg',
						margin_value: '6',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					},
					{
						_uid: 'dacad43e-d29e-4d1d-af5f-9c65a2051cd1',
						component: 'spacing_component_settings',
						margin_type: 'b',
						screen_size: 'lg',
						margin_value: '16',
						padding_type: '',
						padding_value: '',
						margin_negative: false
					}
				],
				coloring_settings: [
					{
						_uid: '053a81d7-e0d5-4f17-aa4c-acb1747987dc',
						component: 'coloring_settings',
						text_color: 'white',
						text_shade: ' ',
						screen_size: '',
						background_color: '',
						background_shade: ' '
					}
				]
			},
			{
				_uid: '41f1652d-4fe6-43b6-a0f4-c2d1ed262584',
				body: [
					{
						_uid: 'f8f3955f-70aa-4f91-84a0-10f71b8dade0',
						body: [
							{
								_uid: '0c0ed420-da11-4faf-ba2b-7127aceb1ff4',
								body: [
									{
										_uid: '60ba7084-5c8a-47a1-b787-6d39ef7986d9',
										icon: 'icons:book',
										component: 'icon_module',
										border_radius: 'rounded-full',
										module_settings: [],
										sizing_settings: [],
										spacing_settings: [
											{
												_uid: '6c1b3fe7-8c5f-43ee-9955-53a3eb13c3ad',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: '',
												margin_value: '8',
												padding_type: '',
												padding_value: '4',
												margin_negative: false
											},
											{
												_uid: '018f8afd-470a-425b-b3fe-cbd047239a1d',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: 'md',
												margin_value: '4',
												padding_type: '',
												padding_value: '',
												margin_negative: false
											}
										],
										coloring_settings: [
											{
												_uid: '9552cc51-e8d2-4dca-91a2-5c02abbb2ecc',
												component: 'coloring_settings',
												text_color: 'burgundy',
												text_shade: ' ',
												screen_size: '',
												background_color: 'white',
												background_shade: ' '
											}
										],
										transform_settings: []
									},
									{
										_uid: '07d57356-2c88-4f76-89aa-faa033ebbb36',
										text: {
											_uid: 'a2b344fd-d05f-4106-8527-07938c4c0fd5',
											type: 'doc',
											content: [
												{
													_uid: '69d2dbe2-ca62-4141-9907-7168d274b33e',
													type: 'paragraph',
													content: [
														{
															_uid: 'e13d4a2c-ac3a-4412-8283-1fc980fbce16',
															text: 'Private International',
															type: 'text'
														}
													]
												},
												{
													_uid: '5cd4fc0a-1f6f-4513-8810-2801c865b988',
													type: 'paragraph',
													content: [
														{
															_uid: '23f3f06d-e1c2-49a7-9873-0dd5bc22ca1e',
															text: 'high school',
															type: 'text'
														}
													]
												}
											]
										},
										component: 'text_module',
										text_level: 'ui-label',
										font_settings: [
											{
												_uid: '9d8d88c7-c3a8-4b8a-b5ac-bea8c396e477',
												weight: 'bold',
												alignment: '',
												component: 'font_settings',
												screen_size: ''
											}
										],
										module_settings: [],
										spacing_settings: [],
										coloring_settings: []
									}
								],
								type: 'flat',
								component: 'surface_module',
								body_settings: [
									{
										_uid: 'ca5fa93b-2d86-4602-9fa1-a941937748c0',
										align: 'center',
										justify: '',
										component: 'body_flex_settings',
										direction: 'row',
										screen_size: ''
									}
								],
								border_radius: '',
								module_settings: [
									{
										_uid: 'fea1a6b2-6baa-4c80-8c72-b8653594e698',
										component: 'module_flex_settings',
										flex_grow: '',
										equal_width: true,
										flex_shrink: '',
										screen_size: ''
									}
								],
								spacing_settings: [
									{
										_uid: '6df41689-1532-462b-bd7d-f667e2c33054',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: '',
										margin_value: '10',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									},
									{
										_uid: '8605ba9f-1f06-4b5b-8e5b-06f116385cfa',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: 'md',
										margin_value: '0',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									}
								],
								coloring_settings: [],
								background_settings: []
							},
							{
								_uid: '92c8e0a9-9c13-49b1-959f-2b5ae1ee9c79',
								body: [
									{
										_uid: 'f56f4b56-0456-4e6a-85d8-53731c057f7c',
										icon: 'icons:accommodation',
										component: 'icon_module',
										border_radius: 'rounded-full',
										module_settings: [],
										sizing_settings: [],
										spacing_settings: [
											{
												_uid: '7c862add-5229-4d18-9b95-76a70f5c7bd3',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: '',
												margin_value: '8',
												padding_type: '',
												padding_value: '4',
												margin_negative: false
											},
											{
												_uid: '324b5ad4-6791-4f6c-81e3-a46a3652a945',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: 'md',
												margin_value: '4',
												padding_type: '',
												padding_value: '',
												margin_negative: false
											}
										],
										coloring_settings: [
											{
												_uid: 'b1c251a0-a1fd-4376-b293-b9163d47d05f',
												component: 'coloring_settings',
												text_color: 'burgundy',
												text_shade: ' ',
												screen_size: '',
												background_color: 'white',
												background_shade: ' '
											}
										],
										transform_settings: []
									},
									{
										_uid: '606353db-60ca-4425-8e19-51ff01df1c19',
										text: {
											_uid: '0f3adb28-314d-44c8-98f2-7006fa51edb0',
											type: 'doc',
											content: [
												{
													_uid: '08f5196b-9d36-461d-ab31-1271f967caf6',
													type: 'paragraph',
													content: [
														{
															_uid: '6ff7b414-a9af-4a60-8741-0f2c40400859',
															text: 'Live on campus',
															type: 'text'
														}
													]
												},
												{
													_uid: '4302c4ae-7411-4f9f-a66f-4a8a7c28c79b',
													type: 'paragraph',
													content: [
														{
															_uid: '1a650f9c-befe-4c31-9909-48bc3e066476',
															text: 'with friends',
															type: 'text'
														}
													]
												}
											]
										},
										component: 'text_module',
										text_level: 'ui-label',
										font_settings: [
											{
												_uid: 'c6c9adae-204c-497c-80ba-220630d156c2',
												weight: 'bold',
												alignment: '',
												component: 'font_settings',
												screen_size: ''
											}
										],
										module_settings: [],
										spacing_settings: [],
										coloring_settings: []
									}
								],
								type: 'flat',
								component: 'surface_module',
								body_settings: [
									{
										_uid: '094127e0-70c5-4c3c-8c70-95b0d818e627',
										align: 'center',
										justify: '',
										component: 'body_flex_settings',
										direction: 'row',
										screen_size: ''
									}
								],
								border_radius: '',
								module_settings: [
									{
										_uid: 'd29b3acc-5577-4db6-920a-fe4e12fccb17',
										component: 'module_flex_settings',
										flex_grow: '',
										equal_width: true,
										flex_shrink: '',
										screen_size: ''
									}
								],
								spacing_settings: [
									{
										_uid: '19b2653c-00ad-4249-85e8-f45c16801e96',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: '',
										margin_value: '10',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									},
									{
										_uid: '0c7e6f5d-e7c5-409a-b082-a1aa00493cab',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: 'md',
										margin_value: '0',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									}
								],
								coloring_settings: [],
								background_settings: []
							},
							{
								_uid: '240351bb-c95e-4465-aacd-abdb97abeff1',
								body: [
									{
										_uid: 'a3e2419b-4bc8-4443-9ca5-8c4f3337f1a0',
										icon: 'icons:level',
										component: 'icon_module',
										border_radius: 'rounded-full',
										module_settings: [],
										sizing_settings: [],
										spacing_settings: [
											{
												_uid: '702a9907-132c-4b77-9324-5d101d367a66',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: '',
												margin_value: '8',
												padding_type: '',
												padding_value: '4',
												margin_negative: false
											},
											{
												_uid: '5aeaabab-777c-4f73-8569-cc6e1f89be41',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: 'md',
												margin_value: '4',
												padding_type: '',
												padding_value: '',
												margin_negative: false
											}
										],
										coloring_settings: [
											{
												_uid: '2c99f31c-7cce-480a-b88a-5c10c411d253',
												component: 'coloring_settings',
												text_color: 'burgundy',
												text_shade: ' ',
												screen_size: '',
												background_color: 'white',
												background_shade: ' '
											}
										],
										transform_settings: []
									},
									{
										_uid: '7e0f4a23-b16a-4f1a-bd0f-1ac90cb20691',
										body: [
											{
												_uid: 'e2109626-a642-474c-9215-b78e48a817a0',
												text: {
													_uid: '6057a742-c844-4e0e-ab13-a68445218e58',
													type: 'doc',
													content: [
														{
															_uid: 'bf8fcbaf-4da9-4ab2-9b8f-6141afa98f4d',
															type: 'paragraph',
															content: [
																{
																	_uid: '507fd4c4-c822-4b6c-bf01-aba51e4cb93e',
																	text: 'Ages 13 - 19',
																	type: 'text'
																}
															]
														}
													]
												},
												component: 'text_module',
												text_level: 'ui-label',
												font_settings: [
													{
														_uid: '2bacc4b2-e5f2-4cc5-8314-935a375de256',
														weight: 'bold',
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
												_uid: 'e165b6db-c480-45ec-aade-27b2e5f73160',
												text: {
													_uid: 'b641443a-8bd7-48f3-a4ef-c6a3885eeabd',
													type: 'doc',
													content: [
														{
															_uid: '519bb035-b065-49ab-82e8-698ff4391a4d',
															type: 'paragraph',
															content: [
																{
																	_uid: 'b78d4bb2-ee68-4163-83ff-fe52c7084830',
																	text: 'Grades 9 -12',
																	type: 'text'
																}
															]
														}
													]
												},
												component: 'text_module',
												text_level: 'ui-label',
												font_settings: [
													{
														_uid: 'd3e6d290-33bc-41cc-9539-6ae987380152',
														weight: 'book',
														alignment: '',
														component: 'font_settings',
														screen_size: ''
													}
												],
												module_settings: [],
												spacing_settings: [],
												coloring_settings: []
											}
										],
										type: 'flat',
										component: 'surface_module',
										body_settings: [
											{
												_uid: 'e5fe992d-f742-44e4-b4fd-dc13c8d3db04',
												align: '',
												justify: '',
												component: 'body_flex_settings',
												direction: 'col',
												screen_size: ''
											}
										],
										border_radius: '',
										module_settings: [],
										spacing_settings: [],
										coloring_settings: [],
										background_settings: []
									}
								],
								type: 'flat',
								component: 'surface_module',
								body_settings: [
									{
										_uid: '38c36770-789c-4227-bd08-9ccf187cb3bf',
										align: 'center',
										justify: '',
										component: 'body_flex_settings',
										direction: 'row',
										screen_size: ''
									}
								],
								border_radius: '',
								module_settings: [
									{
										_uid: '1669506e-50c2-49c5-ae05-8bc0ca6b5d78',
										component: 'module_flex_settings',
										flex_grow: '',
										equal_width: true,
										flex_shrink: '',
										screen_size: ''
									}
								],
								spacing_settings: [
									{
										_uid: '28363cbc-cf29-4f1f-875f-fcfdd9a44c84',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: '',
										margin_value: '10',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									},
									{
										_uid: 'ec7ffa0c-bc2f-4178-875d-60444ef16f52',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: 'md',
										margin_value: '0',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									}
								],
								coloring_settings: [],
								background_settings: []
							}
						],
						type: 'flat',
						action: [],
						component: 'surface_module',
						fill_parent: false,
						body_settings: [
							{
								_uid: '2a287de6-2461-40f4-a96c-0cc365efc17c',
								align: '',
								justify: '',
								component: 'body_flex_settings',
								direction: 'col',
								screen_size: ''
							},
							{
								_uid: '5635a6dd-925b-4d50-ac58-f3826ce28d45',
								align: '',
								justify: '',
								component: 'body_flex_settings',
								direction: 'row',
								screen_size: 'md'
							}
						],
						border_radius: '',
						border_settings: [],
						module_settings: [],
						spacing_settings: [
							{
								_uid: '46ca92aa-10a0-48d1-afb3-886f5f92e806',
								component: 'spacing_component_settings',
								margin_type: '',
								screen_size: 'md',
								margin_value: '',
								padding_type: 'b',
								padding_value: '12',
								margin_negative: false
							}
						],
						coloring_settings: [],
						background_settings: []
					},
					{
						_uid: '65c037c9-6c35-493e-a74f-e4ce40b55e9c',
						body: [
							{
								_uid: 'f2aa9712-187b-47fd-8086-38ff20b1c554',
								body: [
									{
										_uid: '1797ffb6-75a0-43bc-9f5e-002f1556d055',
										icon: 'icons:train',
										component: 'icon_module',
										border_radius: 'rounded-full',
										module_settings: [],
										sizing_settings: [],
										spacing_settings: [
											{
												_uid: '2935b7ef-5bed-421c-825d-b72f25bfe8ba',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: '',
												margin_value: '8',
												padding_type: '',
												padding_value: '4',
												margin_negative: false
											},
											{
												_uid: 'b6cb5f7f-99e1-4dbb-ad81-3cec6cd74f1f',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: 'md',
												margin_value: '4',
												padding_type: '',
												padding_value: '',
												margin_negative: false
											}
										],
										coloring_settings: [
											{
												_uid: 'd192759c-d31c-4a26-a51f-19c6d140c8f7',
												component: 'coloring_settings',
												text_color: 'burgundy',
												text_shade: ' ',
												screen_size: '',
												background_color: 'white',
												background_shade: ' '
											}
										],
										transform_settings: []
									},
									{
										_uid: '1f01f3a3-4230-49c1-99c9-3ac4d8478590',
										text: {
											_uid: '863b78ae-8400-4060-b8bb-f6ade6f6bc72',
											type: 'doc',
											content: [
												{
													_uid: '120a8c09-04c5-4d72-8310-2a516cff9d8c',
													type: 'paragraph',
													content: [
														{
															_uid: '7f19f38d-d5cd-407d-b545-352a391d1b3c',
															text: '45 minutes ',
															type: 'text'
														}
													]
												},
												{
													_uid: 'e6bd2d1b-ebf0-4114-9f75-0cdf544b641f',
													type: 'paragraph',
													content: [
														{
															_uid: 'd417a253-f911-441a-89bc-a90cc6a6a2b9',
															text: 'from New York City',
															type: 'text'
														}
													]
												}
											]
										},
										component: 'text_module',
										text_level: 'ui-label',
										font_settings: [
											{
												_uid: 'a0d12e80-d70c-4f07-9bac-3108ee73f09c',
												weight: 'bold',
												alignment: '',
												component: 'font_settings',
												screen_size: ''
											}
										],
										module_settings: [],
										spacing_settings: [],
										coloring_settings: []
									}
								],
								type: 'flat',
								component: 'surface_module',
								body_settings: [
									{
										_uid: '72226031-4f3a-43e4-bc73-d5a09d498af1',
										align: 'center',
										justify: '',
										component: 'body_flex_settings',
										direction: 'row',
										screen_size: ''
									}
								],
								border_radius: '',
								module_settings: [
									{
										_uid: '507f7b53-6cfd-4dc8-b0ad-f1223fb5ed2a',
										component: 'module_flex_settings',
										flex_grow: '',
										equal_width: true,
										flex_shrink: '',
										screen_size: ''
									}
								],
								spacing_settings: [
									{
										_uid: 'dac769af-65d7-4fee-978b-c13d4a796576',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: '',
										margin_value: '10',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									},
									{
										_uid: 'b95c9984-e5f0-4c53-807f-04f962babc82',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: 'md',
										margin_value: '0',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									}
								],
								coloring_settings: [],
								background_settings: []
							},
							{
								_uid: '6e2c4f6a-11de-44a3-b60f-f3dc917c1948',
								body: [
									{
										_uid: 'b578c44c-150b-42d4-8727-b2a6ec88e1bf',
										icon: 'icons:academic-material',
										component: 'icon_module',
										border_radius: 'rounded-full',
										module_settings: [],
										sizing_settings: [],
										spacing_settings: [
											{
												_uid: 'd7bb0def-0ead-4323-95ee-4cf8483e2ec9',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: '',
												margin_value: '8',
												padding_type: '',
												padding_value: '4',
												margin_negative: false
											},
											{
												_uid: '69708c40-9a81-4ce6-8a8c-92636b46ea71',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: 'md',
												margin_value: '4',
												padding_type: '',
												padding_value: '',
												margin_negative: false
											}
										],
										coloring_settings: [
											{
												_uid: '080c9d3b-74ee-44f9-8532-e85cd9d0e550',
												component: 'coloring_settings',
												text_color: 'burgundy',
												text_shade: ' ',
												screen_size: '',
												background_color: 'white',
												background_shade: ' '
											}
										],
										transform_settings: []
									},
									{
										_uid: 'e3e52a45-eb03-4819-acf7-3ba8934a78c7',
										text: {
											_uid: 'd1b9a5e7-8cdc-49d0-8659-3a1ff41b5086',
											type: 'doc',
											content: [
												{
													_uid: 'f66a255d-e381-4679-9b21-d6a01057528a',
													type: 'paragraph',
													content: [
														{
															_uid: '05d49c90-3dbc-460e-a0e9-63eacd7f1539',
															text: 'IB Diploma',
															type: 'text'
														}
													]
												},
												{
													_uid: '76e30953-4eb9-467e-9acb-8c12283de103',
													type: 'paragraph',
													content: [
														{
															_uid: 'e85e4f7b-252b-4889-a11a-469e7819e8aa',
															text: 'US High School Diploma',
															type: 'text'
														}
													]
												}
											]
										},
										component: 'text_module',
										text_level: 'ui-label',
										font_settings: [
											{
												_uid: 'ade6e74b-67d6-4d1b-8e1e-e283ee43e8a7',
												weight: 'bold',
												alignment: '',
												component: 'font_settings',
												screen_size: ''
											}
										],
										module_settings: [],
										spacing_settings: [],
										coloring_settings: []
									}
								],
								type: 'flat',
								component: 'surface_module',
								body_settings: [
									{
										_uid: '22720a10-a6ad-48c1-b75d-fcc619b7397b',
										align: 'center',
										justify: '',
										component: 'body_flex_settings',
										direction: 'row',
										screen_size: ''
									}
								],
								border_radius: '',
								module_settings: [
									{
										_uid: '0a9ea27b-4ec0-4501-94af-2866a307908f',
										component: 'module_flex_settings',
										flex_grow: '',
										equal_width: true,
										flex_shrink: '',
										screen_size: ''
									}
								],
								spacing_settings: [
									{
										_uid: 'c160d972-a8db-4e32-b359-79b8e3e960a3',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: '',
										margin_value: '10',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									},
									{
										_uid: '6459a133-72ff-4f50-bd97-4c23cd028c09',
										component: 'spacing_component_settings',
										margin_type: 'b',
										screen_size: 'md',
										margin_value: '0',
										padding_type: '',
										padding_value: '',
										margin_negative: false
									}
								],
								coloring_settings: [],
								background_settings: []
							},
							{
								_uid: '339ec84e-649e-4b4d-8a0b-5039f70f4e2e',
								body: [
									{
										_uid: '96ccc924-1805-483a-8e86-69a142d0f037',
										icon: 'icons:people',
										component: 'icon_module',
										border_radius: 'rounded-full',
										module_settings: [],
										sizing_settings: [],
										spacing_settings: [
											{
												_uid: '7cdddbb2-16be-4ad5-9c87-b50b38e61eb0',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: '',
												margin_value: '8',
												padding_type: '',
												padding_value: '4',
												margin_negative: false
											},
											{
												_uid: 'f39305fc-588b-4196-9222-d28a19e7f9e5',
												component: 'spacing_component_settings',
												margin_type: 'r',
												screen_size: 'md',
												margin_value: '4',
												padding_type: '',
												padding_value: '',
												margin_negative: false
											}
										],
										coloring_settings: [
											{
												_uid: 'c9cf6195-f27b-4902-9ce5-382872566238',
												component: 'coloring_settings',
												text_color: 'burgundy',
												text_shade: ' ',
												screen_size: '',
												background_color: 'white',
												background_shade: ' '
											}
										],
										transform_settings: []
									},
									{
										_uid: '1fc6df93-c2ee-445f-b53c-dae8a03a3fee',
										body: [
											{
												_uid: '66b3113d-ba3f-4314-b9db-5002b9e8454f',
												text: {
													_uid: '245922b6-18be-4030-85bd-9f6b3a105715',
													type: 'doc',
													content: [
														{
															_uid: 'aa3930a8-bbf2-451b-8aee-763c9cad2d24',
															type: 'paragraph',
															content: [
																{
																	_uid: 'd267de23-478f-47ff-8bf3-b75a87a292d1',
																	text: '650 Students',
																	type: 'text'
																}
															]
														}
													]
												},
												component: 'text_module',
												text_level: 'ui-label',
												font_settings: [
													{
														_uid: '93af282a-a39c-4b03-ac72-b5b2afb2fbbd',
														weight: 'bold',
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
												_uid: '198eceb9-ae82-42a0-a98e-43ffdc94d117',
												text: {
													_uid: '7b35ebb1-32c2-43a5-af6f-72e631296b22',
													type: 'doc',
													content: [
														{
															_uid: 'f98d5aa2-7311-4302-84ad-886c96e5c7d1',
															type: 'paragraph',
															content: [
																{
																	_uid: 'c8e99038-315a-4c51-8950-be79ca6366f7',
																	text: '150 Staff',
																	type: 'text'
																}
															]
														}
													]
												},
												component: 'text_module',
												text_level: 'ui-label',
												font_settings: [
													{
														_uid: 'f0575a7e-6b09-42cb-a303-fb7a8d100433',
														weight: 'book',
														alignment: '',
														component: 'font_settings',
														screen_size: ''
													}
												],
												module_settings: [],
												spacing_settings: [],
												coloring_settings: []
											}
										],
										type: 'flat',
										component: 'surface_module',
										body_settings: [
											{
												_uid: 'fcaad8ff-1aa0-408f-8bdb-c180c7ecf8c9',
												align: '',
												justify: '',
												component: 'body_flex_settings',
												direction: 'col',
												screen_size: ''
											}
										],
										border_radius: '',
										module_settings: [],
										spacing_settings: [],
										coloring_settings: [],
										background_settings: []
									}
								],
								type: 'flat',
								action: [],
								component: 'surface_module',
								fill_parent: false,
								body_settings: [
									{
										_uid: 'd82fbaab-69b6-4d5a-bfe6-881a8eab25b0',
										align: 'center',
										justify: '',
										component: 'body_flex_settings',
										direction: 'row',
										screen_size: ''
									}
								],
								border_radius: '',
								border_settings: [],
								module_settings: [
									{
										_uid: '4e891c99-451c-45a1-a224-b5191aa77460',
										component: 'module_flex_settings',
										flex_grow: '',
										equal_width: true,
										flex_shrink: '',
										screen_size: ''
									}
								],
								spacing_settings: [],
								coloring_settings: [],
								background_settings: []
							}
						],
						type: 'flat',
						component: 'surface_module',
						body_settings: [
							{
								_uid: '5ad0667e-7fb9-436c-b490-23c419eb3f14',
								align: '',
								justify: '',
								component: 'body_flex_settings',
								direction: 'col',
								screen_size: ''
							},
							{
								_uid: '5be17907-0b44-45de-be6d-953b723a1c85',
								align: '',
								justify: '',
								component: 'body_flex_settings',
								direction: 'row',
								screen_size: 'md'
							}
						],
						border_radius: '',
						module_settings: [],
						spacing_settings: [],
						coloring_settings: [],
						background_settings: []
					}
				],
				type: 'flat',
				action: [],
				component: 'surface_module',
				fill_parent: false,
				body_settings: [],
				border_radius: 'rounded',
				border_settings: [],
				module_settings: [
					{
						_uid: '1d712b99-03de-4ba1-ac7f-6ecdd9f0189e',
						align: '',
						justify: '',
						row_end: '5',
						z_index: '10',
						component: 'module_grid_settings',
						row_start: '4',
						column_end: '-1',
						column_span: '',
						screen_size: '',
						column_start: '1'
					},
					{
						_uid: '0c047251-62a7-4260-8389-a359c1517a9a',
						align: '',
						justify: '',
						row_end: '6',
						z_index: '',
						component: 'module_grid_settings',
						row_start: '4',
						column_end: '-2',
						column_span: '',
						screen_size: 'md',
						column_start: '2'
					}
				],
				spacing_settings: [
					{
						_uid: 'ebf76f67-684c-486d-9d40-188ed5a98e76',
						component: 'spacing_component_settings',
						margin_type: 'x',
						screen_size: '',
						margin_value: '2',
						padding_type: 'y',
						padding_value: '16',
						margin_negative: false
					},
					{
						_uid: '44b746c6-4bd9-469f-98c4-0f4b6e57a795',
						component: 'spacing_component_settings',
						margin_type: 't',
						screen_size: '',
						margin_value: '24',
						padding_type: '',
						padding_value: '',
						margin_negative: true
					},
					{
						_uid: '49a78776-195a-4c1a-80ee-b9192f131d73',
						component: 'spacing_component_settings',
						margin_type: '',
						screen_size: '',
						margin_value: '',
						padding_type: 'x',
						padding_value: '8',
						margin_negative: false
					},
					{
						_uid: '8fadec5e-363b-4f68-ba96-4c774f2decdf',
						component: 'spacing_component_settings',
						margin_type: 'x',
						screen_size: 'md',
						margin_value: '0',
						padding_type: 'x',
						padding_value: '8',
						margin_negative: false
					},
					{
						_uid: '27b84243-ec96-40cb-be56-f20e780d0549',
						component: 'spacing_component_settings',
						margin_type: 't',
						screen_size: 'md',
						margin_value: '12',
						padding_type: 'y',
						padding_value: '12',
						margin_negative: true
					},
					{
						_uid: 'a18df985-d113-4d61-be93-d1bb32a01deb',
						component: 'spacing_component_settings',
						margin_type: 't',
						screen_size: 'lg',
						margin_value: '0',
						padding_type: '',
						padding_value: '16',
						margin_negative: false
					}
				],
				coloring_settings: [
					{
						_uid: 'df8cc3f0-433d-4382-9719-85216c838ced',
						component: 'coloring_settings',
						text_color: 'white',
						text_shade: ' ',
						screen_size: '',
						background_color: '',
						background_shade: ' '
					}
				],
				background_settings: [
					{
						_uid: '43dbbb58-cb2f-4627-b132-be12be333dee',
						component: 'background_settings',
						background: [
							{
								_uid: 'be671bc3-1b16-4d0d-9759-790a346d0407',
								degrees: '45',
								opacity: '1',
								to_color: {
									_uid: '25c09151-0d80-4ebb-853f-d2d1c92f6006',
									color: '#7f182c',
									plugin: 'native-color-picker'
								},
								component: 'gradient_module',
								from_color: {
									_uid: 'f9a70a13-7e78-450c-a01d-2e248760eb3e',
									color: '#660013',
									plugin: 'native-color-picker'
								},
								to_position: '100',
								from_position: '0'
							}
						],
						size_settings: [],
						position_settings: [],
						transform_settings: []
					}
				]
			}
		],
		name: '',
		component: 'grid_section',
		anchor_slug: '',
		body_settings: [
			{
				_uid: 'e6d8c1d4-d7ff-48b7-b8ae-99fc4893b34c',
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
