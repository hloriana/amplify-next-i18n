import React, {
	FunctionComponent,
	DetailedHTMLProps,
	HTMLAttributes
} from 'react';

import { cx } from 'linaria';

import { ModuleFlexSettings } from '~/storyblok/components/module-flex-settings/definition';
import { ModuleGridSettings } from '~/storyblok/components/module-grid-settings/definition';

import { getModuleFlexClasses } from '~/components/settings/ModuleFlex';
import { getModuleGridClasses } from '~/components/settings/ModuleGrid';

const ModuleWrap: FunctionComponent<{
	settings: (ModuleGridSettings | ModuleFlexSettings)[];
} & DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>> = props => {
	const { settings, children, className, ...rest } = props;

	// filter the grid settings
	const gridSettings = settings.filter(
		s => s.component === 'module_grid_settings'
	) as ModuleGridSettings[];
	const hasGridSettings = gridSettings.length !== 0;
	const defaultGridSettings = ''; // 'col-start-2 col-end--2';

	// filter the flex settings
	const flexSettings = settings.filter(
		s => s.component === 'module_flex_settings'
	) as ModuleFlexSettings[];
	const hasFlexSettings = flexSettings.length !== 0;
	const defaultFlexSettings = ''; // 'flex-growth-1 flex-shrink-0';

	return (
		<div
			data-name={`module-wrap${cx(hasGridSettings && '-grid')}${cx(
				hasFlexSettings && '-flex'
			)}`}
			className={cx(
				getModuleGridClasses(gridSettings) ||
					(hasGridSettings && defaultGridSettings),
				getModuleFlexClasses(flexSettings) ||
					(hasFlexSettings && defaultFlexSettings),
				className
			)}
			{...rest}
		>
			{children}
		</div>
	);
};

export default ModuleWrap;
