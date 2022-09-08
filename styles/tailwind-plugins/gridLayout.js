const _ = require('lodash');

/* eslint-disable no-shadow,no-param-reassign */
function extractMinWidths(breakpoints) {
	return _.flatMap(breakpoints, breakpoints => {
		if (_.isString(breakpoints)) {
			breakpoints = { min: breakpoints };
		}

		if (!Array.isArray(breakpoints)) {
			breakpoints = [breakpoints];
		}

		return _(breakpoints)
			.filter(breakpoint => {
				return _.has(breakpoint, 'min') || _.has(breakpoint, 'min-width');
			})
			.map(breakpoint => {
				return _.get(breakpoint, 'min-width', breakpoint.min);
			})
			.value();
	});
}
/* eslint-enable no-shadow,no-param-reassign */

module.exports = function gridLayout() {
	return ({ addUtilities, addComponents, variants, theme }) => {
		// get the screens
		const screens = theme('gridLayout.screens', theme('screens'));
		// minWidths from screens
		const minWidths = extractMinWidths(screens);
		// default number of columns
		const defaultColumns = 12;
		// number of grid columns
		const columns = theme('gridLayout.columns', defaultColumns);
		// media queries rules
		const atRules = _(minWidths)
			.sortBy(minWidth => parseInt(minWidth, 10))
			.sortedUniq()
			.map(minWidth => {
				return {
					[`@media (min-width: ${minWidth})`]: {
						'.grid-container': {
							'grid-template-columns': `auto repeat(${columns}, calc(${minWidth} / ${columns})) auto`
							// 'grid-template-columns': `auto repeat(${columns}, ${(
							// 	parseInt(minWidth, 10) / parseInt(columns, 10)
							// ).toFixed(2)}) auto`
						}
					}
				};
			})
			.value();

		// grid component
		addComponents([
			{
				// grid container
				'.grid-container': {
					'display': 'grid',
					'grid-template-columns': `auto repeat(${columns}, calc(100% / ${columns})) auto`
					// 'grid-template-columns': `auto repeat(${columns}, 1fr) auto`
				},
				'.grid-layout': {
					'display': 'grid',
					'grid-template-columns': `repeat(${columns}, 1fr)`
				}
			},
			...atRules
		]);

		// utility classes
		const utilityClasses = {
			'.grid': {
				display: 'grid'
			}
		};
		// container columns (example 15 = 12 columns layout + 3 for the 2 lateral columns, 1-index)
		const containerColumns = 3;
		// create utility classes columns
		for (let i = 1; i <= columns + containerColumns; i += 1) {
			utilityClasses[`.col-start-${i}`] = {
				'grid-column-start': `${i}`
			};
			utilityClasses[`.col-end-${i}`] = {
				'grid-column-end': `${i}`
			};
		}

		// rows (33 = 32 rows maximum, arbitrary assumption of maximum rows)
		for (let i = 1; i <= 33; i += 1) {
			utilityClasses[`.row-start-${i}`] = {
				'grid-row-start': `${i}`
			};
			utilityClasses[`.row-end-${i}`] = {
				'grid-row-end': `${i}`
			};
		}
		// add the utilities
		addUtilities(utilityClasses, variants('gridLayout', ['responsive']));
	};
};
