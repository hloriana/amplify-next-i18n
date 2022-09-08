import { cx } from 'linaria';

import { BorderSettings } from '~/storyblok/components/border-settings/definition';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');
const getBorderWidth = (width: string) =>
	width && width !== '1' ? `-${width}` : '';
const getBorderSide = (side: string) => (side ? `-${side}` : '');
const getBorderColor = (color: string, shade: string) =>
	[color ? `-${color}` : '', `${shade}`].join('');

export const getBorderClasses = (settings: BorderSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size);
				const borderWidth = getBorderWidth(setting.border_width);
				const borderSide = getBorderSide(setting.border_side);
				const borderColor = getBorderColor(
					setting.border_colour,
					setting.border_shade
				);

				return cx(
					setting.border_width && `${screen}border${borderSide}${borderWidth}`,
					setting.border_colour && `${screen}border${borderColor}`
				);
			})
		);
	}

	// return null if no settings
	return null;
};
