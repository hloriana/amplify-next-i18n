import React, {
	FunctionComponent,
	DetailedHTMLProps,
	HTMLAttributes
} from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';
import parse from 'html-react-parser';

import { HeadingModule } from '~/storyblok/components/heading-module/definition';
import { getColoringClasses } from '~/components/settings/Coloring';
import {
	getSizeWeightFontClasses,
	getAlignmentFontClasses
} from '~/components/settings/Font';
import { getSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import ModuleWrap from '~/components/other/ModuleWrap';

const Heading: FunctionComponent<
	{
		content: HeadingModule;
	} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = (props) => {
	const { content, className, ...rest } = props;
	// NOTE the OR condition should be equal to the default in Storyblok
	const HeadingTag = content.heading_level || 'h1';

	const getFontClasses = () => {
		const fontClasses = getSizeWeightFontClasses(content.font_settings);

		return fontClasses && fontClasses !== ''
			? fontClasses
			: `typo-${HeadingTag}`;
	};

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				{/* SECTION actual module DOM */}
				<HeadingTag
					className={cx(
						className,
						getFontClasses(),
						getAlignmentFontClasses(content.font_settings),
						getColoringClasses(content.coloring_settings),
						getSpacingComponentClasses(content.spacing_settings)
					)}
					data-name="heading-module"
					{...rest}
				>
					{parse(
						content.title
							// replaces text new lines as br tags
							.replace(/\n/g, '<br />')
					)}
					{content.extra &&
						(content.extra_type === 'sub' ? (
							<sub className={cx('typo-sub')}>{content.extra}</sub>
						) : (
							<sup className={cx('typo-sup')}>{content.extra}</sup>
						))}
				</HeadingTag>
			</ModuleWrap>
		</SbEditable>
	);
};

export default Heading;
