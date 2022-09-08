import React, { useState } from 'react';

import { cx, css } from 'linaria';
import head from 'lodash/head';
import keys from 'lodash/keys';
import last from 'lodash/last';

import { AssetBoxes, Sizes, TailwindScreens, Asset } from './types';
import { generateOptimizeAssets, generateLQIPAsset } from './assets';
import { getQueries } from '~/utils/responsive';

interface ResponsiveGraphicData {
	/**
	 * The asset of this responsive graphic.
	 */
	asset: Asset;

	/**
	 * The boxes for this asset.
	 */
	boxes: Partial<Record<TailwindScreens, AssetBoxes>>;

	/**
	 * The sizes of the image to create.
	 */
	optimization: Sizes;

	/**
	 * A fallback size, as a [key, index] value from sizes.
	 */
	fallback: [string, number];

	/**
	 * An unique value for this element to identify generated source sets.
	 */
	uid: string;
}

// union to the children tag types
type ResponsiveGraphicProps = ResponsiveGraphicData &
	React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;

const ResponsiveGraphicCss = css`
	@apply absolute min-w-full min-h-full;
`;

const LQIPResponsiveGraphicCss = css`
	@apply max-w-none;
`;

const ResponsiveGraphic: React.RefForwardingComponent<
	HTMLImageElement,
	ResponsiveGraphicProps
> = (props, ref) => {
	const {
		src,
		uid,
		asset,
		optimization: sizes,
		boxes,
		fallback,
		className,
		...rest
	} = props;

	// state to check if we should render the images
	const [loaded, setLoaded] = useState(false);
	const [lazySrc, setLazySrc] = useState(generateLQIPAsset(asset, 375).src);

	// get tailwind queries
	const queries = getQueries();
	// get the fallback
	let fallbackSrc = asset.src;
	// the src set
	const srcSet: any[] = [];
	// FIXME go through the boxes in the correct order
	['xl', 'lg', 'md', ''].forEach(screen => {
		const box = boxes[screen as keyof typeof boxes];
		// if no box is there, skip
		if (!box) return;
		// type of optimization for this screen size
		const widths = sizes[screen as keyof typeof sizes];
		// get the images optimized

		['jpeg', 'webp'].forEach(format => {
			const images = generateOptimizeAssets(asset.src, box, widths, format);
			// push into the src set
			srcSet.push({
				screen,
				format,
				images: images.map((image, index) => {
					// set the fallback
					if (head(fallback) === screen && last(fallback) === index)
						fallbackSrc = images[index].src;

					return `${image.src} ${image.dimension.width}w`;
				})
			});
		});
	});

	return (
		<>
			<picture>
				{/* NOTE browser will pick first match */}
				{loaded &&
					srcSet.map(set => {
						const { screen, format, images } = set;
						// don't render empty sources
						if (images.length === 0) return null;

						// render a picture source tag
						return (
							<source
								media={queries[screen]}
								key={`set-${screen}-${format}-${uid}`}
								srcSet={images.join(',')}
								type={`image/${format}`}
							/>
						);
					})}
				{/* final image */}
				<img
					ref={ref}
					className={cx(
						!loaded && LQIPResponsiveGraphicCss,
						ResponsiveGraphicCss,
						className
					)}
					src={lazySrc}
					onLoad={() => {
						setLazySrc(fallbackSrc);
						setLoaded(true);
					}}
					alt=""
					{...rest}
				/>
			</picture>
		</>
	);
};

export default React.forwardRef(ResponsiveGraphic);
