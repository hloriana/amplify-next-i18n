import convert from 'color-convert';

import React, {
	FunctionComponent,
	DetailedHTMLProps,
	HTMLAttributes
} from 'react';

import { cx } from 'linaria';

import { GradientModule } from '~/storyblok/components/gradient-module/definition';

const Gradient: FunctionComponent<{
	content: GradientModule;
} & DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>> = props => {
	const { content, style, ...rest } = props;

	// Check for transparent values as not rendered correctly in safari
	if (content.from_color.color === 'transparent') {
		content.from_color.color = `rgba(${convert.hex
			.rgb(content.to_color.color)
			.join(', ')}, 0)`;
	} else if (content.to_color.color === 'transparent') {
		content.to_color.color = `rgba(${convert.hex
			.rgb(content.from_color.color)
			.join(', ')}, 0)`;
	}

	return (
		// <SbEditable content={content}>
		<div
			// className={cx('w-full h-full absolute top-0 left-0', className)}
			style={{
				background: `linear-gradient(${content.degrees}deg, ${content.from_color.color} ${content.from_position}%, ${content.to_color.color} ${content.to_position}%)`,
				opacity: content.opacity,
				...style
			}}
			data-name="gradient-module"
			{...rest}
		/>
		// </SbEditable>
	);
};

export default Gradient;
