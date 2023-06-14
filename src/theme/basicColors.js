export const colorType = {
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  TEXT: 'Text',
  BACKGROUND: 'Background',
  INDICATION: 'Indication',
  OTHERS: 'Others',
  LABEL: 'Label',
  REPORT: 'Report',
  GRADIENT: 'Gradient',
  TABLE: 'Table',
  LOADER: 'Loader',
  OLD_COLORS: 'OldColors',
  CALL_VIEW_COLORS: 'CallViewColors',
};

export const tokens = mode => ({
  ...(mode === 'light'
    ? {
        [colorType.PRIMARY]: {
          blue: {
            100: '#cceaff',
            200: '#99d5ff',
            300: '#66c0ff',
            400: '#33abff',
            500: '#0096ff',
            600: '#0078cc',
            700: '#005a99',
            800: '#003c66',
            900: '#001e33',
          },
          pink: {
            100: '#ffd6ea',
            200: '#ffadd5',
            300: '#ff84c0',
            400: '#ff5bab',
            500: '#ff3296',
            600: '#cc2878',
            700: '#991e5a',
            800: '#66143c',
            900: '#330a1e',
          },
          yellow: {
            100: '#fff4d0',
            200: '#ffe9a1',
            300: '#ffde72',
            400: '#ffd343',
            500: '#ffc814',
            600: '#cca010',
            700: '#99780c',
            800: '#665008',
            900: '#332804',
          },
          green: {
            100: '#d0f4e0',
            200: '#a1e9c1',
            300: '#72dea2',
            400: '#43d383',
            500: '#14c864',
            600: '#10a050',
            700: '#0c783c',
            800: '#085028',
            900: '#042814',
          },

          blackForm: {
            100: '#d0d0d0',
            200: '#a1a1a1',
            300: '#727172',
            400: '#434243',
            500: '#141314',
            600: '#100f10',
            700: '#0c0b0c',
            800: '#080808',
            900: '#040404',
          },
          grey: {
            200: '#F8F8F8',
            300: '#E6E6E6',
            400: '#D6D6D6',
            500: '#A5A5A5',
            600: '#777',
            700: '#555',
            800: '#383538',
          },
          black: '#000000',
          white: '#ffffff',
        },
      }
    : {
        [colorType.PRIMARY]: {
          blue: {
            100: '#001e33',
            200: '#003c66',
            300: '#005a99',
            400: '#0078cc',
            500: '#0096ff',
            600: '#33abff',
            700: '#66c0ff',
            800: '#99d5ff',
            900: '#cceaff',
          },
          pink: {
            100: '#330a1e',
            200: '#66143c',
            300: '#991e5a',
            400: '#cc2878',
            500: '#ff3296',
            600: '#ff5bab',
            700: '#ff84c0',
            800: '#ffadd5',
            900: '#ffd6ea',
          },
          yellow: {
            100: '#332804',
            200: '#665008',
            300: '#99780c',
            400: '#cca010',
            500: '#ffc814',
            600: '#ffd343',
            700: '#ffde72',
            800: '#ffe9a1',
            900: '#fff4d0',
          },
          green: {
            100: '#042814',
            200: '#085028',
            300: '#0c783c',
            400: '#10a050',
            500: '#14c864',
            600: '#43d383',
            700: '#72dea2',
            800: '#a1e9c1',
            900: '#d0f4e0',
          },
          blackForm: {
            100: '#040404',
            200: '#080808',
            300: '#0c0b0c',
            400: '#100f10',
            500: '#141314',
            600: '#434243',
            700: '#727172',
            800: '#a1a1a1',
            900: '#d0d0d0',
          },
          grey: {
            200: '#383538',
            300: '#555',
            400: '#777',
            500: '#A5A5A5',
            600: '#D6D6D6',
            700: '#E6E6E6',
            800: '#F8F8F8',
          },
          white: '#ffffff',
          black: '#000000',
        },
      }),
});
