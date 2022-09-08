import { v4 as uuidv4 } from 'uuid';
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState
} from 'react';

import SbEditable from 'storyblok-react';
import StoryblokCarousel from './Carousel';

import Action from './Action';

import { BlogModule } from '~/storyblok/components/blog-module/definition';
import EnvContext from '~/contexts/EnvContext';

import BlogActionPreset from '~/storyblok/presets/blog---action/preset.preset';
import BlogPreset from '~/storyblok/presets/blog---carousel/preset.preset';
import useDatasource from '~/hooks/useDatasource';

const getActionPreset = (url: string) => {
	const { marketCode: langCode } = useContext(EnvContext);

	const { preset } = BlogActionPreset as any;

	// get the language fallback if it is a valid language
	const fallbackMarket = langCode?.replace('-', '_');

	const actionModuleFromPreset: any = {
		...preset,
		text: preset[`text__i18n__${fallbackMarket}`] ?? preset.text,
		behavior: [
			{
				...preset.behavior[0],
				link: {
					...preset.behavior[0].link,
					url: `${url}efacademyblog/`,
					cached_url: `${url}efacademyblog/`,
					linktype: 'url'
				}
			}
		]
	};

	return actionModuleFromPreset;
};

const Blog: FunctionComponent<{
	content: BlogModule;
}> = (props) => {
	const { content } = props;

	const { marketCode } = useContext(EnvContext);

	const blogDatasources = useDatasource('markets-fallback', 'blog-url');
	const [blogUrl, setBlogUrl] = useState<any>(undefined);

	const url = `${blogUrl}rss/?channel=efacademyblog&ascendant=false&limit=3`;
	const corsUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';

	const [initialized, setInitialized] = useState(false);
	const [listings, setListings] = useState<any>([]);

	const getListings = () => {
		(async () => {
			try {
				const response = await fetch(`${corsUrl}${encodeURIComponent(url)}`);
				const obj = await response.json();
				setListings(obj.items);
			} catch (ex) {
				console.log(ex);
			}
		})();
	};

	useEffect(() => {
		if (blogDatasources && blogDatasources.length !== 0) {
			const blog_url = blogDatasources.filter(
				(b) => b.name.toLowerCase() === marketCode.toLowerCase()
			)[0]?.dimension_value;

			const defaultBlogUrl = 'https://www.ef.com/wwen/blog/';

			// eslint-disable-next-line @typescript-eslint/camelcase
			setBlogUrl(blog_url ?? defaultBlogUrl);
		}
	}, [blogDatasources]);

	useEffect(() => {
		if (!initialized && blogUrl) {
			getListings();
			setInitialized(true);
		}
	}, [blogUrl]);

	const decode = (str: string) => {
		return str.replace(/&amp;#(\d+);/g, (match, dec) => {
			return String.fromCharCode(dec);
		});
	};

	const { preset } = BlogPreset as any;
	const actionPreset = getActionPreset(blogUrl);

	const carouselModuleFromPreset: any =
		listings.length !== 0
			? {
					...preset,
					body: [
						{
							...preset.body[0],
							_uid: uuidv4(),
							action: [
								{
									...preset.body[0].action[0],
									action_behavior: [
										{
											...preset.body[0].action[0].action_behavior[0],
											link: {
												...preset.body[0].action[0].action_behavior[0].link,
												url: listings[0].link,
												cached_url: listings[0].link
											}
										}
									]
								}
							],
							cover: [
								{
									...preset.body[0].cover[0],
									_uid: uuidv4(),
									graphic: {
										...preset.body[0].cover[0].graphic,
										_uid: uuidv4(),
										src: listings[0].enclosure.link
									}
								}
							],
							overlay_body: [
								{
									...preset.body[0].overlay_body[0],
									body: [
										{
											...preset.body[0].overlay_body[0].body[0],
											text: {
												...preset.body[0].overlay_body[0].body[0].text,
												content: [
													{
														...preset.body[0].overlay_body[0].body[0].text
															.content[0],
														content: [
															{
																...preset.body[0].overlay_body[0].body[0].text
																	.content[0].content[0],
																text: decode(listings[0].title)
															}
														]
													}
												]
											}
										},
										{
											...preset.body[0].overlay_body[0].body[1],
											text: `Read more`,
											behavior: [
												{
													...preset.body[0].overlay_body[0].body[1].behavior[0],
													link: {
														...preset.body[0].overlay_body[0].body[1]
															.behavior[0].link,
														url: listings[0].link,
														cached_url: listings[0].link
													}
												}
											]
										}
									]
								}
							]
						}
					].concat(
						listings.slice(1, listings.length).map((l: any) => {
							return {
								...preset.body[1],
								_uid: uuidv4(),
								// action: [
								// 	{
								// 		...preset.body[1].action[0],
								// 		action_behavior: [
								// 			{
								// 				...preset.body[1].action[0].action_behavior[0],
								// 				link: {
								// 					...preset.body[1].action[0].action_behavior[0].link,
								// 					url: l.link,
								// 					cached_url: l.link
								// 				}
								// 			}
								// 		]
								// 	}
								// ],
								cover: [
									{
										...preset.body[1].cover[0],
										_uid: uuidv4(),
										graphic: {
											...preset.body[1].cover[0].graphic,
											_uid: uuidv4(),
											src: l.enclosure.link
										}
									}
								],
								content_body: [
									{
										...preset.body[1].content_body[0],
										text: {
											...preset.body[1].content_body[0].text,
											content: [
												{
													...preset.body[1].content_body[0].text.content[0],
													content: [
														{
															...preset.body[1].content_body[0].text.content[0]
																.content[0],
															text: decode(l.title)
														}
													]
												}
											]
										}
									},
									{
										...preset.body[1].content_body[1],
										text: `Read more`,
										behavior: [
											{
												...preset.body[1].content_body[1].behavior[0],
												link: {
													...preset.body[1].content_body[1].behavior[0].link,
													url: l.link,
													cached_url: l.link
												}
											}
										]
									}
								]
							};
						})
					)
			  }
			: undefined;

	return (
		<SbEditable content={content}>
			{initialized && carouselModuleFromPreset && (
				<StoryblokCarousel content={carouselModuleFromPreset} />
			)}
			{initialized && <Action content={actionPreset} />}
		</SbEditable>
	);
};

export default Blog;
