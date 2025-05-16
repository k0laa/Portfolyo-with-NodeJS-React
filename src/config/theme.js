import {createTheme} from '@mui/material';

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
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
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
                        overflowX: 'hidden',
                        width: '100%',
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.65)' : 'rgba(255, 255, 255, 0.65)',
                        width: '100%',
                    },
                },
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        paddingLeft: {
                            xs: 2,
                            sm: 3,
                            md: 4,
                        },
                        paddingRight: {
                            xs: 2,
                            sm: 3,
                            md: 4,
                        },
                        maxWidth: {
                            xs: '100%',
                            sm: '600px',
                            md: '960px',
                            lg: '1280px',
                        },
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        width: '100%',
                        maxWidth: '100%',
                    },
                },
            },
            MuiBox: {
                styleOverrides: {
                    root: {
                        width: '100%',
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
            }
        },
    });
}; 