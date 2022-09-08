import React, { FunctionComponent, SVGProps } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

// Import the standalone icon
import { Icon } from '~/components/kit';

// Storyblok stuff
import { IconModule } from '~/storyblok/components/icon-module/definition';
import { getColoringClasses } from '~/components/settings/Coloring';
import { getSizingPresetClasses } from '~/components/settings/SizingPreset';
import { getSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import { getTransformClasses } from '~/components/settings/TransformSettings';
import ModuleWrap from '~/components/other/ModuleWrap';

const StoryblokIcon: FunctionComponent<{
	content: IconModule;
} & SVGProps<SVGSVGElement>> = props => {
	const { content, className, ...rest } = props;

	// if no icon is defined, don't render
	if (!content.icon) return <></>;

	// split to see the type of the icon
	const [type, icon] = content.icon.split(':');

	// default size for icons
	const defaultSizingPreset = 'h-4';

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<div
					className={cx(
						'flex flex-row justify-content-center align-items-center',
						getColoringClasses(content.coloring_settings),
						getSpacingComponentClasses(content.spacing_settings),
						content.border_radius,
						getTransformClasses(content.transform_settings)
					)}
				>
					<Icon
						type={type}
						icon={icon}
						className={cx(
							'fill-current',
							getSizingPresetClasses(content.sizing_settings) ||
								defaultSizingPreset,
							className
						)}
						data-name="icon-module"
						{...rest}
					/>
				</div>
			</ModuleWrap>
		</SbEditable>
	);
};

export default StoryblokIcon;
