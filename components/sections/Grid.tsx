import React, {
	FunctionComponent,
	DetailedHTMLProps,
	HTMLAttributes
} from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { GridSection } from '~/storyblok/components/grid-section/definition';
import { getBackgroundElement } from '~/components/settings/BackgroundSettings';
import { getBodyGridClasses } from '~/components/settings/BodyGrid';
import { getColoringClasses } from '~/components/settings/Coloring';
import { getSpacingLayoutClasses } from '~/components/settings/SpacingLayout';
import Components from '~/components';

const Grid: FunctionComponent<
	{
		content: GridSection;
	} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
	const { content, className, ...rest } = props;

	// default type of grid
	const bodyGridDefault = 'gud-content-grid';

	return (
		<SbEditable content={content}>
			<section
				id={content.anchor_slug}
				className={cx(
					className,
					'overflow-hidden relative',
					getSpacingLayoutClasses(content.spacing_settings),
					getColoringClasses(content.coloring_settings)
				)}
				{...rest}
				data-section-id={content._uid}
			>
				<div className="absolute top-0 left-0 w-full h-full">
					{content.background_settings &&
						getBackgroundElement(content.background_settings)}
				</div>
				<div
					className={cx(
						'relative',
						getBodyGridClasses(content.body_settings) || bodyGridDefault
					)}
				>
					{content.body && content.body.map((blok) => Components(blok))}
				</div>
			</section>
		</SbEditable>
	);
};

export default Grid;
