/** @type { import('@storybook/react').Preview } */
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import useColorMode from '@/hooks/useColorMode.hooks';
import { useEffect } from 'react';

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
      const { toggleColorMode } = colorModeHooksValue;
      const { theme: themeKey } = context.globals;

      useEffect(() => {
        toggleColorMode(themeKey);
      }, [themeKey, toggleColorMode]);

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
