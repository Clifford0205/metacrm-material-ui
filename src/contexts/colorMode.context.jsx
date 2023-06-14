import { createContext } from 'react';

const colorModeContext = createContext({
  mode: '',
  toggleColorMode: () => {},
});

export default colorModeContext;
