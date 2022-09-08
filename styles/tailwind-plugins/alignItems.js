module.exports = function alignItems() {
	return ({ addUtilities, variants }) => {
		addUtilities(
			{
				'.align-items-start': {
					'align-items': 'flex-start'
				},
				'.align-items-end': {
					'align-items': 'flex-end'
				},
				'.align-items-center': {
					'align-items': 'center'
				},
				'.align-items-stretch': {
					'align-items': 'stretch'
				},
				'.align-items-baseline': {
					'align-items': 'baseline'
				}
			},
			variants('alignItems', ['responsive'])
		);
	};
};
