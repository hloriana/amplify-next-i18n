module.exports = function justifySelf() {
	return ({ addUtilities, variants }) => {
		addUtilities(
			{
				'.justify-self-start': {
					'justify-self': 'start'
				},
				'.justify-self-end': {
					'justify-self': 'end'
				},
				'.justify-self-center': {
					'justify-self': 'center'
				},
				'.justify-self-stretch': {
					'justify-self': 'stretch'
				}
			},
			variants('justifySelf', ['responsive'])
		);
	};
};
