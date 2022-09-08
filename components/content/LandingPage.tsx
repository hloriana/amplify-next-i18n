import React, { FunctionComponent } from 'react';

import CookieBanner from './CookieBanner';

import { LandingPage } from '~/storyblok/components/landing-page/definition';
import Components from '~/components';

import Meta from '~/components/other/Meta';

interface LandingPageOwnProps {
	content: LandingPage;
}

const StoryblokLandingPage: FunctionComponent<LandingPageOwnProps> = (
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

			<CookieBanner />
		</>
	);
};

export default StoryblokLandingPage;
