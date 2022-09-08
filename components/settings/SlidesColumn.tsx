import { cx } from 'linaria';

import { ColumnComponentSettings } from '~/storyblok/components/column-component-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getSlidesClasses = (
	settings: ColumnComponentSettings[],
	slidesColumns: string
) => {
	// if there are some settings
	if (settings && settings.length !== 0) {
		return cx(
			// these settings applies because the module live in a grid container (its parent)
			...settings.map((setting) => {
				const screen = screenPrefix(setting.screen_size);

				return cx(`${screen}gud-carousel-wrapper-${setting.slides_columns}`);
			}),
			!settings.find((x) => x.screen_size === '')
				? `gud-carousel-wrapper-${slidesColumns}`
				: ''
		);
	}

	return cx(`gud-carousel-wrapper-${slidesColumns}`);
};
