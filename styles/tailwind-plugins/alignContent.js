module.exports = function alignContent() {
	return ({ addUtilities, variants }) => {
		addUtilities(
			{
				'.align-content-start': {
					'align-content': 'flex-start'
				},
				'.align-content-end': {
					'align-content': 'flex-end'
				},
				'.align-content-center': {
					'align-content': 'center'
				},
				'.align-content-stretch': {
					'align-content': 'stretch'
				},
				'.align-content-between': {
					'align-content': 'space-between'
				},
				'.align-content-around': {
					'align-content': 'space-around'
				},
				'.align-content-evenly': {
					'align-content': 'space-evenly'
				}
			},
			variants('alignContent', ['responsive'])
		);
	};
};
