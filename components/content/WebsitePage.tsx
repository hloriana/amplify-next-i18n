import React, { FunctionComponent } from 'react';

import LiveChat from 'react-livechat';

import CookieBanner from './CookieBanner';

import { WebsitePage } from '~/storyblok/components/website-page/definition';
import Components from '~/components';
import Meta from '~/components/other/Meta';

interface WebsitePageOwnProps {
	content: WebsitePage;
}

const StoryblokWebsitePage: FunctionComponent<WebsitePageOwnProps> = (
	props
) => {
	const { content } = props;

	return (
		<>
			{content.seo && <Meta content={content.seo} index={content.seo_index} />}
			{content.bottom_banner &&
				content.bottom_banner.map((blok) =>
					Components(blok, '', { position: 'bottom' })
				)}

			<main>
				{content.body && content.body.map((blok) => Components(blok))}
			</main>

			{typeof window !== 'undefined' && (
				<LiveChat license={process.env.LIVECHAT_ID} />
			)}
			<CookieBanner />
		</>
	);
};

export default StoryblokWebsitePage;
