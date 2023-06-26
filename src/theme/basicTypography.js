export const fontWeight = {
	BOLD: 900,
	MEDIUM: 700,
	REGULAR: 400,
	LIGHT: 300,
};

// 這是基準1rem
const defaultFontSize = 14;

export const typography = () => ({
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	fontSize: defaultFontSize * 0.875,
	htmlFontSize: 16,
	h1: {
		fontWeight: fontWeight.BOLD,
		fontSize: defaultFontSize * 3,
	},
	h2: {
		fontWeight: fontWeight.BOLD,
		fontSize: defaultFontSize * 2,
	},
	h3: {
		fontWeight: fontWeight.MEDIUM,
		fontSize: defaultFontSize * 1.5,
	},
	h4: {
		fontWeight: fontWeight.MEDIUM,
		fontSize: defaultFontSize * 1.25,
	},
	h5: {
		fontWeight: fontWeight.REGULAR,
		fontSize: defaultFontSize,
	},
	h6: {
		fontWeight: fontWeight.REGULAR,
		fontSize: defaultFontSize * 0.875,
	},
});
