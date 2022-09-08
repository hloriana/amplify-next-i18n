import React from 'react';

import { cx } from 'linaria';

import { SpacingLayoutSettings } from '~/storyblok/components/spacing-layout-settings/definition';

// REVIEW should this be a tailwind plugin?
const gud = {
	// space name : (screen size : space value)
	xs: {
		default: 4,
		md: 8,
		lg: 12,
		xl: 16
	},
	s: {
		default: 8,
		md: 12,
		lg: 16,
		xl: 24
	},
	m: {
		default: 12,
		md: 16,
		lg: 24,
		xl: 32
	},
	l: {
		default: 16,
		md: 24,
		lg: 32,
		xl: 40
	},
	xl: {
		default: 24,
		md: 32,
		lg: 40,
		xl: 48
	},
	xxl: {
		default: 32,
		md: 40,
		lg: 48,
		xl: 56
	}
};

const screenPrefix = (prefix: string) =>
	prefix && prefix !== 'default' ? `${prefix}:` : '';

const constructStyleClass = (
	prefix: string,
	type: string,
	value: keyof typeof gud
) =>
	cx(
		...Object.keys(gud[value]).map(screen => {
			const spacingValues = gud[value];

			return `${screenPrefix(screen)}${prefix}${type}-${
				// FIXME better typescript interface
				spacingValues[screen as keyof typeof spacingValues]
			}`;
		})
	);

export const getSpacingLayoutClasses = (settings: SpacingLayoutSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(spacing =>
				cx(
					// spacing.margin_value &&
					// 	constructStyleClass(
					// 		'm',
					// 		spacing.margin_type,
					// 		// FIXME better typescript interface
					// 		spacing.margin_value as keyof typeof gud
					// 	),
					spacing.padding_value &&
						constructStyleClass(
							'p',
							spacing.padding_type,
							// FIXME better typescript interface
							spacing.padding_value as keyof typeof gud
						)
				)
			)
		);
	}

	// return an empty string for no classes to apply
	return null;
};
