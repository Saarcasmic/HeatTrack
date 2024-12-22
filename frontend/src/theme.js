import { createTheme } from '@mui/material';

export const theme = createTheme({

    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h5: {
        fontWeight: 600,
        letterSpacing: '-0.5px',
        },
        h6: {
        fontWeight: 600,
        letterSpacing: '-0.3px',
        },
        subtitle1: {
        fontWeight: 500,
        },
        subtitle2: {
        fontWeight: 500,
        },
    },
    palette: {
        primary: {
        main: '#6366f1',
        dark: '#4f46e5',
        light: '#818cf8',
        },
        background: {
        default: '#f8fafc',
        paper: '#ffffff',
        },
        grey: {
        50: '#f8fafc',
        100: '#f1f5f9',
        800: '#1e293b',
        900: '#0f172a',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                textTransform: 'none',
                fontWeight: 600,
                },   
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 500,
                    },
                },
            },
        },
    }
});
