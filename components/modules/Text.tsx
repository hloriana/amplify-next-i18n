import React, {
	FunctionComponent,
	DetailedHTMLProps,
	HTMLAttributes
} from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';
import parse from 'html-react-parser';

import { TextModule } from '~/storyblok/components/text-module/definition';
import {
	getAlignmentFontClasses,
	getSizeWeightFontClasses
} from '~/components/settings/Font';
import { getColoringClasses } from '~/components/settings/Coloring';
import { getSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import ModuleWrap from '~/components/other/ModuleWrap';

import RichTextResolver from '~/utils/richtext.service';
// Get Storyblok content resolver
const richTextResolver = new RichTextResolver();

const Text: FunctionComponent<
	{
		content: TextModule;
		wrap?: boolean;
	} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
	const { content, className, wrap = true, ...rest } = props;

	const textModule = (
		<div
			className={cx(
				className,
				'typo-richtext',
				`typo-${content.text_level}`,
				getAlignmentFontClasses(content.font_settings),
				getSizeWeightFontClasses(content.font_settings),
				getColoringClasses(content.coloring_settings),
				getSpacingComponentClasses(content.spacing_settings)
			)}
			data-name="text-module"
			{...rest}
		>
			{content.text &&
				parse(
					richTextResolver
						.render(content.text)
						// replaces escaped '&nbsp;' back to html
						.replace(/&ampnbsp;/g, '&nbsp;')
						// replaces empty p tag as br for new lines
						.replace(/<p><\/p>/g, '<br />')
				)}
		</div>
	);

	return (
		<SbEditable content={content}>
			{/* SECTION wrap the module */}
			{wrap ? (
				<ModuleWrap settings={content.module_settings}>{textModule}</ModuleWrap>
			) : (
				textModule
			)}
		</SbEditable>
	);
};

export default Text;
