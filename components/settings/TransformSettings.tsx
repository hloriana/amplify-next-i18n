import { cx } from 'linaria';

import { TransformSettings } from '~/storyblok/components/transform-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getTransformClasses = (settings: TransformSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size);

				return cx(
					'transform',
					setting.translate_x &&
						`${screen}${setting.translate_x_negative ? '-' : ''}translate-x-${
							setting.translate_x
						}`,
					setting.translate_y &&
						`${screen}${setting.translate_y_negative ? '-' : ''}translate-y-${
							setting.translate_y
						}`,
					setting.rotation &&
						`${screen}${setting.rotation_anticlockwise ? '-' : ''}rotate-${
							setting.rotation
						}`
				);
			})
		);
	}

	// return null if no settings
	return null;
};
