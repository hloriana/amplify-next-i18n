/* eslint-disable no-nested-ternary */
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState
} from 'react';
import SbEditable from 'storyblok-react';

import { v4 as uuidv4 } from 'uuid';
import StoryblokCarousel from './Carousel';

import { InfomeetingModule } from '~/storyblok/components/infomeeting-module/definition';
import EnvContext from '~/contexts/EnvContext';

import InfomeetingBurgundyPreset from '~/storyblok/presets/infomeeting---carousel---burgundy/preset.preset';
import InfomeetingPreset from '~/storyblok/presets/infomeeting---carousel/preset.preset';

import Components from '~/components';

const Infomeeting: FunctionComponent<{
	content: InfomeetingModule;
}> = (props: any) => {
	const { efMarketCode: marketCode, marketCode: langCode } = useContext(
		EnvContext
	);
	const { content } = props;

	// get the language fallback if it is a valid language
	const fallbackMarket = langCode?.replace('-', '_');

	const mc = content.marketCode ? content.marketCode : marketCode;

	const [infomeetings, setInfomeetings] = useState<[] | undefined>(undefined);

	const getLocation = (im: any) => {
		let location = '';
		if (im.city) {
			location += im.city;
		}

		if (im.country) {
			if (location !== '') {
				location += ', ';
			}

			location += im.country;
		}

		return location;
	};

	const getLangCode = () => {
		if (langCode === '') {
			return '';
		}
		if (mc === 'we' || mc === 'ww') return '/en';

		return `/${langCode}`;
	};

	const getInfomeetings = (mounted: boolean) => {
		const path = process.env.INTEGRATION_API;

		if (!path) {
			return;
		}

		(async () => {
			try {
				const response = await fetch(
					`${path}?query={infomeetings(marketCode:"${mc}"){infoMeetingId,topic,meetingDate,shortDescription,city,country,meetingTypeCode,starttime,endtime,day,month,year}}`
				);
				const obj = await response.json();

				if (mounted) {
					setInfomeetings(obj.data.infomeetings);
				}
				
			} catch (error) {
				console.error(error);
			}
		})();
	};

	useEffect(() => {
		let mounted = true;

		if (!infomeetings) {
			getInfomeetings(mounted);
		}

		const nIntervId = setInterval(getInfomeetings, 360000);

		// Specify how to clean up after this effect:
		return function cleanup() {
			mounted = false;
			clearInterval(nIntervId);
		};
	}, [infomeetings]);

	const { preset } =
		content.marketCode === 'ww'
			? (InfomeetingBurgundyPreset as any)
			: (InfomeetingPreset as any);

	const consultationCard: any = {
		...preset.body[2],
		body: [
			{
				...preset.body[2].body[0],
				body: preset.body[2].body[0].body
					? [
							{
								...preset.body[2].body[0].body[0],
								title: preset.body[2].body[0].body[0][
									`title__i18n__${fallbackMarket}`
								] ?? preset.body[2].body[0].body[0].title
							},
							{
								...preset.body[2].body[0].body[1],
								text: preset.body[2].body[0].body[1][
									`text__i18n__${fallbackMarket}`
								] ?? preset.body[2].body[0].body[1].text,
									content: preset.body[2].body[0].body[1].text
							},
							{
								...preset.body[2].body[0].body[2],
								body: preset.body[2].body[0].body[2].body
									? [
											{
												...preset.body[2].body[0].body[2].body[0],
												text: [
													{
														...preset.body[2].body[0].body[2].body[0]
															.text[0],
														text: preset.body[2].body[0].body[2].body[0].text[0][
															`text__i18n__${fallbackMarket}`
														] ?? preset.body[2].body[0].body[2].body[0].text[0].text
													}
												]
											},
											{
												...preset.body[2].body[0].body[2].body[1],
												text: [
													{
														...preset.body[2].body[0].body[2].body[1]
															.text[0],
														text: preset.body[2].body[0].body[2].body[1].text[0][
															`text__i18n__${fallbackMarket}`
														] ?? preset.body[2].body[0].body[2].body[1].text[0].text
													}
												]
											},
											{
												...preset.body[2].body[0].body[2].body[2],
												text: [
													{
														...preset.body[2].body[0].body[2].body[2]
															.text[0],
														text: preset.body[2].body[0].body[2].body[2].text[0][
															`text__i18n__${fallbackMarket}`
														] ?? preset.body[2].body[0].body[2].body[2].text[0].text
													}
												]
											}
									  ]
									: []
							}
					  ]
					: []
			},
			{
				...preset.body[2].body[1],
				body: [
					{
						...preset.body[2].body[1].body[0],
						text:
							preset.body[2].body[1].body[0][
								`text__i18n__${fallbackMarket}`
							] ?? preset.body[2].body[1].body[0].text
					},
					{ ...preset.body[2].body[1].body[1] }
				]
			}
		],
		action: [
			{
				...preset.body[2].action[0],
				action_behavior: [
					{
						...preset.body[2].action[0].action_behavior[0],
						link: {
							...preset.body[2].action[0].action_behavior[0].link,
							url: `${getLangCode()}/consultation/`,
							cached_url: `${getLangCode()}/consultation/`
						}
					}
				]
			}
		]

	}

	const carouselCards: any [] = content.marketCode === 'ww' ? [] : new Array(consultationCard);

	const carouselModuleFromPreset: any = {
		...preset,
		body: carouselCards.concat(
			infomeetings
			? infomeetings.map((im: any) => {
					return {
						...preset.body[0],
						_uid: uuidv4(),
						body: [
							{
								...preset.body[0].body[0],
								body: preset.body[0].body[0].body
									? [
											{
												...preset.body[0].body[0].body[0],
												title: im.topic
											},
											{
												...preset.body[0].body[0].body[1],
												text: {
													...preset.body[0].body[0].body[1].text,
													content: preset.body[0].body[0].body[1].text
														? [
																{
																	...preset.body[0].body[0].body[1].text
																		.content[0],
																	content: [
																		{
																			...preset.body[0].body[0].body[1].text
																				.content[0].content[0],
																			text: im.shortDescription
																		}
																	]
																}
														  ]
														: []
												}
											},
											{
												...preset.body[0].body[0].body[2],
												body: preset.body[0].body[0].body[2].body
													? [
															{
																...preset.body[0].body[0].body[2].body[0],
																icon: [
																	{
																		...preset.body[0].body[0].body[2].body[0]
																			.icon[0],
																		icon:
																			im.meetingTypeCode === 'ONM'
																				? 'icons:pointer'
																				: 'icons:location'
																	}
																],
																text: [
																	{
																		...preset.body[0].body[0].body[2].body[0]
																			.text[0],
																		text: {
																			...preset.body[0].body[0].body[2].body[0]
																				.text[0].text,
																			content: [
																				{
																					...preset.body[0].body[0].body[2]
																						.body[0].text[0].text.content[0],
																					content: [
																						{
																							...preset.body[0].body[0].body[2]
																								.body[0].text[0].text.content[0]
																								.content[0],
																							text:
																								im.meetingTypeCode === 'ONM'
																									? 'Online'
																									: getLocation(im) != ''
																									? getLocation(im)
																									: 'Offline'
																						}
																					]
																				}
																			]
																		}
																	}
																]
															},
															{
																...preset.body[0].body[0].body[2].body[1],
																text: [
																	{
																		...preset.body[0].body[0].body[2].body[1]
																			.text[0],
																		text: {
																			...preset.body[0].body[0].body[2].body[1]
																				.text[0].text,
																			content: [
																				{
																					...preset.body[0].body[0].body[2]
																						.body[1].text[0].text.content[0],
																					content: [
																						{
																							...preset.body[0].body[0].body[2]
																								.body[1].text[0].text.content[0]
																								.content[0],
																							text: `${im.day} ${im.month} ${im.year}`
																						}
																					]
																				}
																			]
																		}
																	}
																]
															},
															{
																...preset.body[0].body[0].body[2].body[2],
																text: [
																	{
																		...preset.body[0].body[0].body[2].body[2]
																			.text[0],
																		text: {
																			...preset.body[0].body[0].body[2].body[2]
																				.text[0].text,
																			content: [
																				{
																					...preset.body[0].body[0].body[2]
																						.body[2].text[0].text.content[0],
																					content: [
																						{
																							...preset.body[0].body[0].body[2]
																								.body[2].text[0].text.content[0]
																								.content[0],
																							text: `${im.starttime} - ${im.endtime}`
																						}
																					]
																				}
																			]
																		}
																	}
																]
															}
													  ]
													: []
											}
									  ]
									: []
							},
							{
								...preset.body[0].body[1],
								body: [
									{
										...preset.body[0].body[1].body[0],
										text:
											preset.body[0].body[1].body[0][
												`text__i18n__${fallbackMarket}`
											] ?? preset.body[0].body[1].body[0].text
									},
									{ ...preset.body[0].body[1].body[1] }
								]
							}
						],
						action: [
							{
								...preset.body[0].action[0],
								action_behavior: [
									{
										...preset.body[0].action[0].action_behavior[0],
										link: {
											...preset.body[0].action[0].action_behavior[0].link,
											url: `${getLangCode()}/infomeeting/sign-up/?id=${
												im.infoMeetingId
											}`,
											cached_url: `${getLangCode()}/infomeeting/sign-up/?id=${
												im.infoMeetingId
											}`
										}
									}
								]
							}
						]
					};
			  })
			: [])
	};

	const emptySection = content?.empty_body ? (
		content?.empty_body.map((blok: any) => Components(blok))
	) : (
		<></>
	);

	const getCarousel = () => {
		if (content.marketCode === 'ww' && infomeetings && infomeetings.length === 0) { 
				return emptySection;
		}

		return <StoryblokCarousel content={carouselModuleFromPreset} />
	}

	return (
		<SbEditable content={content}>
			{ getCarousel()}
		</SbEditable>
	);
};

export default Infomeeting;
