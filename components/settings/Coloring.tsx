import React from 'react';

import { cx } from 'linaria';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getColoringClasses = (settings: ColoringSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size); // ${screen}

				return cx(
					setting.text_color &&
						`${screen}text-${setting.text_color}${setting.text_shade}`,
					setting.background_color &&
						`${screen}bg-${setting.background_color}${setting.background_shade}`
				);
			})
		);
	}

	// return an empty string for no classes to apply
	return null;
};
