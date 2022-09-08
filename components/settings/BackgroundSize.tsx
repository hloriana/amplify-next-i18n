import { cx } from 'linaria';

import { BackgroundSizeSettings } from '~/storyblok/components/background-size-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getBackgroundSizeClasses = (
	settings: BackgroundSizeSettings[]
) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size);

				return cx(
					setting.horizontal_size || setting.vertical_size
						? `${screen}bg${setting.horizontal_size &&
								`-${setting.horizontal_size}`}${setting.vertical_size &&
								`-${setting.vertical_size}`}`
						: `${screen}bg-auto`
				);
			})
		);
	}

	// return null if no settings
	return null;
};
