import React from 'react';

import { cx } from 'linaria';

import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getBodyFlexClasses = (settings: BodyFlexSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			settings.length !== 0 && 'flex', // this is has to be a flex container

			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size);

				return cx(
					setting.direction && `${screen}flex-${setting.direction}`,
					setting.justify && `${screen}justify-content-${setting.justify}`,
					// REVIEW should be items or content?
					setting.align && `${screen}align-items-${setting.align}`,
					setting.wrap && `${screen}flex-wrap`
				);
			})
		);
	}

	// return an empty string for no classes to apply
	return null;
};
