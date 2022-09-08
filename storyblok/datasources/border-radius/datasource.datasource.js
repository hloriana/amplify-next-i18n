module.exports = {
	name: 'Border Radius',
	slug: 'border-radius',
	datasource_entries: [
		{
			name: 'No roundness (0rem, 0px)',
			value: 'rounded-none',
			dimension_value: ''
		},
		{ name: 'Small (0.125rem, 2px)', value: 'rounded-sm', dimension_value: '' },
		{ name: 'Regular (0.25rem, 4px)', value: 'rounded', dimension_value: '' },
		{ name: 'Large (0.5rem, 8px)', value: 'rounded-lg', dimension_value: '' },
		{ name: 'Full (pill-like)', value: 'rounded-full', dimension_value: '' }
	]
};
