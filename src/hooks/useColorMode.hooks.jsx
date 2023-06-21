import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from '../theme/basicTheme';

const useColorMode = () => {
	const [mode, setMode] = useState('light');

	const colorModeHooksValue = useMemo(
		() => ({
			mode,
			toggleColorMode: (newMode) => {
				if (newMode) {
					setMode(newMode);
				} else {
					setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
				}
			},
		}),
		[mode],
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return {
		colorModeHooksValue,
		theme,
	};
};

export default useColorMode;
