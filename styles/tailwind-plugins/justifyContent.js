module.exports = function justifyContent() {
	return ({ addUtilities, variants }) => {
		addUtilities(
			{
				'.justify-content-start': {
					'justify-content': 'flex-start'
				},
				'.justify-content-end': {
					'justify-content': 'flex-end'
				},
				'.justify-content-center': {
					'justify-content': 'center'
				},
				'.justify-content-stretch': {
					'justify-content': 'stretch'
				},
				'.justify-content-between': {
					'justify-content': 'space-between'
				},
				'.justify-content-around': {
					'justify-content': 'space-around'
				},
				'.justify-content-evenly': {
					'justify-content': 'space-evenly'
				}
			},
			variants('justifyContent', ['responsive'])
		);
	};
};
