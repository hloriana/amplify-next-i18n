module.exports = function justifyItems() {
	return ({ addUtilities, variants }) => {
		addUtilities(
			{
				'.justify-items-start': {
					'justify-items': 'flex-start'
				},
				'.justify-items-end': {
					'justify-items': 'flex-end'
				},
				'.justify-items-center': {
					'justify-items': 'center'
				},
				'.justify-items-stretch': {
					'justify-items': 'stretch'
				}
			},
			variants('justifyItems', ['responsive'])
		);
	};
};
