module.exports = function alignSelf() {
	return ({ addUtilities, variants }) => {
		addUtilities(
			{
				'.align-self-start': {
					'align-self': 'start'
				},
				'.align-self-end': {
					'align-self': 'end'
				},
				'.align-self-center': {
					'align-self': 'center'
				},
				'.align-self-stretch': {
					'align-self': 'stretch'
				}
			},
			variants('alignSelf', ['responsive'])
		);
	};
};
