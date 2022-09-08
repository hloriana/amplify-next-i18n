import React from 'react';

import { cx } from 'linaria';

import { SpacingComponentSettings } from '~/storyblok/components/spacing-component-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getMarginSpacingComponentClasses = (
	settings: SpacingComponentSettings[]
) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(spacing => {
				const screen = screenPrefix(spacing.screen_size);

				return cx(
					// margin mapping
					spacing.margin_value &&
						`${screen}${spacing.margin_negative ? '-' : ''}m${
							spacing.margin_type
						}-${spacing.margin_value}`
				);
			})
		);
	}

	// return null for no classes to apply
	return null;
};

export const getPaddingSpacingComponentClasses = (
	settings: SpacingComponentSettings[]
) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(spacing => {
				const screen = screenPrefix(spacing.screen_size);

				return cx(
					// padding mapping
					spacing.padding_value &&
						`${screen}p${spacing.padding_type}-${spacing.padding_value}`
				);
			})
		);
	}

	// return null for no classes to apply
	return null;
};

export const getSpacingComponentClasses = (
	settings: SpacingComponentSettings[]
) => {
	// if there are some settings
	if (settings) {
		return cx(
			getMarginSpacingComponentClasses(settings),
			getPaddingSpacingComponentClasses(settings)
		);
	}

	// return null for no classes to apply
	return null;
};
