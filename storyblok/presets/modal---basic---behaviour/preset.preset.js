module.exports = {
	name: 'Modal - Basic - Behaviour',
	preset: {
		_uid: '5f6c3ce1-408c-47be-8c6e-930d89875f17',
		body: [
			{
				_uid: 'd0216907-00f5-4a4e-9223-b0ffaf63a701',
				body: [
					{
						_uid: '95dde27b-fdd5-4175-8106-d16bac1325fb',
						extra: '',
						title: 'Where does it come from?',
						component: 'heading_module',
						extra_type: 'super',
						font_settings: [],
						heading_level: 'h3',
						module_settings: [],
						spacing_settings: [
							{
								_uid: '35fe1bbf-103b-44dc-aefa-5a98221fbc9e',
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
						_uid: 'eb7d9d7d-ed6f-4ca0-bb82-c19bc54b7568',
						text: {
							type: 'doc',
							content: [
								{
									type: 'paragraph',
									content: [
										{
											text:
												'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
											type: 'text'
										}
									]
								},
								{
									type: 'paragraph',
									content: [
										{
											text:
												'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
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
								_uid: '6829a111-c35d-4bd9-9baa-2f3ac7f6905a',
								size: '',
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
						_uid: '7398aee6-737d-46fd-b25b-21c0c8033e59',
						text: {
							type: 'doc',
							content: [
								{
									type: 'paragraph',
									content: [{ text: 'Firstname Lastname', type: 'text' }]
								}
							]
						},
						component: 'text_module',
						text_level: 'paragraph',
						font_settings: [
							{
								_uid: '505cb1c6-5321-42f6-91f5-e53a299b7d31',
								size: '',
								weight: 'bold',
								alignment: '',
								component: 'font_settings',
								screen_size: ''
							}
						],
						module_settings: [],
						spacing_settings: [
							{
								_uid: '99893789-755d-4534-9ee9-c118eaad9112',
								component: 'spacing_component_settings',
								margin_type: '',
								screen_size: '',
								margin_value: '',
								padding_type: 't',
								padding_value: '8',
								margin_negative: false
							}
						],
						coloring_settings: []
					},
					{
						_uid: '3c00a974-69b9-4b38-802a-9ce44007a01d',
						text: {
							type: 'doc',
							content: [
								{
									type: 'paragraph',
									content: [{ text: 'Job title, EF Academy', type: 'text' }]
								}
							]
						},
						component: 'text_module',
						text_level: 'ui-label',
						font_settings: [
							{
								_uid: '6c7c424a-a989-4d62-b852-038fa9b94f04',
								size: '',
								weight: '',
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
				action: [],
				component: 'surface_module',
				fill_parent: true,
				body_settings: [],
				border_radius: '',
				border_settings: [],
				module_settings: [
					{
						_uid: 'e61229d0-6e75-4d5c-801a-a0c254b31216',
						component: 'module_flex_settings',
						flex_grow: '',
						equal_width: true,
						flex_shrink: '',
						screen_size: '',
						scroll_container: false
					}
				],
				spacing_settings: [],
				coloring_settings: [],
				background_settings: []
			}
		],
		variant: 'dark',
		component: 'action_behavior_modal_sub_module',
		body_settings: [
			{
				_uid: '4736b43f-8914-4ea2-aa66-82780ff63611',
				wrap: false,
				align: '',
				justify: '',
				component: 'body_flex_settings',
				direction: 'col',
				screen_size: ''
			},
			{
				_uid: '4a57b944-d35d-4c67-9e07-1fac63d525e4',
				wrap: false,
				align: 'stretch',
				justify: '',
				component: 'body_flex_settings',
				direction: 'row',
				screen_size: 'md'
			}
		],
		border_radius: 'rounded',
		hide_overflow: false,
		spacing_settings: [
			{
				_uid: 'd13ad868-7daa-44cf-a37e-2f6f46d86f10',
				component: 'spacing_component_settings',
				margin_type: '',
				screen_size: '',
				margin_value: '',
				padding_type: 'y',
				padding_value: '16',
				margin_negative: false
			},
			{
				_uid: '1174d333-1771-459e-b0b4-401d6fc13f53',
				component: 'spacing_component_settings',
				margin_type: '',
				screen_size: '',
				margin_value: '',
				padding_type: 'x',
				padding_value: '6',
				margin_negative: false
			},
			{
				_uid: '0da08f95-e823-4c55-8cd9-d6a31714e7a3',
				component: 'spacing_component_settings',
				margin_type: '',
				screen_size: 'md',
				margin_value: '',
				padding_type: 'x',
				padding_value: '16',
				margin_negative: false
			}
		],
		coloring_settings: []
	},
	component_id: 723353,
	image: '',
	component_name: 'action_behavior_modal_sub_module'
};
