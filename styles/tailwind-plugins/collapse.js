module.exports = function collapse() {
	return ({ addComponents }) => {
		addComponents({
			'.collapse': {
				'overflow': 'hidden',
				'max-height': 0,
				'transition': 'max-height .3s, padding-top .3s, padding-bottom .3s',

				'&.collapse-expanded': {
					// 'overflow': 'auto',
					'max-height': '1000px'
				}
			}
		});
	};
};
