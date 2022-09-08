const _ = require('lodash');

function getDefaultOptions() {
	return [
		{
			screen: '',
			columns: 4,
			gutter: '16px',
			margin: '24px',
			width: 'auto'
		},
		{
			screen: 'md',
			columns: 12,
			gutter: '16px',
			margin: '32px',
			width: 'auto'
		},
		{
			screen: 'lg',
			columns: 12,
			gutter: '24px',
			margin: 'auto',
			width: '960px'
		},
		{
			screen: 'xl',
			columns: 12,
			gutter: '24px',
			margin: 'auto',
			width: '1200px'
		}
	];
}

module.exports = function gudLayout() {
	return ({ addUtilities, addComponents, variants, theme, e }) => {
		// get the variants
		const utilitiesVariants = variants('gudLayout', ['responsive']);
		// get the GUD grid option
		const gudOptions = theme('gudLayout', getDefaultOptions());
		// save the biggest number of columns found to generate the right amount of classes
		let maxColumns = 0;
		// added columns (example 15 = 12 columns layout + 3 for the 2 lateral columns, 1-index)
		const addedColumnsIndexes = 3;
		// iterate and generate classes
		gudOptions.forEach((option) => {
			// convert to numbers the properties
			const gutter = option.gutter === 'auto' ? 0 : parseInt(option.gutter, 10);
			const margin = option.margin === 'auto' ? 0 : parseInt(option.margin, 10);
			const width = option.width === 'auto' ? 0 : parseInt(option.width, 10);
			const { columns } = option;
			// save the biggest number of columns found
			if (maxColumns < columns) maxColumns = columns;
			// compute the grid with
			const columnWidth =
				option.width === 'auto'
					? '1fr'
					: // FIXME if does not support column-gap should be bigger
					  `${(
							(width - 2 * margin - (columns - 1) * gutter) /
							columns
					  ).toFixed(2)}px`;
			// compute the margin width
			const marginWidth =
				option.margin === 'auto' ? 'auto' : `${margin - gutter}px`;
			// reassign the width of the gutter
			const gutterWidth = option.gutter;
			// compute horizontal padding for the content grid
			const paddingWidth = option.width === 'auto' ? option.margin : '0';

			// components to generate
			const components = {
				'.gud-grid-spacer': {
					margin: `${gutter / 2}px`
				},
				'.gud-page-grid': {
					'display': 'grid',
					'grid-template-columns': `${marginWidth} repeat(${columns}, ${columnWidth}) ${marginWidth}`,
					'grid-column-gap': gutterWidth
				},
				'.gud-content-grid': {
					'display': 'grid',
					'grid-template-columns': `repeat(${columns}, ${columnWidth})`,
					'grid-column-gap': gutterWidth,
					'padding-left': paddingWidth,
					'padding-right': paddingWidth,
					'justify-content': 'center'
				},
				'.gud-container': {
					'width': option.width,
					'margin-left': option.margin,
					'margin-right': option.margin
				},
				'.gud-grid-size': {
					width:
						option.width === 'auto'
							? 'translateY(-50%)'
							: 'translate(-50%, -50%)'
				},
				'.gud-carousel': {
					'display': 'grid',
					'grid-template-columns': `repeat(${columns}, 1fr)`,
					'grid-column-gap': gutterWidth,

					// wrapper of the slides
					'> .gud-carousel-wrapper-3': {
						'grid-column': '1 / span 3',
						'min-width': '100%'
					},
					'> .gud-carousel-wrapper-4': {
						'grid-column': '1 / span 4',
						'min-width': '100%'
					},
					'> .gud-carousel-wrapper-6': {
						'grid-column': '1 / span 6',
						'min-width': '100%'
					},
					'> .gud-carousel-wrapper-12': {
						'grid-column': '1 / span 12',
						'min-width': '100%'
					},

					// slides
					'& .gud-carousel-slide': {
						'margin': `${gutter / 2}px`,
						'min-width': '100%'
					}
				}
			};

			// check if has a breakpoint
			if (option.screen === '') {
				addComponents(components);
			} else {
				addComponents(
					{ [`@screen ${option.screen}`]: components },
					utilitiesVariants
				);
			}
		});

		// utility classes
		const utilityClasses = {
			'.grid': {
				display: 'grid'
			}
		};
		// create indexes classes columns
		for (let i = 1; i <= maxColumns + addedColumnsIndexes; i += 1) {
			utilityClasses[`.col-start-${i}`] = {
				'grid-column-start': `${i}`
			};
			utilityClasses[`.col-end-${i}`] = {
				'grid-column-end': `${i}`
			};
			utilityClasses[`.col-start--${i}`] = {
				'grid-column-start': `-${i}`
			};
			utilityClasses[`.col-end--${i}`] = {
				'grid-column-end': `-${i}`
			};
		}
		// create classes to span columns (stronger than free hand placement)
		for (let i = 1; i <= maxColumns + addedColumnsIndexes; i += 1) {
			utilityClasses[`.col-span-${i}`] = {
				'grid-column-start': `span ${i}`,
				'grid-column-end': `span ${i}`
			};
		}

		// rows (15 = 14 rows maximum, arbitrary assumption of maximum rows)
		for (let i = 1; i <= 15; i += 1) {
			utilityClasses[`.row-start-${i}`] = {
				'grid-row-start': `${i}`
			};
			utilityClasses[`.row-end-${i}`] = {
				'grid-row-end': `${i}`
			};
			utilityClasses[`.row-start--${i}`] = {
				'grid-row-start': `-${i}`
			};
			utilityClasses[`.row-end--${i}`] = {
				'grid-row-end': `-${i}`
			};
		}
		// add the utilities
		addUtilities(utilityClasses, utilitiesVariants);
	};
};
