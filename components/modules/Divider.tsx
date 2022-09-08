import React, { FunctionComponent } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { getColoringClasses } from '~/components/settings/Coloring';
import { getSpacingComponentClasses } from '~/components/settings/SpacingComponent';

import { DividerModule } from '~/storyblok/components/divider-module/definition';

const Divider: FunctionComponent<{ content: DividerModule }> = (props) => {
	const { content } = props;

	const style = {
		opacity: content.opacity,
		minWidth: content.divider_width ? `${content.divider_width}px` : '',
		minHeight: content.divider_width ? `${content.divider_width}px` : ''
	};

	return (
		<SbEditable content={content}>
			<div
				className={cx(
					'align-self-stretch',
					'min-w-1 min-h-1',
					getColoringClasses(content.coloring_settings),
					getSpacingComponentClasses(content.spacing_settings)
				)}
				style={style}
			/>
		</SbEditable>
	);
};

export default Divider;
