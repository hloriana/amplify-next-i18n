import React, {
	FunctionComponent,
	DetailedHTMLProps,
	HTMLAttributes,
	useState,
	ClassAttributes,
	useContext
} from 'react';

import { MediaContext } from 'react-media-query-hoc';
import { Slider } from 'react-soft-slider';
import { StoryblokComponent } from 'storyblok-js-client';
import { cx, css } from 'linaria';
import SbEditable from 'storyblok-react';

import { Icon } from '~/components/kit';

// Storyblok stuff
import { CarouselBehaviorHideSubModule } from '~/storyblok/components/carousel-behavior-hide-sub-module/definition';
import { CarouselModule } from '~/storyblok/components/carousel-module/definition';
import {
	getMarginSpacingComponentClasses,
	getPaddingSpacingComponentClasses
} from '~/components/settings/SpacingComponent';
import Components from '~/components';
import ModuleWrap from '~/components/other/ModuleWrap';

import { getSlidesClasses } from '../settings/SlidesColumn';
import useScreenSize from '~/hooks/useScreenSize';

// SECTION Sub Module - Slide wrapper
const CarouselSlide: FunctionComponent<
	{
		content: StoryblokComponent<string>;
		index: number;
		total: number;
	} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
	const { content, className, ...rest } = props;

	return (
		<article
			aria-label="slide"
			className={cx(className, 'w-full h-full flex flex-col')}
			data-name="carousel-slide-module"
			{...rest}
		>
			{Components(content)}
		</article>
	);
};

// SECTION Sub Module - Carousel hidden on certain breakpoint
const CarouselHide: FunctionComponent<{
	content: CarouselBehaviorHideSubModule;
	carousel: CarouselModule;
}> = (props) => {
	const { content, carousel } = props;

	// create the breakpoint for which we want to hide the carousel
	const media = useContext<any>(MediaContext);

	// from the specified media don't render the carousel anymore
	if (media[content.screen_size]) {
		return (
			<>{carousel.body && carousel.body.map((blok) => Components(blok))}</>
		);
	}

	// otherwise we render the default carousel
	return <CarouselDefault content={carousel} />;
};

// SECTION Sub Module - DEFAULT carousel
const controlsBreakpoint = 'md';
const bleedOutWidth = 16;
const CarouselCss = css`
	width: calc(100% + ${bleedOutWidth * 2}px);
	padding: 0 ${bleedOutWidth}px;
	position: relative;
	left: -${bleedOutWidth}px;
	right: -${bleedOutWidth}px;
`;
const CarouselPagerCss = css`
	transition: width 0.2s ease;
`;
const CarouselDefault: FunctionComponent<{
	content: CarouselModule;
}> = (props) => {
	const { content } = props;
	// NOTE the padding is added to the pager and the margin to the carousel

	// carousel slides' index
	const [index, setIndex] = useState(0);
	// the alignment of the pager within the line
	const pagerAlignment = content.pager_justify || 'center';

	// create the breakpoint for which we want to hide the carousel
	const media = useContext<any>(MediaContext);

	const screen = useScreenSize();
	// the number of columns per slides

	const slidesColumns =
		content.columns_settings &&
		content.columns_settings.find((x) => x.screen_size === screen) &&
		content.columns_settings.find((x) => x.screen_size === screen)
			?.slides_columns
			? content.columns_settings.find((x) => x.screen_size === screen)
					?.slides_columns
			: content.slides_columns || '4';

	// FIXME this is hardcoded
	// should get the columns of the grid from the theme and compute the correct index range and the enable variable
	// using the media[screenSize]

	// bound the drag event based on the slides column number
	const indexRange: number[] = [];
	if (media.md) {
		if (slidesColumns === '4' && content.body.length > 2)
			indexRange.push(0, -2);
		else if (slidesColumns === '6' && content.body.length > 1)
			indexRange.push(0, -1);
		else if (slidesColumns === '3' && content.body.length > 3)
			indexRange.push(0, -3);
		else indexRange.push(0, content.body.length - 1);
	} else indexRange.push(0, content.body.length - 1);

	let enabled = true;
	if (media.md) {
		if (slidesColumns === '4' && content.body.length < 4) enabled = false;
		else if (slidesColumns === '6' && content.body.length < 3) enabled = false;
		else if (slidesColumns === '3' && content.body.length < 5) enabled = false;
		else if (slidesColumns === '12' && content.body.length < 2) enabled = false;
	} else if (content.body.length < 2) enabled = false;

	// bind the indexes
	// eslint-disable-next-line prefer-const
	let [minIndex, maxIndex] = indexRange || [0, content.body.length - 1];
	maxIndex = maxIndex > 0 ? maxIndex : content.body.length - 1 + maxIndex;
	// handle new index
	const handleNewIndex = (newIndex: number) => {
		if (newIndex < minIndex) setIndex(minIndex);
		else if (newIndex > maxIndex) setIndex(maxIndex);
		else setIndex(newIndex);
	};
	// simple fuctions to compute if the buttons should be shown or not
	const hasNext = () => index < maxIndex && enabled;
	const hasPrevious = () => index > minIndex && enabled;

	return (
		<ModuleWrap settings={content.module_settings}>
			<div
				className={cx(
					'flex flex-col z-0',
					getMarginSpacingComponentClasses(content.spacing_settings)
				)}
				data-name="carousel-module"
			>
				<div className="relative">
					<div
						className={cx(
							CarouselCss,
							content.overflow_breakpoint &&
								`${content.overflow_breakpoint}:overflow-hidden`,
							'z-10',
							'gud-carousel'
						)}
					>
						<Slider
							enabled={enabled}
							index={index}
							onIndexChange={setIndex}
							draggedScale={1}
							trailingDelay={0}
							indexRange={indexRange as [number, number]}
							className={getSlidesClasses(
								content.columns_settings,
								content.slides_columns
							)}
							slideClassName="gud-carousel-slide"
						>
							{content.body &&
								content.body.map((blok, i) => (
									<CarouselSlide
										// eslint-disable-next-line no-underscore-dangle
										key={`slide-${blok._uid}`}
										content={blok}
										index={i}
										total={content.body.length}
									/>
								))}
						</Slider>
					</div>
					<div
						className={cx(
							`z-20 absolute top-0 left-0 right-0 h-full hidden pointer-events-none`,
							`${controlsBreakpoint}:flex flex-row align-items-center`
						)}
					>
						<button
							type="button"
							className={cx(
								'-mx-6 w-12 h-12 rounded-full bg-white shadow pointer-events-auto',
								!hasPrevious() && 'hidden'
							)}
							aria-label="previous"
							onClick={() => {
								handleNewIndex(index - 1);
							}}
						>
							<Icon type="icons" icon="chevron-left" className="m-4" />
						</button>
						<div className="flex-grow" />
						<button
							type="button"
							className={cx(
								'-mx-6 w-12 h-12 rounded-full bg-white shadow pointer-events-auto',
								!hasNext() && 'hidden'
							)}
							aria-label="next"
							onClick={() => {
								handleNewIndex(index + 1);
							}}
						>
							<Icon type="icons" icon="chevron-right" className="m-4" />
						</button>
					</div>
				</div>

				{enabled && (
					<div
						className={cx(
							'z-30 flex',
							`justify-content-${pagerAlignment}`,
							getPaddingSpacingComponentClasses(content.spacing_settings)
						)}
					>
						{content.body &&
							content.body.map((blok, i) => {
								// REVIEW is this bad for accessibility?
								// don't render extra dots
								if (i < minIndex || i > maxIndex) return null;

								return (
									<button
										type="button"
										// eslint-disable-next-line no-underscore-dangle
										key={`pager-${blok._uid}`}
										className={cx(
											CarouselPagerCss,
											content.variant && content.variant === 'dark'
												? 'bg-white'
												: 'bg-ink-black',
											'h-1 mx-1 rounded-full',
											index === i ? 'w-4' : 'w-1'
										)}
										aria-label={`slide ${i + 1}`}
										onClick={() => {
											handleNewIndex(i);
										}}
									/>
								);
							})}
					</div>
				)}
			</div>
		</ModuleWrap>
	);
};

// SECTION Utility - Behavior renderer
const CarouselBehavior: FunctionComponent<
	{
		content: CarouselBehaviorHideSubModule;
		carousel: CarouselModule;
	} & ClassAttributes<HTMLElement> &
		HTMLAttributes<HTMLElement>
> = (props) => {
	// NOTE ref would be ignored due to the generics
	const { content: behavior, carousel, children, ref, ...rest } = props;

	// render the correct one
	switch (behavior?.component) {
		case 'carousel_behavior_hide_sub_module': {
			return <CarouselHide content={behavior} carousel={carousel} {...rest} />;
		}

		default: {
			// default behavior
			return <CarouselDefault content={carousel} />;
		}
	}
};

// SECTION Module - Storyblok wrapper
const StoryblokCarousel: FunctionComponent<{
	content: CarouselModule;
}> = (props) => {
	const { content } = props;
	// NOTE the padding is ignore atm

	// behavior
	const behavior = content.behavior?.[0];

	return (
		<SbEditable content={content}>
			<CarouselBehavior content={behavior} carousel={content} />
		</SbEditable>
	);
};

export default StoryblokCarousel;
