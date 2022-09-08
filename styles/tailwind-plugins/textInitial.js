module.exports = function textInitial() {
	return ({ addUtilities, variants }) => {
		addUtilities(
			{
				'.text-initial': {
					'text-align': 'initial'
				}
			},
			variants('textInitial', ['responsive'])
		);
	};
};
