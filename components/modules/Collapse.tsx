import React, {
	FunctionComponent,
	DetailedHTMLProps,
	LiHTMLAttributes,
	useState,
	useEffect
} from 'react';

import { cx, css } from 'linaria';
import SbEditable from 'storyblok-react';

import { Icon } from '~/components/kit';
import ModuleWrap from '~/components/other/ModuleWrap';

import { CollapseModule } from '~/storyblok/components/collapse-module/definition';
import { CollapsePanelSubModule } from '~/storyblok/components/collapse-panel-sub-module/definition';
import { getBodyFlexClasses } from '~/components/settings/BodyFlex';
import { getColoringClasses } from '~/components/settings/Coloring';
import {
	getMarginSpacingComponentClasses,
	getPaddingSpacingComponentClasses,
	getSpacingComponentClasses
} from '~/components/settings/SpacingComponent';
import Components from '~/components';

import useStory from '~/hooks/useStory';

const ColorTransition = css`
	will-change: color background-color border-color box-shadow;
	transition: color 0.3s linear, background-color 0.3s linear, box-shadow 0.3s linear;
	border-color 0.3s linear;
`;

const lightDividerCss = css`
	border-color: rgba(255, 255, 255, 0.2);
`;

const darkDividerCss = css`
	border-color: rgba(25, 25, 25, 0.2);
`;

// SECTION Module
const CollapsePanel: FunctionComponent<
	{
		content: CollapsePanelSubModule;
		index: number;
		variant?: string;
		behavior?: string; 
	} & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = (props) => {
	const { content, index, variant, behavior, ...rest } = props;

	// expand state
	const [expanded, setExpanded] = useState(behavior === 'expanded');
	const togglePanel = () => setExpanded(!expanded);

	// get the body settings
	const headingBodySettings =
		getBodyFlexClasses(content.heading_body_settings) || 'flex flex-col';
	const contentBodySettings =
		getBodyFlexClasses(content.content_body_settings) || 'flex flex-col';
	// get the spacing settings
	// NOTE we replace the margin with padding in order to have a bigger clickable area
	const headingSpacingSettings =
		getMarginSpacingComponentClasses(content.spacing_settings)?.replace(
			'm',
			'p'
		) || 'py-4';
	const contentSpacingSettings = getPaddingSpacingComponentClasses(
		content.spacing_settings
	);

	const [head, setHead] = useState(content.heading_body);
	const [body, setBody] = useState(content.content_body);

	const faq = useStory(content.faq);

	useEffect(() => {
		setHead(faq?.content?.head ? faq.content.head : content.heading_body);
		setBody(faq?.content?.body ? faq.content.body : content.content_body);
	}, [faq]);

	return (
		<SbEditable content={content}>
			{/*  */}
			<li
				data-name="collapse-panel-module"
				className={cx(
					ColorTransition,
					(content?.expanded_color_settings &&
						content?.expanded_color_settings.length !== 0 &&
						getColoringClasses(
							expanded
								? content?.expanded_color_settings
								: content?.color_settings
						)) ||
						getColoringClasses(content?.color_settings),
					getSpacingComponentClasses(content?.module_spacing_settings),
					content?.border_radius,

					!content?.hide_border &&
						`border-b ${
							variant
								? variant === 'dark'
									? lightDividerCss
									: darkDividerCss
								: 'border-ui-light-gray'
						}`,
					content?.shadow_on_expand && expanded && 'shadow-deep'
				)}
			>
				<button
					type="button"
					className={cx(
						'relative w-full',
						'flex flex-row align-items-end', // this is to have the chevron arrow align correctly on LTR / RTL
						headingSpacingSettings
					)}
					onClick={togglePanel}
				>
					{/* the actual heading content which takes all the space */}
					<div className={cx('flex-grow', headingBodySettings)}>
						{head && head.map((blok) => Components(blok))}
					</div>
					{/* close icon, will always be position to the 'end  of the direction */}
					<Icon
						icon={expanded ? 'chevron-up' : 'chevron-down'}
						type="icons"
						className="w-4 h-4 flex-shrink-0 fill-current"
					/>
				</button>
				<article
					className={cx(
						'collapse',
						expanded && 'collapse-expanded',
						contentBodySettings,
						expanded && contentSpacingSettings
					)}
				>
					{body && body.map((blok) => Components(blok))}
				</article>
			</li>
		</SbEditable>
	);
};

// SECTION Module
const Collapse: FunctionComponent<{
	content: CollapseModule;
}> = (props) => {
	const { content, ...rest } = props;

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<ul
					className={cx(getSpacingComponentClasses(content.spacing_settings))}
					data-name="collapse-module"
				>
					{content.body &&
						content.body.map((blok, i) => (
							<CollapsePanel
								// eslint-disable-next-line no-underscore-dangle
								key={blok._uid}
								content={blok}
								index={i}
								variant={content.theme_variant}
								behavior={content.default_panel_behavior}
							/>
						))}
				</ul>
			</ModuleWrap>
		</SbEditable>
	);
};

export default Collapse;
