import React from 'react';

import { cx } from 'linaria';

import { SizingPresetSettings } from '~/storyblok/components/sizing-preset-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getSizingPresetClasses = (settings: SizingPresetSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size); // ${screen}

				return cx(
					setting.width && screen + setting.width,
					setting.height && screen + setting.height
				);
			})
		);
	}

	// return an empty string for no classes to apply
	return null;
};
