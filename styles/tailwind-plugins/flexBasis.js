module.exports = function flexBasis() {
	return ({ addUtilities, variants }) => {
		addUtilities(
			{
				'.flex-basis-0': {
					'flex-basis': 0
				},
				'.flex-basis-auto': {
					'flex-basis': 'auto'
				}
			},
			variants('flexBasis', ['responsive'])
		);
	};
};
