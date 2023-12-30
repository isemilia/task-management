import { createTheme } from "@mui/material";


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
    radius: (n = 4) => `${n}px`,
});

export type TCustomTheme = typeof theme;

export default theme;