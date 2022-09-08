import React, { FunctionComponent } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { ActionBehavior } from '~/components/modules/Action';
import { SurfaceModule } from '~/storyblok/components/surface-module/definition';
import { getBackgroundElement } from '~/components/settings/BackgroundSettings';
import { getBodyFlexClasses } from '~/components/settings/BodyFlex';
import { getBorderClasses } from '~/components/settings/BorderColor';
import { getColoringClasses } from '~/components/settings/Coloring';
import {
	getMarginSpacingComponentClasses,
	getPaddingSpacingComponentClasses
} from '~/components/settings/SpacingComponent';
import Components from '~/components';
import ModuleWrap from '~/components/other/ModuleWrap';

const Surface: FunctionComponent<{
	content: SurfaceModule;
	modal: boolean;
}> = props => {
	const { content, modal } = props;

	// FIXME typescript definition
	const typeMap: any = {
		'flat': [],
		'shadow': ['shadow'],
		'deep-shadow': ['shadow-deep']
	};
	const typeDefault = 'flat';

	// default body settings
	const bodyDefault = 'flex flex-col';

	const actionContent = content.action?.[0];
	const actionBehavior = actionContent?.action_behavior?.[0];

	const surfaceContent = (
		<article
			className={cx(
				'relative overflow-hidden',
				...typeMap[content.type || typeDefault],
				content.border_radius,
				getColoringClasses(content.coloring_settings),
				getMarginSpacingComponentClasses(content.spacing_settings),
				getBorderClasses(content.border_settings),
				content.fill_parent && 'h-full'
			)}
			data-name="surface-module"
		>
			<div
				className={cx(
					'relative z-10',
					getBodyFlexClasses(content.body_settings) || bodyDefault,
					getPaddingSpacingComponentClasses(content.spacing_settings),
					content.fill_parent && 'h-full'
				)}
			>
				{content.body && content.body.map(blok => Components(blok, '', { modal }))}
			</div>
			{content.background_settings &&
				getBackgroundElement(content.background_settings)}
		</article>
	);

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				{actionBehavior ? (
					<ActionBehavior content={actionBehavior}>
						{surfaceContent}
					</ActionBehavior>
				) : (
					surfaceContent
				)}
			</ModuleWrap>
		</SbEditable>
	);
};

export default Surface;
