import { tokens } from './basicColors';

export const getColorMap = colors => {
  let colorMap = {};
  Object.entries(colors).map(([, colors]) => {
    colorMap = { ...colorMap, ...colors };
    return null;
  });
  return colorMap;
};

// mui theme settings
export const themeSettings = mode => {
  const originalColors = tokens(mode);
  const colors = getColorMap(originalColors);
  console.log('colors: ', colors);
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
      mode: mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
              main: colors.blue[500],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              main: colors.white,
            },
            info: {
              main: colors.yellow[500],
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
              main: colors.green[500],
            },
            neutral: {
              main: colors.white,
            },
            info: {
              main: colors.yellow[500],
            },
            background: {
              default: colors.black,
            },
          }),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14,
      },
      cardTitle: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20,
        fontWeight: 'Bold',
      },
      alert: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16,
        color: colors.pink[600],
      },
    },
    customColors: {
      ...colors,
    },
  };
};
