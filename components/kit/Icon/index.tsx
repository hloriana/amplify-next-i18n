import React, { FunctionComponent, SVGProps, useMemo } from 'react';

import dynamic from 'next/dynamic';

const Icon: FunctionComponent<{
	type: string;
	icon: string;
} & SVGProps<SVGSVGElement>> = props => {
	const { type, icon, ...rest } = props;

	// memoized dynamic icon to load
	const IconSVG = useMemo(
		() =>
			dynamic<SVGProps<SVGSVGElement>>({
				loader: () =>
					import(
						/* webpackChunkName: "icon-svg" */
						`./${type}/${icon}.svg?sprite`
					)
			}),
		[type, icon]
	);

	return <IconSVG {...rest} />;
};

export default Icon;
