import React, { FunctionComponent, useState } from 'react';

import { cx, css } from 'linaria';

import Components from '~/components';
import Icon from '~/components/kit/Icon';

const darkGradientCSS = css`
	background: linear-gradient(
		180deg,
		rgba(54, 54, 54, 0.9) 0%,
		rgb(25, 25, 25, 0.95) 100%
	);
`;

const lightGradientCSS = css`
	background: linear-gradient(
		180deg,
		rgba(54, 54, 54, 0) 0%,
		rgb(25, 25, 25, 0.3) 100%
	);
`;

const Banner: FunctionComponent<{
	variant?: string;
	content: any;
}> = (props) => {
	const { variant, content } = props;

	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return open ? (
		<div
			className={cx(
				variant === 'light' && 'text-white',
				'w-full z-40',
				!variant || variant === 'dark'
					? `${lightGradientCSS} ink-black`
					: `${darkGradientCSS} white`
			)}
		>
			<div className="gud-content-grid relative">
				<div className="col-start-1 col-end--1 flex flex-grow align-items-center justify-content-center py-4">
					{content && content.map((blok: any) => Components(blok))}
					<Icon
						className={cx('w-3 h-3 ml-4 cursor-pointer')}
						type="icons"
						icon="close"
						fill={variant === 'light' ? '#FFFFFF' : 'text-black'}
						onClick={handleClose}
					/>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default Banner;
