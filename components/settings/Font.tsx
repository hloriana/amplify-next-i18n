import React from 'react';

import { cx } from 'linaria';

import { FontSettings } from '~/storyblok/components/font-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getAlignmentFontClasses = (settings: FontSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map((setting) => {
				const screen = screenPrefix(setting.screen_size);

				return cx(setting.alignment && `${screen}text-${setting.alignment}`);
			})
		);
	}

	// return an empty string for no classes to apply
	return null;
};

export const getSizeWeightFontClasses = (settings: FontSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map((setting) => {
				const screen = screenPrefix(setting.screen_size);

				return cx(
					setting.weight && `${screen}font-${setting.weight}`,
					setting.size && `${screen}typo-${setting.size}`
				);
			})
		);
	}

	// return an empty string for no classes to apply
	return null;
};
