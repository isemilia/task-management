import { Theme, createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        radius: (n?: number) => string;
    }
    interface ThemeOptions {
        radius?: (n?: number) => string;
    }
}

const muiTheme = createTheme({
    spacing: 4,
});

const customTheme = {
    ...muiTheme,
    radius: (n = 4) => `${n}px`,
};

export default customTheme as Theme & typeof customTheme;