import React from 'react';

import { cx } from 'linaria';

import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';

import { ModalScrollBar } from '~/components/kit/Modal';

const screenPrefix = (prefix: string) => (prefix ? `${prefix}:` : '');

export const getModuleFlexClasses = (settings: ModuleFlexSettings[]) => {
	// if there are some settings
	if (settings) {
		return cx(
			// these settings applies because the module live in a flex container (its parent)
			...settings.map(setting => {
				const screen = screenPrefix(setting.screen_size);

				return cx(
					setting.flex_grow &&
						(setting.flex_grow === '0' ? `${screen}flex-grow-0` : `flex-grow`),
					setting.flex_shrink &&
						(setting.flex_shrink === '0'
							? `${screen}flex-shrink-0`
							: `flex-shrink`),
					setting.equal_width && 'flex-grow flex-basis-0',
					setting.scroll_container &&
						`${screen}h-0 ${screen}overflow-y-auto ${ModalScrollBar}`
				);
				// setting.justify && `${screen}justify-content-${setting.justify}`,
				// setting.align && `${screen}align-content-${setting.align}`
			})
		);
	}

	// return an empty string for no classes to apply
	return null;
};
