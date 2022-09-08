import { StoryblokComponent } from 'storyblok-js-client';
import { cx } from 'linaria';
import React, { FunctionComponent } from 'react';

import SbEditable from 'storyblok-react';

import { getColoringClasses } from '../settings/Coloring';
import {
	getMarginSpacingComponentClasses,
	getPaddingSpacingComponentClasses
} from '../settings/SpacingComponent';
import Components from '~/components';

import { ScrollTopModule } from '~/storyblok/components/scroll-top-module/definition';

const ScrollTop: FunctionComponent<{ content: ScrollTopModule }> = (props) => {
	const { content } = props;

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<SbEditable content={content}>
			<div className="fixed bottom-0 right-0 z-40">
				<button
					type="button"
					className={cx(
						getMarginSpacingComponentClasses(content.spacing_settings) ||
							'mb-24 mr-2',
						getPaddingSpacingComponentClasses(content.spacing_settings) ||
							'p-4',
						getColoringClasses(content.colour_settings) ||
							'text-ink-black bg-white',
						content.shadow_settings || 'shadow',
						content?.border_radius_settings || 'rounded-full'
					)}
					onClick={handleScrollTop}
				>
					<span className="sr-only">Back to top</span>
					{content?.content.map((blok: StoryblokComponent<string>) =>
						Components(blok)
					)}
				</button>
			</div>
		</SbEditable>
	);
};

export default ScrollTop;
