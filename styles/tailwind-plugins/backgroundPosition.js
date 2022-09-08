module.exports = function backgroundPosition() {
	const positions = {};

	const alignmentMap = {
		left: 'left',
		right: 'right',
		top: 'top',
		bottom: 'bottom'
	};

	const adjustmentMap = {
		'1/4': '25%',
		'1/3': '33.3333%',
		'2/3': '66.6667%',
		'3/4': '75%'
	};

	Object.keys(alignmentMap).forEach(alignment1 => {
		Object.keys(alignmentMap).forEach(alignment2 => {
			positions[
				`${alignment1}-${alignment2}`
			] = `${alignmentMap[alignment1]} ${alignmentMap[alignment2]}`;
		});

		Object.keys(adjustmentMap).forEach(adjustment1 => {
			positions[
				`${alignment1}-${adjustment1}`
			] = `${alignmentMap[alignment1]} ${adjustmentMap[adjustment1]} center`;

			Object.keys(alignmentMap).forEach(alignment2 => {
				positions[
					`${alignment1}-${adjustment1}-${alignment2}`
				] = `${alignmentMap[alignment1]} ${adjustmentMap[adjustment1]} ${alignmentMap[alignment2]}`;

				// eslint-disable-next-line max-nested-callbacks
				Object.keys(adjustmentMap).forEach(adjustment2 => {
					positions[
						`${alignment1}-${adjustment1}-${alignment2}-${adjustment2}`
					] = `${alignmentMap[alignment1]} ${adjustmentMap[adjustment1]} ${alignmentMap[alignment2]} ${adjustmentMap[adjustment2]}`;
				});
			});
		});
	});

	return positions;
};
