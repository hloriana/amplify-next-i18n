module.exports = {
	'*.{ts,tsx,js,jsx,css,json,md}': ['prettier --write', 'git add'],
	// '*.{ts,tsx,js,jsx}': ['eslint --fix', 'git add'],
	'*.css': ['stylelint --fix', 'git add']
};
