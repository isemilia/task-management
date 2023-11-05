/// <reference types="vite/client" />

declare module '@mui/material/styles' {
    interface Theme {
        radius: (n?: number) => string
    }
    interface ThemeOptions {
        radius?: (n?: number) => string
    }
}