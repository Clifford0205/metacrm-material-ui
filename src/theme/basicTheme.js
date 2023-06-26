import { tokens } from './basicColors';
import { typography, fontWeight } from './basicTypography';

export const getColorMap = (colors) => {
	let colorMap = {};
	Object.entries(colors).map(([, colorValues]) => {
		colorMap = { ...colorMap, ...colorValues };
		return null;
	});
	return colorMap;
};

// mui theme settings
export const themeSettings = (mode) => {
	const originalColors = tokens(mode);
	const colors = getColorMap(originalColors);
	return {
		breakpoints: {
			values: {
				xs: 0,
				sm: 768,
				md: 980,
				lg: 1200,
				xl: 1536,
			},
		},
		palette: {
			mode,
			...(mode === 'light'
				? {
						// palette values for light mode
						primary: {
							main: colors.blue[500],
						},
						secondary: {
							main: colors.purple[500],
						},
						error: {
							main: colors.pink[600],
						},
						neutral: {
							main: colors.white,
						},
						info: {
							main: colors.black,
						},
						success: {
							main: colors.black,
						},
						text: {
							primary: colors.grey[800],
							secondary: colors.grey[700],
							disabled: colors.grey[500],
						},
						background: {
							default: colors.white,
						},
				  }
				: {
						// palette values for dark mode
						primary: {
							main: colors.blue[500],
						},
						secondary: {
							main: colors.purple[500],
						},
						error: {
							main: colors.pink[600],
						},
						neutral: {
							main: colors.white,
						},
						info: {
							main: colors.black,
						},
						success: {
							main: colors.black,
						},
						text: {
							primary: colors.grey[800],
							secondary: colors.grey[700],
							disabled: colors.grey[500],
						},
						background: {
							default: colors.black,
						},
				  }),
		},
		typography: typography(),
		fontWeight,
		customColors: {
			...colors,
		},
	};
};
