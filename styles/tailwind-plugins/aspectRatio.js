function getDefaultOptions() {
	return ['1/1', '4/3', '16/9'];
}

// see https://css-tricks.com/aspect-ratio-boxes/

module.exports = function aspectRatio() {
	return ({ addUtilities, variants, theme, e }) => {
		const ratios = theme('aspectRatio', getDefaultOptions());

		// utilities to add
		const utilities = {};
		// iterate and create the class
		ratios.forEach(ratio => {
			const [aspectX, aspectY] = ratio.split('/');

			utilities[`.ratio-${e(ratio)}`] = {
				'padding-bottom': `${(parseInt(aspectY, 10) / parseInt(aspectX, 10)) *
					100}%`
			};
		});

		// add them
		addUtilities(utilities, variants('aspectRatio', ['responsive']));
	};
};
