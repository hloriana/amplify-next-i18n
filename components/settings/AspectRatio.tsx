import React from 'react';

import { cx } from 'linaria';

import { AspectRatioSettings } from '~/storyblok/components/aspect-ratio-settings/definition';

// see https://css-tricks.com/aspect-ratio-boxes/

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getAspectRatioClasses = (settings: AspectRatioSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size);

				return cx(setting.ratio && `${screen}ratio-${setting.ratio}`);
			})
		);
	}

	// return an empty string for no classes to apply
	return null;
};
