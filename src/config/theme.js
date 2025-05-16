import { createTheme } from '@mui/material';

export const getTheme = (isDarkMode) => {
    return createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: '#6C63FF',
                dark: '#5550CC',
            },
            secondary: {
                main: '#FF6584',
            },
            background: {
                default: isDarkMode ? '#0A192F' : '#FFFFFF',
                paper: isDarkMode ? '#112240' : '#F8F9FA',
            },
            text: {
                primary: isDarkMode ? '#CCD6F6' : '#2D3436',
                secondary: isDarkMode ? '#8892B0' : '#636E72',
            },
        },
        transitions: {
            duration: {
                shortest: 150,
                shorter: 200,
                short: 250,
                standard: 300,
                complex: 375,
                enteringScreen: 225,
                leavingScreen: 195,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.65)' : 'rgba(255, 255, 255, 0.65)',
                    },
                },
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontWeight: 700,
            },
            h2: {
                fontWeight: 600,
            },
        },
    });
}; 