module.exports = function gudFonts() {
	return ({ addBase }) => {
		// Default GUD font weights
		const defaultFontWeight = {
			light: 300,
			book: 400,
			medium: 500,
			bold: 700,
			black: 900
		};

		// Latin
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-Light.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-Light.woff') format("woff")`,
				'font-weight': defaultFontWeight.light,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-LightItalic.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-LightItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.light,
				'font-style': 'italic'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-Book.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-Book.woff') format("woff")`,
				'font-weight': defaultFontWeight.book,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-BookItalic.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-BookItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.book,
				'font-style': 'italic'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-Medium.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-Medium.woff') format("woff")`,
				'font-weight': defaultFontWeight.medium,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-MediumItalic.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-MediumItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.medium,
				'font-style': 'italic'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-Bold.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-Bold.woff') format("woff")`,
				'font-weight': defaultFontWeight.bold,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-BoldItalic.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-BoldItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.bold,
				'font-style': 'italic'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-Black.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-Black.woff') format("woff")`,
				'font-weight': defaultFontWeight.black,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular Latin'`,
				'font-display': 'swap',
				'src': `url('/fonts/circular-west/EFCircularWeb-BlackItalic.woff2') format("woff2"), url('/fonts/circular-west/EFCircularWeb-BlackItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.black,
				'font-style': 'italic'
			}
		});

		// Latin - Extended
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-Light.woff2') format("woff2"), url('/fonts/EFCircularWeb-Light.woff') format("woff")`,
				'font-weight': defaultFontWeight.light,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-LightItalic.woff2') format("woff2"), url('/fonts/EFCircularWeb-LightItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.light,
				'font-style': 'italic'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-Book.woff2') format("woff2"), url('/fonts/EFCircularWeb-Book.woff') format("woff")`,
				'font-weight': defaultFontWeight.book,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-BookItalic.woff2') format("woff2"), url('/fonts/EFCircularWeb-BookItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.book,
				'font-style': 'italic'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-Medium.woff2') format("woff2"), url('/fonts/EFCircularWeb-Medium.woff') format("woff")`,
				'font-weight': defaultFontWeight.medium,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-MediumItalic.woff2') format("woff2"), url('/fonts/EFCircularWeb-MediumItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.medium,
				'font-style': 'italic'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-Bold.woff2') format("woff2"), url('/fonts/EFCircularWeb-Bold.woff') format("woff")`,
				'font-weight': defaultFontWeight.bold,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-BoldItalic.woff2') format("woff2"), url('/fonts/EFCircularWeb-BoldItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.bold,
				'font-style': 'italic'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-Black.woff2') format("woff2"), url('/fonts/EFCircularWeb-Black.woff') format("woff")`,
				'font-weight': defaultFontWeight.black,
				'font-style': 'normal'
			}
		});
		addBase({
			'@font-face': {
				'font-family': `'EF Circular'`,
				'font-display': 'swap',
				'src': `url('/fonts/EFCircularWeb-BlackItalic.woff2') format("woff2"), url('/fonts/EFCircularWeb-BlackItalic.woff') format("woff")`,
				'font-weight': defaultFontWeight.black,
				'font-style': 'italic'
			}
		});
	};
};
