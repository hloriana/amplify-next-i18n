import React, { FunctionComponent, useEffect, useState } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { ActionBehavior } from './Action';
import { getColoringClasses } from '../settings/Coloring';
import {
	getMarginSpacingComponentClasses,
	getPaddingSpacingComponentClasses
} from '../settings/SpacingComponent';

import { BannerModule } from '~/storyblok/components/banner-module/definition';
import Components from '~/components';
import { Icon } from '../kit';

const getBannerClasses = (banner: BannerModule) =>
	cx(
		getColoringClasses(banner.coloring_settings),
		getMarginSpacingComponentClasses(banner.spacing_settings),
		getPaddingSpacingComponentClasses(banner.spacing_settings)
	);

const Banner: FunctionComponent<{
	content: BannerModule;
	position: 'top' | 'bottom';
}> = (props) => {
	const { content, position } = props;

	const bannerClasses = getBannerClasses(content);

	const [showBanner, setShowBanner] = useState(false);
	const [showOnScroll, setShowOnScroll] = useState(Number(content.scroll_position_show) === 0	&& content.scroll_position_hide !== '0');

	const handleScroll = () => {
		const scrollPercentage =
			(100 * window.scrollY) /
			(document.documentElement.scrollHeight -
				document.documentElement.clientHeight);
		setShowOnScroll(
			(content.scroll_position_show
				? scrollPercentage >= Number(content.scroll_position_show)
				: true) &&
				(content.scroll_position_hide
					? scrollPercentage < Number(content.scroll_position_hide)
					: true)
		);
	};

	useEffect(() => {
		let mounted = true;

		window.addEventListener('scroll', handleScroll, { passive: true });
		const timer = setTimeout(
			() => {
				if (mounted) {
					setShowBanner(true)
				}
			},
			content.time_to_appear * 1000
		);

		// Specify how to clean up after this effect:
		return function cleanup() {
			mounted = false;
			clearTimeout(timer);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const actionBehavior = content.action?.[0];

	const bannerContent = () => {
		return actionBehavior

			? (<ActionBehavior content={actionBehavior}>
				<div className={bannerClasses}>
					<div className={cx('gud-content-grid')}>
						{content.body && content.body.map((blok) => Components(blok))}
					</div>
				</div>				
			</ActionBehavior>)

			: (<div className={cx(bannerClasses, 'flex col justify-content-around')}>				
				<div className={cx('gud-content-grid', 'w-full')}>
					{content.body && content.body.map((blok) => Components(blok))}
				</div>
				<div className="text-right align-self-center ml-auto">
					<button
						type="submit"
						onClick={() => {
							setShowBanner(false);
						}}
						onKeyPress={() => {
							setShowBanner(false);
						}}
					>
						<Icon className="w-4 fill-current" type="icons" icon="close" />
					</button>
				</div>
			</div>);
	}

	return (
		<SbEditable content={content}>
			{content.enabled && showBanner && showOnScroll && (
				<div
					className={cx(
						'z-100',
						position === 'top'
							? 'top-0'
							: 'fixed w-full bottom-0'
					)}
				>
					{bannerContent()}
						
				</div>
			)}
		</SbEditable>
	);
};

export default Banner;
