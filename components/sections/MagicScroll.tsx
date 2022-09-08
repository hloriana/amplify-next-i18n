/* eslint-disable no-underscore-dangle */
import React, {
	FunctionComponent,
	useState,
	useRef,
	useCallback,
	useContext
} from 'react';

import { Controller, Scene } from 'react-scrollmagic';
import { EventData, Swipeable } from 'react-swipeable';
import { cx, css } from 'linaria';
import SbEditable from 'storyblok-react';
import useSSR from 'use-ssr';

import { Icon } from '~/components/kit';

import { MagicScrollSection } from '~/storyblok/components/magic-scroll-section/definition';
import Components from '~/components';
import StoiresContext from '~/contexts/StoriesContext';

const SingleSlideCss = css`
	transition: all 0.3s;
	grid-auto-rows: min-content;
`;

const MagicScrollGrid = css`
	grid-template-rows: 1fr auto 1fr auto 2fr;
`;

const LinkAdjust = css`
	transform: translateX(100%);
`;

const MagicScroll: FunctionComponent<{
	content: MagicScrollSection;
}> = (props) => {
	const { content } = props;

	const [active, setActive] = useState(0);

	const navRef = useRef<HTMLUListElement>(null);
	const sectionRef = useRef<HTMLElement>(null);

	const { isBrowser } = useSSR();

	const [height, setHeight] = useState(0);

	const screenRef = useCallback((node) => {
		if (node !== null) {
			setHeight(node.getBoundingClientRect().height);
		}
	}, []);

	/*
	 * Simulates a fake scroll to above or below the section, depending on direction.
	 */
	const simulateScroll = (e: EventData) => {
		// Bail if the section is null
		if (!sectionRef?.current) {
			return;
		}

		const rect = sectionRef?.current?.getBoundingClientRect();

		// Scroll to top of the section by default
		let scrollTop = window.scrollY + rect.top + e.deltaY;

		if (e.dir === 'Up') {
			// Adjust scroll position to go to the last slide
			scrollTop += rect.height - window.innerHeight;
		}

		// Execute scroll
		window.scrollTo({ top: scrollTop, behavior: 'smooth' });
	};

	/*
	 * Navigate to the appropriate anchor
	 */
	const clickAnchor = (index: number) => {
		const anchor = navRef?.current?.children[index] as HTMLElement;
		anchor.click();
	};

	const handleSwipe = (progress: number, e: EventData) => {
		if (progress === 0 || progress === 1) {
			return;
		}

		if (e.dir === 'Down') {
			if (active !== 0) {
				clickAnchor(active - 1);
			} else {
				simulateScroll(e);
			}
		}

		if (e.dir === 'Up') {
			if (active !== content.body.length - 1) {
				clickAnchor(active + 1);
			} else {
				simulateScroll(e);
			}
		}
	};

	const screenDuration = 75;

	const skipAfter =
		content.skip_after_sections > -1
			? content.skip_after_sections - 1
			: content.body.length - 1 + (content.skip_after_sections - 1);

	const storyContext = useContext(StoiresContext);

	return (
		<SbEditable content={content}>
			<section className="relative" ref={sectionRef}>
				{content.body && (
					<Controller>
						<Scene
							duration={`${
								(content.body.length * height * screenDuration) / 100
							}`}
							triggerHook="onLeave"
							pin
						>
							{(progress: number, event: object) => {
								const currentActive = Math.min(
									Math.floor(progress * content.body.length),
									content.body.length - 1
								);

								setActive(currentActive);

								return (
									<div
										data-name="single-scene-wrapper"
										className={cx('h-screen')}
										ref={screenRef}
									>
										{content.body.map((blok, index) => (
											<Swipeable
												key={blok._uid}
												onSwiped={(e) => handleSwipe(progress, e)}
												{...{
													preventDefaultTouchmoveEvent:
														progress > 0 && progress < 1
												}}
												className={cx('absolute top-0 left-0 right-0 bottom-0')}
											>
												{Components(blok, storyContext.currentStoryUuid, {
													className: cx(
														SingleSlideCss,
														'absolute top-0 left-0 w-full h-full',
														(active === index && 'opacity-100 z-10') ||
															'opacity-0 z-0'
													)
												})}
											</Swipeable>
										))}
										<div
											className={cx(
												'h-full gud-content-grid relative',
												MagicScrollGrid
											)}
										>
											<ul
												className={cx(
													'relative z-10 col-end--1 row-start-2 md:row-start-4 flex flex-col align-items-end'
												)}
												ref={navRef}
											>
												{/* dot for navigations between sections */}
												{content.body.map((blok, index) => (
													<a
														key={`nav-link-${blok._uid}`}
														className={LinkAdjust}
														href={`#${blok._uid}`}
													>
														<li
															className={cx(
																'h-2 w-2 rounded-full my-1',
																(active === index && 'bg-white') ||
																	'bg-ui-mid-gray'
															)}
														>
															<span className="sr-only">Slide {index}</span>
														</li>
													</a>
												))}
												{/* arrow to skip entirely the scroll section */}
												{content.skip_after_sections && (
													<a
														className={LinkAdjust}
														href={`#end-${content._uid}`}
													>
														<li
															className={cx(
																'h-4 w-4 my-1 -mx-1',
																active > skipAfter ? 'visible' : 'invisible'
															)}
														>
															<Icon
																type="icons"
																icon="arrow-down"
																className="fill-current text-ui-mid-gray"
															/>
															<span className="sr-only">Skip scroll</span>
														</li>
													</a>
												)}
											</ul>
										</div>
									</div>
								);
							}}
						</Scene>
						{/* anchor for each section */}
						{content.body.map((blok, index) => {
							// Set the top at height relevant to index

							let top;
							let transform;
							let bottom;

							if (index < content.body.length - 1) {
								top = `${(index / content.body.length) * 100}%`;

								if (
									isBrowser &&
									window.CSS &&
									CSS.supports('transform', 'translateY(-calc(var(--vh, 1vh)))')
								) {
									transform = `translateY(-calc(var(--vh, 1vh) * ${
										(index / content.body.length) * 100
									}))`;
								} else {
									transform = `translateY(-${
										(index / content.body.length) * 100
									}vh)`;
								}
							} else if (
								isBrowser &&
								window.CSS &&
								CSS.supports('transform', 'translateY(-calc(var(--vh, 1vh)))')
							) {
								bottom = 'calc(var(--vh, 1vh) * 100)';
							} else {
								bottom = '100vh';
							}

							return (
								<a
									key={`anchor-${blok._uid}`}
									id={blok._uid}
									className={cx('absolute mt-px')}
									style={{
										top,
										transform,
										bottom
									}}
								>
									<span className="sr-only">Anchor {index}</span>
								</a>
							);
						})}
						{/* anchor to skip entirely the scroll section */}
						<a
							id={`end-${content._uid}`}
							className={cx('absolute mt-px')}
							style={{ top: '100%' }}
						>
							<span className="sr-only">Anchor skip scroll</span>
						</a>

						{/* REVIEW is this going to be a feature used as an option in storyblok? */}
						{/* {content.body.map(blok => (
							<Scene
								key={`scene-${blok._uid}`}
								duration="100%"
								pin
								triggerHook="onLeave"
							>
								<div className="flex" style={{ minHeight: '100%' }}>
									{Components(blok)}
								</div>
							</Scene>
						))} */}
					</Controller>
				)}
			</section>
		</SbEditable>
	);
};

export default MagicScroll;
/* eslint-enable no-underscore-dangle */
