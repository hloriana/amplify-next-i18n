import React, { useState, useEffect, CSSProperties } from 'react';

import { cx, css } from 'linaria';
import forOwn from 'lodash/forOwn';

import { SBLoader } from './loader';

import { Dimension, Box, Asset, TailwindScreens, AssetBoxes } from './types';
import { generateLQIPAsset } from './assets';
import useScreenSize from '~/hooks/useScreenSize';

interface LazyFocusGraphicData {
	/**
	 * The parent container dimension.
	 */
	container: Dimension;

	/**
	 * The asset to use.
	 */
	asset: Asset;

	/**
	 * The boxes for this asset.
	 */
	boxes: Partial<Record<TailwindScreens, AssetBoxes>>;
}

// Union to the children tag types
type LazyFocusGraphicProps = LazyFocusGraphicData &
	React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;

const FocusGraphicCss = css`
	@apply absolute min-w-full min-h-full max-w-none max-h-none;
	transition: all 0.3s;
`;

const LazyFocusGraphic: React.RefForwardingComponent<
	HTMLImageElement,
	LazyFocusGraphicProps
> = (props, ref) => {
	const { container, asset, boxes, className, ...rest } = props;
	// element to position
	const element = asset.dimension;

	// current screen size
	const screen = useScreenSize();
	const insetBox = boxes[screen]?.inset;

	// state to check if we should render the images
	const [loaded, setLoaded] = useState(false);
	/// FIXME: use storyblok image service for all images
	const [lazySrc, setLazySrc] = useState(generateLQIPAsset(asset, 375).src);

	// create the state for this image
	const [bound, setBound] = useState<CSSProperties>();
	const [inset, setInset] = useState<CSSProperties>();

	const size = {
		width: element.width,
		height: element.height
	};

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
			if (widthRatio > heightRatio) {
				boundStyles.maxHeight = '100%';
				size.height = container.height;
				// size.width = element.width;
			} else {
				boundStyles.maxWidth = '100%';
				size.width = container.width;
				// size.height = element.height; //* container.width / element.width;
			}
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
			className={cx(
				'absolute min-w-full min-h-full max-w-none max-h-none',
				className,
				!loaded && 'object-cover'
			)}
			src={
				!lazySrc.match(/(.*img2.storyblok\.com.*)\/(f\/.+)/)
					? SBLoader({ src: lazySrc, width: element.width })
					: lazySrc
			}
			onLoad={() => {
				setLazySrc(asset.src);
				setLoaded(true);
			}}
			style={{ ...bound, ...inset }}
			alt=""
			{...rest}
		/>
	);
};

export default React.forwardRef(LazyFocusGraphic);
