import { createTheme } from '@mui/material';
import typography from './typography';


declare module '@mui/material' {
  export interface Theme {
    radius: (n?: number) => string;
  }

  export interface ThemeOptions {
    radius?: (n?: number) => string;
  }
}

const theme = createTheme({
  spacing: 4,
  radius: (n: number = 1) => `${n * 4}px`,
  typography,
});

export type TCustomTheme = typeof theme;

export default theme;