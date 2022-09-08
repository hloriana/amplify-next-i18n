/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// external plugins
// const defaultTheme = require('tailwindcss/defaultTheme');
const typographyPlugin = require('tailwindcss-typography');
// custom plugins
const textInitial = require('./styles/tailwind-plugins/textInitial');
const alignContent = require('./styles/tailwind-plugins/alignContent');
const alignItems = require('./styles/tailwind-plugins/alignItems');
const alignSelf = require('./styles/tailwind-plugins/alignSelf');
const justifyContent = require('./styles/tailwind-plugins/justifyContent');
const justifyItems = require('./styles/tailwind-plugins/justifyItems');
const justifySelf = require('./styles/tailwind-plugins/justifySelf');
const aspectRatio = require('./styles/tailwind-plugins/aspectRatio');
const flexBasis = require('./styles/tailwind-plugins/flexBasis');

const closeIcons = require('./styles/tailwind-plugins/closeIcons');
const collapse = require('./styles/tailwind-plugins/collapse');
const flipper = require('./styles/tailwind-plugins/flipper');

const gudLayout = require('./styles/tailwind-plugins/gudLayout');
const gudFonts = require('./styles/tailwind-plugins/gudFonts');
/* eslint-enable import/no-extraneous-dependencies */

const backgroundSize = require('./styles/tailwind-plugins/backgroundSize');
const backgroundPosition = require('./styles/tailwind-plugins/backgroundPosition');

module.exports = {
	// purge: {
	// 	content: [
	// 		"./components/**/*.tsx",
	// 		// "./pages/**/*.tsx",
	// 	  ],
	// 	  preserveHtmlElements: false,
	// 	  options: {
	// 	   safelist: ["html", "body"]
	// 	  }
	// },
	theme: {
		screens: {
			// xs: '480px',
			// sm: '576px',
			md: '768px',
			lg: '1024px',
			xl: '1264px'
			// xxl: '1600px'
		},
		fontFamily: {
			// 'arabic': '"Noto Sans AR", "Geeza Pro", "Arabic Typesetting", Roboto, Noto, "Noto Naskh Arabic", "Times New Roman", serif',
			// 'chinese-hk': '"Noto Sans HK", "方体", "PingFang HK", "黑体", "Heiti SC", "Microsoft JhengHei UI", "Microsoft JhengHei", Roboto, Noto, "Noto Sans CJK SC", sans-serif',
			// 'chinese-tw': '"Noto Sans TC", "方體", "PingFang TC", "黑体", "Heiti SC", "Microsoft JhengHei UI", "Microsoft JhengHei", Roboto, Noto, "Noto Sans CJK SC", sans-serif',
			// 'chinese': '"Noto Sans SC", "方体", "PingFang SC", "黑体", "Heiti SC", "Microsoft JhengHei UI", "Microsoft JhengHei", Roboto, Noto, "Noto Sans CJK SC", sans-serif',
			// 'extended': '"EF Circular", "Helvetica", "Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif',
			// 'japanese': '"Noto Sans JP", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif',
			// 'korean': '"Noto Sans KR", "Nanum Gothic", "Apple SD Gothic Neo", "Malgun Gothic", Roboto, Noto, sans-serif',
			// 'latin': '"EF Circular Latin", "Helvetica", "Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif',
			// 'thai': '"Noto Sans Thai UI", "Noto Sans Thai", "Thonburi", "Leelawadee UI", "Cordia New", Roboto, Noto,  sans-serif',
			// 'vietnamese': '"Noto Sans", "Helvetica", "Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif',
			'arabic': [
				'"Noto Sans AR"',
				'"Geeza Pro"',
				'"Arabic Typesetting"',
				'Roboto',
				'Noto',
				'"Noto Naskh Arabic"',
				'"Times New Roman"',
				'serif'
			],
			'chinese-hk': [
				'"Noto Sans HK"',
				'"方体"',
				'"PingFang HK"',
				'"黑体"',
				'"Heiti SC"',
				'"Microsoft JhengHei UI"',
				'"Microsoft JhengHei"',
				'Roboto',
				'Noto',
				'"Noto Sans CJK SC"',
				'sans-serif'
			],
			'chinese-tw': [
				'"Noto Sans TC"',
				'"方體"',
				'"PingFang TC"',
				'"黑体"',
				'"Heiti SC"',
				'"Microsoft JhengHei UI"',
				'"Microsoft JhengHei"',
				'Roboto',
				'Noto',
				'"Noto Sans CJK SC"',
				'sans-serif'
			],
			'chinese': [
				'"Noto Sans SC"',
				'"方体"',
				'"PingFang SC"',
				'"黑体"',
				'"Heiti SC"',
				'"Microsoft JhengHei UI"',
				'"Microsoft JhengHei"',
				'Roboto',
				'Noto',
				'"Noto Sans CJK SC"',
				'sans-serif'
			],
			'extended': [
				'"EF Circular"',
				'"Noto Sans"',
				'"Helvetica"',
				'"Open Sans"',
				'"Gill Sans MT"',
				'"Gill Sans"',
				'Corbel',
				'Arial',
				'sans-serif'
			],
			'japanese': [
				'"Noto Sans JP"',
				'"ヒラギノ角ゴ Pro W3"',
				'"Hiragino Kaku Gothic Pro"',
				'Osaka',
				'"メイリオ"',
				'Meiryo',
				'"ＭＳ Ｐゴシック"',
				'"MS PGothic"',
				'sans-serif'
			],
			'korean': [
				'"Noto Sans KR"',
				'"Nanum Gothic"',
				'"Apple SD Gothic Neo"',
				'"Malgun Gothic"',
				'Roboto',
				'Noto',
				'sans-serif'
			],
			'latin': [
				'"EF Circular Latin"',
				'"Noto Sans"',
				'"Helvetica"',
				'"Open Sans"',
				'"Gill Sans MT"',
				'"Gill Sans"',
				'Corbel',
				'Arial',
				'sans-serif'
			],
			'thai': [
				'"Noto Sans Thai UI"',
				'"Noto Sans Thai"',
				'"Thonburi"',
				'"Leelawadee UI"',
				'"Cordia New"',
				'Roboto',
				'Noto',
				'sans-serif'
			],
			'vietnamese': [
				'"Noto Sans"',
				'"Helvetica"',
				'"Open Sans"',
				'"Gill Sans MT"',
				'"Gill Sans"',
				'Corbel',
				'Arial',
				'sans-serif'
			]
		},
		fontSize: {
			'subtitle': '1.5rem',
			'paragraph': '1rem',
			'ui-label': '0.875rem',
			'caption': '0.75rem'
		},
		fontWeight: {
			light: 300,
			book: 400,
			medium: 500,
			bold: 700,
			black: 900
		},
		// NOTE typography plugin
		textStyles: (theme) => ({
			// --- Heading Module
			'heading': {
				output: false,
				fontWeight: theme('fontWeight.bold')
			},
			// GUD 'Title 3'
			'title3': {
				'fontSize': '2rem',
				'lineHeight': 1.25,
				'@screen md': {
					fontSize: '2.5rem',
					lineHeight: 1.2
				},
				'@screen lg': {
					fontSize: '3rem',
					lineHeight: 1.15
				}
			},
			'h1': {
				extends: ['heading', 'title3']
			},
			// GUD 'Title 4'
			'title4': {
				'fontSize': '1.5rem',
				'lineHeight': 1.2,
				'@screen md': {
					fontSize: '1.75rem',
					lineHeight: 1.28
				},
				'@screen lg': {
					fontSize: '2rem',
					lineHeight: 1.25
				}
			},
			'h2': {
				extends: ['title4', 'heading']
			},
			// GUD 'Title 5'
			'title5': {
				'fontSize': '1.25rem',
				'lineHeight': 1.2,
				'@screen md': {
					fontSize: '1.5rem',
					lineHeight: 1.3
				}
			},
			'h3': {
				extends: ['title5', 'heading']
			},

			// GUD 'Title 6'
			'h4': {
				extends: ['heading', 'paragraph']
			},
			// --- Text Module
			// subtitle
			'subtitle': {
				fontSize: '1.5rem',
				lineHeight: 1.3
			},
			// paragraph
			'paragraph': {
				fontSize: '1rem',
				lineHeight: 1.5
			},
			// UI Label
			'ui-label': {
				fontSize: '0.875rem',
				lineHeight: 1.7
			},
			// caption
			'caption': {
				fontSize: '0.75rem',
				lineHeight: 1.3
			},
			'sup': {
				fontSize: '0.5em',
				top: '-0.75em',
				left: '0.25em'
			},
			'sub': {
				fontSize: '0.5em',
				left: '0.25em',
				bottom: '0.125rem'
			},
			// used to control individual styles inside the richtext box
			'richtext': {}
		}),
		colors: {
			// EF - Baseline colors
			'education-blue': {
				650: '#002540',
				600: '#003153',
				550: '#00365C',
				DEFAULT: '#003C64',
				450: '#1A5075',
				400: '#336486',
				350: '#4D7796',
				300: '#668BA6'
			},
			'first-blue': '#009EEB',
			'hello-pink': '#FF329B',
			'ink-black': '#191919',
			'white': '#FFFFFF',
			'ef-grey': '#EFEFEF',
			'ef-paper': '#F7F7F7',
			'education-paper': '#E4EAEE',
			'first-paper': '#E4F7FF',
			'hello-paper': '#FFE9F4',
			'legal-paper': '#FFFDE6',
			'outdoor-paper': '#E5FFE5',
			// EF Academy - Eraser
			'eraser': {
				650: '#8E1F1A',
				600: '#A83934',
				550: '#DB6C67',
				DEFAULT: '#F48580',
				450: '#FF9F9A',
				400: '#FFB8B3',
				350: '#FFD2CD',
				300: '#FFF0ED'
			},
			// EF Academy - Play Clay
			'play-clay': {
				650: '#206A89',
				600: '#44809A',
				550: '#669CB2',
				DEFAULT: '#8FB8C9',
				450: '#A9CEDD',
				400: '#C7E1EB',
				350: '#DFEFF6',
				300: '#EDF4F9'
			},
			// EF Academy - Fire Alarm
			'fire-alarm': {
				650: '#920006',
				600: '#AB161F',
				550: '#C53039',
				DEFAULT: '#DE4952',
				450: '#F8636C',
				400: '#FF7C85',
				350: '#FF969F',
				300: '#FFAFB8'
			},
			// EF Academy - Burgundy
			'burgundy': {
				650: '#330000',
				600: '#4C0000',
				550: '#660013',
				DEFAULT: '#7F182C',
				450: '#993246',
				400: '#B24B5F',
				350: '#CC6579',
				300: '#FFEBE6'
			},
			// EF Academy - UI colors
			'ui': {
				'success': '#50AF68',
				'warning': '#F26552',
				'light-gray': '#DBDBDB',
				'mid-gray': '#9B9B9B',
				'dark-gray': '#4A4A4A'
			},
			'transparent': 'transparent'
		},
		boxShadow: {
			light: '0 2px 8px 0 rgba(25, 25, 25, .16)',
			DEFAULT: '0 2px 16px 0 rgba(25, 25, 25, .16)',
			deep: '0 2px 32px 0 rgba(25, 25, 25, .16)',
			none: 'none'
		},
		maxWidth: {
			full: '100%',
			none: 'none'
		},
		maxHeight: {
			full: '100%',
			screen: '100vh',
			none: 'none'
		},
		aspectRatio: [
			'1/1',
			'16/9',
			'9/16',
			'4/3',
			'3/4',
			'3/2',
			'2/3',
			'24/7',
			'8/3',
			'15/17',
			'7/3',
			'31/42',
			'47/70',
			'2/1',
			'6/7',
			'24/10'
		],
		extend: {
			inset: {
				'1/2': '50%',
				'100': '100%'
			},
			minWidth: {
				1: '1px',
				35: '8.75rem'
			},
			minHeight: {
				1: '1px'
			},
			backgroundSize: backgroundSize(),
			backgroundPosition: backgroundPosition(),
			translate: {
				'-3/4': '-75%',
				'-2/3': '-66.667%',
				'-1/3': '-33.333%',
				'-1/4': '-25%',
				'1/4': '25%',
				'1/3': '33.333%',
				'2/3': '66.667%',
				'3/4': '75%'
			},
			zIndex: {
				'100': '100',
				'-10': '-10'
			}
		},
		spinner: (theme) => ({
			default: {
				color: '#DE4952', // color you want to make the spinner
				size: '2em', // size of the spinner (used for both width and height)
				border: '5px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
				speed: '500ms' // the speed at which the spinner should rotate
			}
			// md: {
			//   color: theme('colors.red.500', 'red'),
			//   size: '2em',
			//   border: '2px',
			//   speed: '500ms',
			// },
		})
	},
	// NOTE only enable the plugins we actually use
	corePlugins: [
		'preflight',
		'display',
		'objectFit',
		'overflow',
		'position',
		'inset',
		'visibility',
		'zIndex',
		'fontFamily',
		'fontSize',
		'fontWeight',
		'textAlign',
		'textColor',
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'borderRadius',
		'flexDirection',
		'flexGrow',
		'flexShrink',
		'flexWrap',
		'padding',
		'margin',
		'width',
		'height',
		'minWidth',
		'minHeight',
		'maxWidth',
		'maxHeight',
		'boxShadow',
		'opacity',
		'outline',
		'pointerEvents',
		'fill',
		'accessibility',
		'backgroundSize',
		'backgroundPosition',
		'backgroundRepeat',
		'listStyleType',
		'listStylePosition',
		'transform',
		'transformOrigin',
		'translate',
		'rotate',
		'cursor',
		'scale',
		'whitespace',
		'verticalAlign',
		'appearance',
		'textDecoration',
		'gridTemplateColumns',
		'gridRow',
		'transitionProperty',
		'transitionDuration',
		'transitionTimingFunction',
		'lineHeight'
	],
	variants: {
		width: ['responsive'],
		height: ['responsive'],
		visibility: [],
		fontSize: [],
		fontWeight: ['responsive'],
		textColor: ['responsive', 'hover'],
		backgroundColor: ['responsive', 'hover'],
		borderColor: ['responsive', 'hover'],
		flexWrap: ['responsive'],
		scale: ['group-hover'],
		spinner: ['responsive']
	},
	plugins: [
		// --- external plugins
		typographyPlugin({
			ellipsis: false,
			hyphens: false,
			textUnset: false,
			caps: false,
			nums: false,
			ligatures: false,
			componentPrefix: 'typo-'
		}),
		// --- custom plugins
		// utilities
		textInitial(),
		alignContent(),
		alignItems(),
		alignSelf(),
		justifyContent(),
		justifyItems(),
		justifySelf(),
		aspectRatio(),
		flexBasis(),
		// components
		closeIcons(),
		collapse(),
		flipper(),
		// GUD
		gudLayout(),
		gudFonts(),
		require('tailwindcss-spinner')({
			className: 'spinner',
			themeKey: 'spinner'
		})
	]
};
