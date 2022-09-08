import React from 'react';

import { cx } from 'linaria';

import { BodyGridSettings } from '~/storyblok/components/body-grid-settings/definition';

export const getBodyGridClasses = (settings: BodyGridSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(setting =>
				cx(
					setting.grid_type && `gud-${setting.grid_type}-grid`,
					setting.justify && `justify-items-${setting.justify}`,
					setting.align && `align-content-${setting.align}`
				)
			)
		);
	}

	// return an empty string for no classes to apply
	return null;
};
