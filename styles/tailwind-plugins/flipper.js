const _ = require('lodash');

module.exports = function flipper() {
	return ({ addComponents, theme }) => {
		// get the screens
		const screens = theme('screens');

		// mobile first version
		addComponents({
			'.flipper': {
				'position': 'relative',
				'overflow': 'hidden',
				'z-index': 0,
				'display': 'flex',
				'flex-direction': 'column',
				'flex-grow': 1,

				// basic transition and effect
				'>.flipper-front, >.flipper-back': {
					// transition-timing-function: 'cubic-bezier(.175, .885, .32, 1.275)',
					'transition-duration': '.5s',
					'transition-property': 'transform, opacity'
				},

				// initial state
				'>.flipper-front': {
					'transform': 'rotateY(0deg)',
					'backface-visibility': 'hidden'
				},
				'>.flipper-back': {
					'position': 'absolute',
					'opacity': 0,
					'top': '0px',
					'left': '0px',
					'width': '100%',
					'height': '100%',
					'transform': 'rotateY(-180deg)',
					'flex-grow': 1
				},

				// class to hide/show content when expanded
				'.flipper-collapsed': {
					// visibility: 'visible'
					display: 'block'
				},
				'.flipper-expanded': {
					// visibility: 'hidden'
					display: 'none'
				},

				// flipped state
				'&.flipper-flipped': {
					'>.flipper-front': {
						transform: 'rotateY(180deg)'
					},
					'>.flipper-back': {
						opacity: 1,
						transform: 'rotateY(0deg)'
					}
				},

				// vertical variant
				'&.flipper-vertical': {
					'>.flipper-back': {
						transform: 'rotateX(-180deg)'
					},
					'&.flipper-flipped': {
						'>.flipper-front': {
							transform: 'rotateX(180deg)'
						},
						'>.flipper-back': {
							transform: 'rotateX(0deg)'
						}
					}
				}
			}
		});

		// eslint-disable-next-line unicorn/no-fn-reference-in-iterator
		_.forEach(screens, (value, screen) => {
			// expand flipper behavior, on medium screen becomes a normal card
			addComponents({
				[`@screen ${screen}`]: {
					[`.flipper.flipper-expand-${screen}`]: {
						// class to hide/show content when expanded
						'.flipper-collapsed': {
							// visibility: 'hidden'
							display: 'none'
						},
						'.flipper-expanded': {
							// visibility: 'visible'
							display: 'block'
						},

						'.flipper-front': {
							transform: 'rotateY(0deg)'
						},

						// undo the flip and set it visible again
						'.flipper-back': {
							position: 'relative',
							transform: 'rotateY(0deg)',
							opacity: 1
						}
					}
				}
			});
		});
	};
};
