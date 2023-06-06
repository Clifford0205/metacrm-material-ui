import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from '../theme/basicTheme';

const useColorMode = () => {
  const [mode, setMode] = useState('light');

  const colorModeHooksValue = useMemo(
    () => ({
      toggleColorMode: newMode => {
        if (newMode) {
          setMode(newMode);
        } else {
          setMode(prev => (prev === 'light' ? 'dark' : 'light'));
        }
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return {
    colorModeHooksValue,
    theme,
  };
};

export default useColorMode;
