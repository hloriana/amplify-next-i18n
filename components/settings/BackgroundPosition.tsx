import { cx } from 'linaria';

import { BackgroundPositionSettings } from '~/storyblok/components/background-position-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getBackgroundPositionClasses = (
	settings: BackgroundPositionSettings[]
) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size);

				return cx(
					setting.alignment_1 || setting.alignment_2
						? `${screen}bg${setting.alignment_1 &&
								`-${setting.alignment_1}`}${setting.adjustment_1 &&
								`-${setting.adjustment_1}`}${setting.alignment_2 &&
								`-${setting.alignment_2}`}${setting.adjustment_2 &&
								`-${setting.adjustment_2}`}`
						: `${screen}bg-center`
				);
			})
		);
	}

	// return center by default
	return 'bg-center';
};
