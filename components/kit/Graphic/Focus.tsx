import React, { useState, useEffect, CSSProperties } from 'react';

import { cx, css } from 'linaria';
import forOwn from 'lodash/forOwn';

import { Dimension, Box } from './types';

interface FocusGraphicData {
	dimensions: {
		/**
		 * The parent container dimension.
		 */
		container: Dimension;

		/**
		 * The image dimension.
		 */
		image: Dimension;
	};

	/**
	 * The inset box.
	 */
	inset?: Box;
}

// Union to the children tag types
type FocusGraphicProps = FocusGraphicData &
	React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;

const FocusGraphicCss = css`
	@apply absolute min-w-full min-h-full max-w-none max-h-none;
	transition: all 0.3s;
`;

const FocusGraphic: React.RefForwardingComponent<
	HTMLImageElement,
	FocusGraphicProps
> = (props, ref) => {
	const { dimensions, inset: insetBox, src, className, ...rest } = props;
	const { container, image: element } = dimensions;

	// create the state for this image
	const [bound, setBound] = useState<CSSProperties>();
	const [inset, setInset] = useState<CSSProperties>();

	useEffect(() => {
		// container dimensions
		const { width: containerWidth, height: containerHeight } = container;
		// element dimensions
		const { width: elementWidth, height: elementHeight } = element;
		// compute the ratio between element and container
		const widthRatio = elementWidth / containerWidth;
		const heightRatio = elementHeight / containerHeight;
		// create new styles
		const boundStyles: CSSProperties = { maxHeight: '', maxWidth: '' };
		// bind the width or the height accordingly
		if (elementWidth > containerWidth && elementHeight > containerHeight) {
			if (widthRatio > heightRatio) boundStyles.maxHeight = '100%';
			else boundStyles.maxWidth = '100%';
		}
		// update the state
		setBound(boundStyles);
	}, [container.width, container.height, element.width, element.height]);

	useEffect(() => {
		// convert the passed value to percentage
		const TO_PERCENTAGE = 100;
		// number of digits to use for round
		const NUM_DIGITS = 2;

		// create the new inset styles
		const insetStyles: CSSProperties = {};
		// iterate through the box for the position
		forOwn(insetBox, (value, key) => {
			// get the side
			const side = key as keyof Box;
			// move the element negatively to its parent
			insetStyles[side] = value
				? `-${(value * TO_PERCENTAGE).toFixed(NUM_DIGITS)}%`
				: '0px';
		});
		// update the styles
		setInset(insetStyles);
	}, [insetBox?.top, insetBox?.right, insetBox?.left, insetBox?.bottom]);

	return (
		<img
			ref={ref}
			className={cx(FocusGraphicCss, className)}
			src={src}
			style={{ ...bound, ...inset }}
			alt=""
			{...rest}
		/>
	);
};

export default React.forwardRef(FocusGraphic);
