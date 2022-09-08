import React from 'react';

import { cx } from 'linaria';

import { BackgroundSettings } from '~/storyblok/components/background-settings/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';

import Gradient from '~/components/modules/Gradient';

import { getBackgroundPositionClasses } from '~/components/settings/BackgroundPosition';
import { getBackgroundSizeClasses } from '~/components/settings/BackgroundSize';
import { getTransformClasses } from '~/components/settings/TransformSettings';

export const getBackgroundElement = (settings: BackgroundSettings[]) => {
	// if there are some settings
	if (settings) {
		return settings.map(setting => {
			return setting.background.map(blok => {
				let output;

				switch (blok.component) {
					case 'gradient_module':
						output = (
							<Gradient
								key={blok._uid}
								content={blok}
								className={cx('h-full w-full top-0 left-0 absolute')}
							/>
						);
						break;

					case 'graphic_module':
						output = (
							<div
								key={blok._uid}
								className={cx(
									getBackgroundPositionClasses(setting.position_settings),
									getBackgroundSizeClasses(setting.size_settings),
									getTransformClasses(setting.transform_settings),
									'h-full w-full top-0 left-0 absolute bg-no-repeat'
								)}
								style={{
									backgroundImage: `url(${(blok as GraphicModule).graphic.src})`
								}}
							/>
						);
						break;

					default:
						output = <div>Module not valid</div>;
				}

				return output;
			});
		});
	}

	// return null if nothing is set
	return null;
};
