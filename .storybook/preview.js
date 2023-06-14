/** @type { import('@storybook/react').Preview } */
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';

import ColorModeContext from '@/contexts/ColorMode.context';
import useColorMode from '@/hooks/useColorMode.hooks';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      title: 'Theme',
      description: 'Theme for your components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'light', left: '☀️', title: 'Light mode' },
          { value: 'dark', left: '🌙', title: 'Dark mode' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { colorModeHooksValue, theme } = useColorMode();
      const { toggleColorMode, mode } = colorModeHooksValue;

      const { theme: themeKey } = context.globals;

      useEffect(() => {
        toggleColorMode(themeKey);
      }, [themeKey, toggleColorMode]);

      return (
        <ColorModeContext.Provider value={colorModeHooksValue}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
          </ThemeProvider>
        </ColorModeContext.Provider>
      );
    },
  ],
};

export default preview;
