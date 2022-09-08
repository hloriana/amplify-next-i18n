module.exports = function closeIcons() {
	return ({ addComponents }) => {
		addComponents({
			'.close': {
				'position': 'relative',
				'display': 'inline-block',
				// NOTE this means that you need to manually set the width and height of the icon
				// 'width': '50px',
				// 'height': '50px',
				'overflow': 'hidden',
				// NOTE we don't parametrize the color of the icon atm
				// '&:hover': {
				// 	'&::before, &::after': {
				// 		background: '$blue'
				// 	}
				// },
				'&::before, &::after': {
					'content': `''`,
					'position': 'absolute',
					'height': '2px',
					'width': '100%',
					'top': '50%',
					'left': '0',
					'margin-top': '-1px',
					'background': '#000'
				},
				'&.close-white::before, &.close-white::after': {
					background: '#fff'
				},
				'&::before': {
					transform: 'rotate(45deg)'
				},
				'&::after': {
					transform: 'rotate(-45deg)'
				},
				'&.close-hairline': {
					'&::before, &::after': {
						height: '1px'
					}
				},
				'&.close-thick': {
					'&::before, &::after': {
						'height': '4px',
						'margin-top': '-2px'
					}
				},
				'&.close-black': {
					'&::before, &::after': {
						'height': '8px',
						'margin-top': '-4px'
					}
				},
				'&.close-heavy': {
					'&::before, &::after': {
						'height': '12px',
						'margin-top': '-6px'
					}
				},
				'&.close-pointy': {
					'&::Before, &::after': {
						width: '200%',
						left: '-50%'
					}
				},
				'&.close-rounded': {
					'&::before, &::after': {
						'border-radius': '5px'
					}
				},
				'&.close-blades': {
					'&::before, &::after': {
						'border-radius': '5px 0'
					}
				},
				'&.close-warp': {
					'&::before, &::after': {
						'border-radius': '120% 0'
					}
				},
				'&.close-fat': {
					'&::before, &::after': {
						'border-radius': '100%'
					}
				}
			}
		});
	};
};
