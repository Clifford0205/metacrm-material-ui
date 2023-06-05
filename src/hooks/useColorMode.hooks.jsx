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
    [setMode] // 將 setMode 加入依賴
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return {
    colorModeHooksValue,
    theme,
  };
};

export default useColorMode;
