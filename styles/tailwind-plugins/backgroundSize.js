module.exports = function backgroundSize() {
	const sizes = {};

	const map = {
		'auto': 'auto',
		'1/4': '25%',
		'1/3': '33.333%',
		'1/2': '50%',
		'2/3': '66.667%',
		'3/4': '75%',
		'full': '100%'
	};

	Object.keys(map).forEach(size1 => {
		sizes[`${size1}`] = map[size1];

		Object.keys(map).forEach(size2 => {
			sizes[`${size1}-${size2}`] = `${map[size1]} ${map[size2]}`;
		});
	});

	return sizes;
};
