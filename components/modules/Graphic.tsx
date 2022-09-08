import React, {
	FunctionComponent,
	useRef,
	useMemo,
	useState,
	useContext
} from 'react';

import { MediaContext } from 'react-media-query-hoc';
import { Waypoint } from 'react-waypoint';
import { cx, css } from 'linaria';
import Image from 'next/image';
import SbEditable from 'storyblok-react';

import {
	Dimension,
	Point,
	AssetBoxes,
	TailwindScreens
} from '~/components/kit/Graphic/types';
import { computeImageBoxes } from '~/components/kit/Graphic/utils';
import { storyblokAsset } from '~/components/kit/Graphic/assets';

import LazyFocusImage from '~/components/kit/Graphic/LazyFocus';

import { AspectRatioSettings } from '~/storyblok/components/aspect-ratio-settings/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { getAspectRatioClasses } from '~/components/settings/AspectRatio';
import { getMarginSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import { getSizingPresetClasses } from '~/components/settings/SizingPreset';
import Gradient from '~/components/modules/Gradient';
import ModuleWrap from '~/components/other/ModuleWrap';
import useScreenSize from '~/hooks/useScreenSize';

import { ActionBehavior } from '~/components/modules/Action';
import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

interface GraphicModuleProps {
	content: GraphicModule;
	wrap?: boolean;
	profilePicture?: boolean;
}

type GraphicComponent = GraphicModuleProps &
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

// if we are in staging or production we enable optimizations
const hasOptimizations = ['staging', 'production'].includes(
	`${process.env.ENVIRONMENT}`
);

const SvgGraphicCss = css`
	@apply absolute min-h-full min-w-full;
`;

const Graphic: FunctionComponent<GraphicComponent> = (props: any) => {
	const { content, profilePicture } = props;
	const { gradient: gradients = [], sizing_settings: sizingSetting = [] } =
		content;
	let { aspect_ratio_settings: aspectRatios = [] } = content;

	if (profilePicture) {
		// Sepecific settings for profile pictures

		aspectRatios = aspectRatios.map((aspectRatio: AspectRatioSettings) => {
			return { ...aspectRatio, ratio: '1/1' };
		});

		content.spacing_settings = content.spacing_settings.map(
			(setting: SpacingComponentSettings) => {
				return { ...setting, margin_value: '0' };
			}
		);

		content.border_radius = 'rounded-full';
	}

	// aspect ratio defaults
	const DEFAULT_ASPECT_RATIO = '4/3';
	// get classes from settings
	const sizingPresetClasses = getSizingPresetClasses(sizingSetting);
	const aspectRatioClasses =
		getAspectRatioClasses(aspectRatios) || `ratio-${DEFAULT_ASPECT_RATIO}`;

	// state to check if we should render the images
	const [inViewport, setInViewport] = useState(false);

	// ref to the container for its dimension
	const containerRef = useRef<HTMLDivElement>(null);
	const containerDimension: Dimension =
		containerRef.current?.getBoundingClientRect() || {
			width: 0,
			height: 0
		};

	const mediaContext = useContext<any>(MediaContext);

	// extract graphic
	const {
		src,
		x: focusX,
		y: focusY
	} = !mediaContext.md && content.mobile_graphic && content.mobile_graphic.src
		? content.mobile_graphic
		: content.graphic;

	// prevent storyblok null src
	if (!src) return null;
	// focus point
	const focus: Point = { x: parseFloat(focusX), y: parseFloat(focusY) };
	// NOTE we only accept an asset hosted on Storyblok
	const asset = storyblokAsset(src);
	// REVIEW how to handle this case?
	if (!asset) throw new Error('not a storyblok asset');
	// compute the image boxes for this image
	const imageBoxes = useMemo<
		Partial<Record<TailwindScreens, AssetBoxes>>
	>(() => {
		const computedBoxes = aspectRatios.reduce(
			(
				screens: Partial<Record<TailwindScreens, AssetBoxes>>,
				setting: AspectRatioSettings
			) => {
				// get the screen
				const { screen_size: screen, ratio } = setting;
				// image boxes
				const boxes = computeImageBoxes(ratio, asset.dimension, focus);

				return {
					...screens,
					[screen]: boxes
				};
			},
			// use the default aspect ratio
			{
				'': computeImageBoxes(DEFAULT_ASPECT_RATIO, asset.dimension, focus)
			}
		);
		// REVIEW this is making the assumption that breakpoints uses only (min-width)
		// use the other box as fallback
		if (!computedBoxes.md) computedBoxes.md = computedBoxes[''];
		if (!computedBoxes.lg) computedBoxes.lg = computedBoxes.md;
		if (!computedBoxes.xl) computedBoxes.xl = computedBoxes.lg;

		return computedBoxes;
	}, [aspectRatios, src, focus]);

	// current screen size
	const screen = useScreenSize();

	const getPlaceholderSrc = (width: number, height: number) =>
		`data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

	const actionBehavior = content.action?.[0]?.action_behavior?.[0];

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<div
					className={cx(
						// NOTE we only use margin, padding is ignored (we use it for aspect ratio)
						getMarginSpacingComponentClasses(content.spacing_settings)
					)}
				>
					<div
						ref={containerRef}
						className={cx(
							'overflow-hidden relative flex flex-row align-items-start',
							sizingPresetClasses &&
								content.is_centered &&
								'justify-content-center',
							!sizingPresetClasses && aspectRatioClasses,
							content.border_radius
						)}
						data-name="graphic-module"
					>
						{/* simple lazyloading */}
						<Waypoint
							bottomOffset="-20%"
							onEnter={(e: any) => {
								if (e.currentPosition === 'inside') setInViewport(true);
							}}
						/>
						{/* if in the viewport, load it */}
						{(asset.svg && (
							<>
								<img
									className={cx(
										content.border_radius,
										sizingPresetClasses || SvgGraphicCss,
										'object-cover'
									)}
									src={asset.src}
									alt=""
								/>
								{/* add gradients to the image */}
								{gradients.map((gradient: any) => (
									<Gradient
										// eslint-disable-next-line no-underscore-dangle
										key={gradient._uid}
										content={gradient}
										className={cx(
											'h-full absolute',
											content.border_radius,
											sizingPresetClasses,
											!sizingPresetClasses && 'w-full top-0 left-0'
										)}
									/>
								))}
							</>
						)) ||
							(inViewport && (
								<div className={cx(sizingPresetClasses)}>
									{asset.svg || sizingPresetClasses ? (
										<img
											src={asset.src}
											alt=""
											className={cx(
												content.border_radius,
												sizingPresetClasses || SvgGraphicCss,
												'object-cover'
											)}
										/>
									) : (
										<LazyFocusImage
											className={cx(content.border_radius)}
											container={containerDimension}
											asset={asset}
											boxes={imageBoxes}
											alt=""
										/>
									)}

									{/* add gradients to the image */}
									{gradients.map((gradient: any) => (
										<Gradient
											// eslint-disable-next-line no-underscore-dangle
											key={gradient._uid}
											content={gradient}
											className={cx(
												'h-full absolute',
												content.border_radius,
												sizingPresetClasses,
												!sizingPresetClasses && 'w-full top-0 left-0'
											)}
										/>
									))}
								</div>
							)) || (
								<Image
									className={cx(
										content.border_radius,
										sizingPresetClasses || SvgGraphicCss,
										'object-cover'
									)}
									src={getPlaceholderSrc(
										asset.dimension.width,
										asset.dimension.height
									)}
									alt=""
									// width={asset.dimension.width}
									// height={asset.dimension.height}
									layout="fill"
									objectFit="fill"
								/>
							)}
						{actionBehavior && (
							<ActionBehavior
								content={actionBehavior}
								className={cx('absolute top-0 left-0 bottom-0 right-0')}
							/>
						)}
					</div>
				</div>
			</ModuleWrap>
		</SbEditable>
	);
};

export default Graphic;
