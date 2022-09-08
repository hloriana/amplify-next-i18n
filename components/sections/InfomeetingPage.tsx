/* eslint-disable react/react-in-jsx-scope */

import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import React, {
	useEffect,
	useContext,
	useState,
	FunctionComponent
} from 'react';

import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { css, cx } from 'linaria';
import Error from 'next/error';
import Grid from './Grid';

import EnvContext from '~/contexts/EnvContext';
import Error404Preset from '~/storyblok/presets/error---404---events/preset.preset';
import InfomeetingPagePreset from '~/storyblok/presets/infomeeting-page/preset.preset';


const InfomeetingPage: FunctionComponent = () => {
	const router: NextRouter = useRouter();
	
	const infomeetingid = router.asPath.match(/.+\?id=([^&]*)/)?.[1];
	const { efMarketCode: marketCode, marketCode: langCode } = useContext(
		EnvContext
	);

	const fallbackMarket = langCode?.replace('-', '_');

	const [infomeeting, setInfomeeting] = useState<any>(undefined);
	const [error, setError] = useState<number | undefined>(undefined);
	const [speakerPhotos, setSpeakerPhoto] = useState<Map<any, any>>(new Map([]));

	const getInfomeeting = (mounted: boolean) => {
		const path = process.env.INTEGRATION_API;

		if (!path) {
			return;
		}

		(async () => {
			try {
				const response = await fetch(
					`${path}?query={infomeetings(marketCode:"${marketCode}"){infoMeetingId,topic,shortDescription,longDescription,city,state,country,street,meetingPlace,zipCode,latitude,longitude,starttime,endtime,day,month,year,webinarURL,language,speakers{id,speakerName,speakerDescription,speakerTitle,speakerPhoto{body}}}}`
				);

				const obj = await response.json();

				const inf = obj.data.infomeetings.find(
					(im: any) => Number(im.infoMeetingId) === Number(infomeetingid)
				);

				if (!inf) setError(404);

				if (mounted) {
					setInfomeeting(inf);
				}
				
			} catch (err) {
				console.error(err);
			}
		})();
	};

	const getSpeakerPhoto = (speakerId: number) => {
		const path = process.env.INTEGRATION_API;

		if (!path) {
			return;
		}

		(async () => {
			try {
				const response = await fetch(
					`${path}?query={speakerPhoto(speakerId:"${speakerId}"){body}}`
				);

				const obj = await response.json();

				const photo = obj.data.speakerPhoto;

				if (photo) {
					setSpeakerPhoto(
						new Map(speakerPhotos.set(speakerId, { photo }))
					);
				}
			} catch (err) {
				console.error(err);
			}
		})();
	};

	useEffect(() => {
		let mounted = true;

		if (!infomeeting && router.asPath !== router.route) {
			getInfomeeting(mounted);
		}

		if (infomeeting && infomeeting.speakers) {
			infomeeting.speakers.forEach((s: any) => {
				if (s.id && !speakerPhotos.get(s.id)) {
					getSpeakerPhoto(s.id);
				}
			});
		}

		const nIntervId = setInterval(getInfomeeting, 360000);
		// Specify how to clean up after this effect:

		return function cleanup() {
			mounted = false;
			clearInterval(nIntervId);
		};
	}, [router, infomeeting]);

	const buildAddress = (): string => {
		let res = '';

		if (infomeeting.meetingPlace) res += `${infomeeting.meetingPlace}, \n`;

		if (infomeeting.street) res += `${infomeeting.street}, \n`;

		if (infomeeting.city) res += `${infomeeting.city}, \n`;

		if (infomeeting.state) res += `${infomeeting.state}, `;

		if (infomeeting.country) res += `${infomeeting.country}, \n`;

		if (infomeeting.zipCode) res += `${infomeeting.zipCode}`;

		if (res === '') {
			res = 'Online';
		}

		// if (infomeeting.webinarURL !== '')
		// return <a href={`${infomeeting.webinarURL}`}>infomeeting.webinarURL</a>;

		return res;
	};

	const buildDirection = (): string => {
		if (infomeeting.latitude && infomeeting.longtitude)
			return `https://maps.google.com/?q=${infomeeting.latitude},${infomeeting.longtitude}`;

		return '';
	};

	const error404Preset: any = Error404Preset.preset;

	const { preset }: any = InfomeetingPagePreset;

	const pagePreset: any = {
		...preset,
		body: infomeeting
			? [
					{
						...preset.body[0],
						body: [
							{ ...preset.body[0].body[0] },
							{
								...preset.body[0].body[1],
								body: preset.body[0].body[1].body
									? [
											{
												...preset.body[0].body[1].body[0],
												title: infomeeting.topic ? infomeeting.topic : ''
											},
											{
												...preset.body[0].body[1].body[1],
												title: infomeeting.shortDescription
													? infomeeting.shortDescription
													: ''
											}
									  ]
									: []
							},
							{
								...preset.body[0].body[2],
								body: preset.body[0].body[2].body
									? [
											{
												...preset.body[0].body[2].body[0],
												body: [
													{
														...preset.body[0].body[2].body[0].body[0],
														text: [
															{
																...preset.body[0].body[2].body[0].body[0]
																	.text[0],
																text:
																	preset.body[0].body[2].body[0].body[0]
																		.text[0][`text__i18n__${fallbackMarket}`] ??
																	preset.body[0].body[2].body[0].body[0].text[0]
																		.text
															}
														]
													},
													{
														...preset.body[0].body[2].body[0].body[1],
														text: [
															{
																...preset.body[0].body[2].body[0].body[1]
																	.text[0],
																text: {
																	...preset.body[0].body[2].body[0].body[1]
																		.text[0].text,
																	content: [
																		{
																			...preset.body[0].body[2].body[0].body[1]
																				.text[0].text.content[0],
																			content: [
																				{
																					...preset.body[0].body[2].body[0]
																						.body[1].text[0].text.content[0]
																						.content[0],
																					text: `${infomeeting.day} ${infomeeting.month} ${infomeeting.year}`
																				}
																			]
																		}
																	]
																}
															}
														]
													},
													{
														...preset.body[0].body[2].body[0].body[2],
														text: [
															{
																...preset.body[0].body[2].body[0].body[2]
																	.text[0],
																text:
																	preset.body[0].body[2].body[0].body[2]
																		.text[0][`text__i18n__${fallbackMarket}`] ??
																	preset.body[0].body[2].body[0].body[2].text[0]
																		.text
															}
														]
													},
													{
														...preset.body[0].body[2].body[0].body[3],
														text: [
															{
																...preset.body[0].body[2].body[0].body[3]
																	.text[0],
																text: {
																	...preset.body[0].body[2].body[0].body[3]
																		.text[0].text,
																	content: [
																		{
																			...preset.body[0].body[2].body[0].body[3]
																				.text[0].text.content[0],
																			content: [
																				{
																					...preset.body[0].body[2].body[0]
																						.body[3].text[0].text.content[0]
																						.content[0],
																					text: `${infomeeting.starttime} - ${infomeeting.endtime}`
																				}
																			]
																		}
																	]
																}
															}
														]
													},
													{
														...preset.body[0].body[2].body[0].body[4],
														text: [
															{
																...preset.body[0].body[2].body[0].body[4]
																	.text[0],
																text:
																	preset.body[0].body[2].body[0].body[4]
																		.text[0][`text__i18n__${fallbackMarket}`] ??
																	preset.body[0].body[2].body[0].body[4].text[0]
																		.text
															}
														]
													},
													{
														...preset.body[0].body[2].body[0].body[5],
														text: [
															{
																...preset.body[0].body[2].body[0].body[5]
																	.text[0],
																text: {
																	...preset.body[0].body[2].body[0].body[5]
																		.text[0].text,
																	content: [
																		{
																			...preset.body[0].body[2].body[0].body[5]
																				.text[0].text.content[0],
																			content: [
																				{
																					...preset.body[0].body[2].body[0]
																						.body[5].text[0].text.content[0]
																						.content[0],
																					text:
																						infomeeting.webinarURL !== null &&
																						infomeeting.webinarURL !== ''
																							? infomeeting.webinarURL
																							: buildAddress(),
																					marks:
																						infomeeting.webinarURL !== null &&
																						infomeeting.webinarURL !== ''
																							? [
																									{
																										type: 'link',
																										attrs: {
																											href:
																												infomeeting.webinarURL,
																											uuid: null,
																											anchor: null,
																											target: '_blank',
																											linktype: 'url'
																										}
																									},
																									{ type: 'underline' }
																							  ]
																							: []
																				}
																			]
																		}
																	]
																}
															}
														]
													},
													{
														...preset.body[0].body[2].body[0].body[6],
														icon: infomeeting.language
															? [
																	{
																		...preset.body[0].body[2].body[0].body[6]
																			.icon[0]
																	}
															  ]
															: [],
														text: infomeeting.language
															? [
																	{
																		...preset.body[0].body[2].body[0].body[6]
																			.text[0],
																		text:
																			preset.body[0].body[2].body[0].body[6]
																				.text[0][
																				`text__i18n__${fallbackMarket}`
																			] ??
																			preset.body[0].body[2].body[0].body[6]
																				.text[0].text
																	}
															  ]
															: []
													},
													{
														...preset.body[0].body[2].body[0].body[7],
														text: infomeeting.language
															? [
																	{
																		...preset.body[0].body[2].body[0].body[7]
																			.text[0],
																		text: {
																			...preset.body[0].body[2].body[0].body[7]
																				.text[0].text,
																			content: [
																				{
																					...preset.body[0].body[2].body[0]
																						.body[7].text[0].text.content[0],
																					content: [
																						{
																							...preset.body[0].body[2].body[0]
																								.body[7].text[0].text.content[0]
																								.content[0],
																							text: infomeeting.language
																						}
																					]
																				}
																			]
																		}
																	}
															  ]
															: []
													}
												]
											},
											{
												...preset.body[0].body[2].body[1],
												text: {
													...preset.body[0].body[2].body[1].text,
													content: [
														{
															...preset.body[0].body[2].body[1].text.content[0],
															content: [
																{
																	...preset.body[0].body[2].body[1].text
																		.content[0].content[0],
																	text:
																		buildDirection() !== ''
																			? preset.body[0].body[2].body[1].text
																					.content[0].content[0].text
																			: '',
																	marks: [
																		{
																			...preset.body[0].body[2].body[1].text
																				.content[0].content[0].marks[0],
																			attrs: {
																				...preset.body[0].body[2].body[1].text
																					.content[0].content[0].marks[0].attrs,
																				href: buildDirection()
																			}
																		},
																		{
																			...preset.body[0].body[2].body[1].text
																				.content[0].content[0].marks[1]
																		}
																	]
																}
															]
														}
													]
												}
											},
											{
												...preset.body[0].body[2].body[2],
												text:
													preset.body[0].body[2].body[2][
														`text__i18n__${fallbackMarket}`
													] ?? preset.body[0].body[2].body[2].text
											}
									  ]
									: []
							},
							{
								...preset.body[0].body[3],
								title: infomeeting.longDescription
									? infomeeting.longDescription
									: ''
							}
						]
					},
					{
						...preset.body[1],
						body:
							infomeeting.speakers && infomeeting.speakers.length !== 0
								? [
										{
											...preset.body[1].body[0],
											title:
												preset.body[1].body[0][
													`title__i18n__${fallbackMarket}`
												] ?? preset.body[1].body[0].title
										},
										{
											...preset.body[1].body[1],
											body: infomeeting.speakers.map((s: any) => {
												return {
													...preset.body[1].body[1].body[0],
													_uid: uuidv4(),
													body: [
														{
															...preset.body[1].body[1].body[0].body[0]
															// graphic:
															// 	speakerPhotos &&
															// 	speakerPhotos.get(s.id) &&
															// 	speakerPhotos.get(s.id).photo &&
															// 	speakerPhotos.get(s.id).photo.body &&
															// 	preset.body[1].body[1].body[0].body[0].graphic
															// 		? {
															// 				...preset.body[1].body[1].body[0].body[0]
															// 					.graphic,
															// 				src: `data:image/png;base64,${
															// 					speakerPhotos.get(s.id).photo.body
															// 				}`
															// 		  }
															// 		: preset.body[1].body[1].body[0].body[0]
															// 				.graphic
														},
														{
															...preset.body[1].body[1].body[0].body[1],
															body: [
																{
																	...preset.body[1].body[1].body[0].body[1]
																		.body[0],
																	text: {
																		...preset.body[1].body[1].body[0].body[1]
																			.body[0].text,
																		content: [
																			{
																				...preset.body[1].body[1].body[0]
																					.body[1].body[0].text.content[0],
																				content: [
																					{
																						...preset.body[1].body[1].body[0]
																							.body[1].body[0].text.content[0]
																							.content[0],
																						text: s.speakerName
																					}
																				]
																			}
																		]
																	}
																},
																{
																	...preset.body[1].body[1].body[0].body[1]
																		.body[1],
																	text: {
																		...preset.body[1].body[1].body[0].body[1]
																			.body[1].text,
																		content: [
																			{
																				...preset.body[1].body[1].body[0]
																					.body[1].body[1].text.content[0],
																				content: [
																					{
																						...preset.body[1].body[1].body[0]
																							.body[1].body[1].text.content[0]
																							.content[0],
																						text: s.speakerTitle
																					}
																				]
																			}
																		]
																	}
																},
																{
																	...preset.body[1].body[1].body[0].body[1]
																		.body[2],
																	text: {
																		...preset.body[1].body[1].body[0].body[1]
																			.body[2].text,
																		content: [
																			{
																				...preset.body[1].body[1].body[0]
																					.body[1].body[2].text.content[0],
																				content: [
																					{
																						...preset.body[1].body[1].body[0]
																							.body[1].body[2].text.content[0]
																							.content[0],
																						text: s.speakerDescription
																					}
																				]
																			}
																		]
																	}
																}
															]
														}
													]
												};
											})
										}
								  ]
								: []
					},
					{
						...preset.body[2],
						body: [
							{
								...preset.body[2].body[0],
								body: [
									{
										...preset.body[2].body[0].body[0],
										title:
											preset.body[2].body[0].body[0][
												`title__i18n__${fallbackMarket}`
											] ?? preset.body[2].body[0].body[0].title
									},
									{
										...preset.body[2].body[0].body[1],
										action: [
											{
												...preset.body[2].body[0].body[1].action[0],
												text:
													preset.body[2].body[0].body[1].action[0][
														`text__i18n__${fallbackMarket}`
													] ?? preset.body[2].body[0].body[1].action[0].text,
												behavior: [
													{
														...preset.body[2].body[0].body[1].action[0]
															.behavior[0],
														body: [
															{
																...preset.body[2].body[0].body[1].action[0]
																	.behavior[0].body[0]
															},
															{
																...preset.body[2].body[0].body[1].action[0]
																	.behavior[0].body[1],
																title:
																	preset.body[2].body[0].body[1].action[0]
																		.behavior[0].body[1][
																		`title__i18n__${fallbackMarket}`
																	] ??
																	preset.body[2].body[0].body[1].action[0]
																		.behavior[0].body[1].title
															},
															{
																...preset.body[2].body[0].body[1].action[0]
																	.behavior[0].body[2],
																text:
																	preset.body[2].body[0].body[1].action[0]
																		.behavior[0].body[2][
																		`text__i18n__${fallbackMarket}`
																	] ??
																	preset.body[2].body[0].body[1].action[0]
																		.behavior[0].body[2].text
															},
															{
																...preset.body[2].body[0].body[1].action[0]
																	.behavior[0].body[3],
																text:
																	preset.body[2].body[0].body[1].action[0]
																		.behavior[0].body[3][
																		`text__i18n__${fallbackMarket}`
																	] ??
																	preset.body[2].body[0].body[1].action[0]
																		.behavior[0].body[3].text
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
			  ]
			: []
	};

	const fixedHeight = css`
		height: 58px;
	`;

	return (
		(error === 404 && (
			<>
				<div className={cx(fixedHeight, 'bg-burgundy')} />
				<Grid content={error404Preset} />
			</>
		)) ||
		(error && <Error statusCode={error} />) ||
		(infomeeting && (
			<>
				<Grid content={pagePreset.body[0]} />
				<Grid content={pagePreset.body[1]} />
				<Grid content={pagePreset.body[2]} />
			</>
		)) || <></>
	);
};

export default InfomeetingPage;
