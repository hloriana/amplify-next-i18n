/* eslint-disable import/no-extraneous-dependencies */
const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const stylelint = require('stylelint');
const cssnano = require('cssnano');
const doiuse = require('doiuse');
const purgecss = require('@fullhuman/postcss-purgecss')
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
	plugins: [
		postcssImport({
			plugins: [stylelint]
		}),
		tailwindcss('./tailwind.config.js'),
		postcssPresetEnv({
			stage: 1,
			autoprefixer: { grid: true },
			features: {
				'focus-within-pseudo-class': false
			}
		}),
		...(process.env.NODE_ENV === 'development'
			? [
					doiuse({
						// ignore: ['rem'], // an optional array of features to ignore
						ignoreFiles: [
							'**/tailwind/**/normalize.css',
							// '**/tailwind/**/utilities.css'
							'**/tailwind/**/*.css'
						],
						onFeatureUsage(usageInfo) {
							// eslint-disable-next-line no-console
							console.log(usageInfo.message.replace(process.cwd(), ''));
						}
					})
			  ]
			: []),
		// REVIEW add purgecss
		...(process.env.NODE_ENV === 'production'
			? [cssnano({ preset: 'default' })]
			: []),
		//  ...(process.env.NODE_ENV === "production" 
		//  	? [
		//  			purgecss({
		//  				content: [
		//  					"./components/**/*.tsx",
		//  					"./pages/**/*.tsx",
		//  				],
		//  				defaultExtractor: (content) => {
		//  					const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
		//  					const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
							
		// 					return broadMatches.concat(innerMatches);
		//  				},
		//  				 safelist: ["html", "body"]
		//  			}),
					
		// 		] 
		//    	: []),
	]
};
