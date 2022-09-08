import React, { FunctionComponent, useEffect, useState } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { ActionBehavior } from '~/components/modules/Action';
import { PromoModule } from '~/storyblok/components/promo-module/definition';
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
import useStory from '~/hooks/useStory';

const Promo: FunctionComponent<{
	content: PromoModule;
}> = (props) => {
	const { content } = props;

	const [promoSettings, setPromoSettings] = useState(content.promo_section);

	const promo = useStory(content.promo_page);

	useEffect(() => {
		setPromoSettings(
			promo?.content?.promo_settings &&
				promo?.content?.promo_settings.length !== 0
				? promo.content.promo_settings
				: content.promo_section
		);
	}, [promo]);

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
			data-name="promo-module"
		>
			<div
				className={cx(
					'relative z-10',
					getBodyFlexClasses(content.body_settings) || bodyDefault,
					getPaddingSpacingComponentClasses(content.spacing_settings),
					content.fill_parent && 'h-full'
				)}
			>
				<div className={cx('flex flex-row justify-between align-items-center')}>
					{content.icon_section &&
						content.icon_section.map((blok) => Components(blok))}
					<div className={cx('flex flex-col')}>
						{promoSettings &&
							promoSettings.map((blok: any) => Components(blok))}
					</div>
				</div>
				<div className={cx('flex flex-row justify-end align-items-center')}>
					{content.arrow_section &&
						content.arrow_section.map((blok) => Components(blok))}
				</div>
			</div>
			{content.background_settings &&
				getBackgroundElement(content.background_settings)}
		</article>
	);

	return (
		<SbEditable content={content}>
			{content.enabled && (
				<ModuleWrap settings={content.module_settings}>
					{actionBehavior ? (
						<ActionBehavior content={actionBehavior}>
							{surfaceContent}
						</ActionBehavior>
					) : (
						surfaceContent
					)}
				</ModuleWrap>
			)}
		</SbEditable>
	);
};

export default Promo;
