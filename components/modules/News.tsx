import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState
} from 'react';
import SbEditable from 'storyblok-react';

import StoryblokCarousel from './Carousel';

import { CarouselModule } from '~/storyblok/components/carousel-module/definition';
import { NewsModule } from '~/storyblok/components/news-module/definition';
import CampusContext from '~/contexts/CampusContext';

import NewsCarouselPreset from '~/storyblok/presets/news---carousel/preset.preset';
import useDatasource from '~/hooks/useDatasource';

interface SchoolUpdate {
	id: string;
	title: string;
	info: string;
	startDate: string;
	endDate: string;
	startTime: string;
	endTime: string;
	photo: string;
}

const News: FunctionComponent<{ content: NewsModule }> = (props) => {
	const { content } = props;
	const { campus } = useContext(CampusContext);
	const campusDatasources = useDatasource('campus', 'code');

	const campusCode = campusDatasources.filter((c) => c.value === campus)[0]
		?.dimension_value;

	const [news, setNews] = useState<SchoolUpdate[]>([]);

	const getNews = (mounted: boolean) => {
		const schoolUpdates: SchoolUpdate[] = [];

		const path = process.env.INTEGRATION_API;
		if (!path) {
			return;
		}

		(async () => {
			try {
				const dataObj = await fetch(
					`${path}?query={schoolUpdatesWeb(campus:"${campusCode}"){id,startDate,startTime,endDate,endTime,info,title}}`
				).then((response) => response.json());

				const promiseArray = dataObj.data.schoolUpdatesWeb.map(
					async (su: any) => {
						const photo = await fetch(
							`${path}?query={schoolUpdatePhoto(schoolUpdateId:"${su.id}"){photo}}`
						).then((response) => response.json());
						schoolUpdates.push({
							id: su.id,
							title: su.title,
							info: su.info,
							startDate: su.startDate,
							endDate: su.endDate,
							startTime: su.startTime,
							endTime: su.endTime,
							photo: photo.data.schoolUpdatePhoto.photo
						});
					}
				);

				(async () => {
					await Promise.all(promiseArray);

					if (mounted) {
						setNews(schoolUpdates);
					}
					
				})();
			} catch (err) {
				console.log(err);
			}
		})();
	};

	useEffect(() => {
		let mounted = true;
		if (campusCode) {
			getNews(mounted);
		}

		const nIntervId = setInterval(getNews, 3600000);

		// Specify how to clean up after this effect:
		return function cleanup() {
			mounted = false;
			clearInterval(nIntervId);
		};
	}, [campusCode]);

	const getDate = (startDate: string, endDate: string): string => {
		return `${
			startDate
				? new Date(startDate).toLocaleString('en-GB', {
						day: 'numeric',
						month: 'long',
						year: 'numeric'
				  })
				: ''
		}${
			endDate && endDate !== startDate
				? ` - ${new Date(endDate).toLocaleString('en-GB', {
						day: 'numeric',
						month: 'long',
						year: 'numeric'
				  })}`
				: ''
		}`;
	};

	const { preset } = NewsCarouselPreset;

	const carouselModuleFromPreset: any = {
		...preset,
		body: news.map((n: any) => {
			return {
				...preset.body[0],
				overlay_body: [
					{
						...preset.body[0].overlay_body[0],
						body: [
							{
								...preset.body[0].overlay_body[0].body[0],
								body: [
									{
										...preset.body[0].overlay_body[0].body[0].body[0],
										title: n.title
									},
									{
										...preset.body[0].overlay_body[0].body[0].body[1],
										body: preset.body[0].overlay_body[0].body[0].body[1].body
											? [
													{
														...preset.body[0].overlay_body[0].body[0].body[1]
															.body[0],
														text: {
															...preset.body[0].overlay_body[0].body[0].body[1]
																.body[0].text,
															content: preset.body[0].overlay_body[0].body[0]
																.body[1].body[0].text
																? [
																		{
																			...preset.body[0].overlay_body[0].body[0]
																				.body[1].body[0].text.content[0],
																			content: [
																				{
																					...preset.body[0].overlay_body[0]
																						.body[0].body[1].body[0].text
																						.content[0].content[0],
																					text: getDate(n.startDate, n.endDate)
																				}
																			]
																		}
																  ]
																: []
														}
													}
											  ]
											: []
									}
								]
							}
						]
					}
				],
				action: [
					{
						...preset.body[0].action[0],
						action_behavior: [
							{
								...preset.body[0].action[0].action_behavior[0],
								body: [
									{
										...preset.body[0].action[0].action_behavior[0].body[0],
										graphic: {
											...preset.body[0].action[0].action_behavior[0].body[0]
												.graphic,
											src: `data:image/png;base64, ${n.photo}`
										}
									},
									{
										...preset.body[0].action[0].action_behavior[0].body[1],
										body: preset.body[0].action[0].action_behavior[0].body[1]
											.body
											? [
													{
														...preset.body[0].action[0].action_behavior[0]
															.body[1].body[0],
														body: [
															{
																...preset.body[0].action[0].action_behavior[0]
																	.body[1].body[0].body[0],
																title: n.title
															},
															{
																...preset.body[0].action[0].action_behavior[0]
																	.body[1].body[0].body[1],
																text: {
																	...preset.body[0].action[0].action_behavior[0]
																		.body[1].body[0].body[1].text,
																	content: [
																		{
																			...preset.body[0].action[0]
																				.action_behavior[0].body[1].body[0]
																				.body[1].text?.content[0],
																			content: [
																				{
																					...preset.body[0].action[0]
																						.action_behavior[0].body[1].body[0]
																						.body[1].text?.content[0]
																						.content[0],
																					text: getDate(n.startDate, n.endDate)
																				}
																			]
																		}
																	]
																}
															},
															{
																...preset.body[0].action[0].action_behavior[0]
																	.body[1].body[0].body[2],
																text: {
																	...preset.body[0].action[0].action_behavior[0]
																		.body[1].body[0].body[2].text,
																	content: [
																		{
																			...preset.body[0].action[0]
																				.action_behavior[0].body[1].body[0]
																				.body[2].text?.content[0],
																			content: [
																				{
																					...preset.body[0].action[0]
																						.action_behavior[0].body[1].body[0]
																						.body[2].text?.content[0]
																						.content[0],
																					text: n.info
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
							}
						]
					}
				],
				cover: [
					{
						...preset.body[0].cover[0],
						graphic: {
							...preset.body[0].cover[0].graphic,
							src: `data:image/png;base64, ${n.photo}`
						}
					}
				]
			};
		})
	};

	return (
		<SbEditable content={content}>
			{news && news[0] && news[0].photo ? (
				<StoryblokCarousel content={carouselModuleFromPreset} />
			) : (
				<></>
			)}
		</SbEditable>
	);
};

export default News;
