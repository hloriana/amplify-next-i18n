import React, { FunctionComponent } from 'react';

import { css, cx } from 'linaria';

const HoverLabel: FunctionComponent<{ className?: string }> = (props) => {
	const { children, className } = props;

	return (
		<div
			className={cx(
				className,
				'relative overflow-hidden group inline-block align-top'
			)}
		>
			{children}
			<div
				className={cx(
					'absolute bottom-0 left-0 right-0 border-b opacity-50 transition-transform duration-500 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100'
				)}
			/>
		</div>
	);
};

export default HoverLabel;
