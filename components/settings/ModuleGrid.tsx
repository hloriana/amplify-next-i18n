import React from 'react';

import { cx } from 'linaria';

import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getModuleGridClasses = (settings: ModuleGridSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			// these settings applies because the module live in a grid container (its parent)
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size);

				return cx(
					setting.justify && `${screen}justify-self-${setting.justify}`,
					setting.align && `${screen}align-self-${setting.align}`,
					setting.column_span && `${screen}col-span-${setting.column_span}`,
					setting.column_start && `${screen}col-start-${setting.column_start}`,
					setting.column_end && `${screen}col-end-${setting.column_end}`,
					setting.row_start && `${screen}row-start-${setting.row_start}`,
					setting.row_end && `${screen}row-end-${setting.row_end}`,
					setting.z_index && `${screen}z-${setting.z_index}`
				);
			})
		);
	}

	// return an empty string for no classes to apply
	return null;
};
