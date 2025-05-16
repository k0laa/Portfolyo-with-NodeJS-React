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
                primary: isDarkMode ? '#eef0f8' : '#2D3436',
                secondary: isDarkMode ? '#adb2c1' : '#636E72',
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
                        transition: 'all 1.8s ease-in-out',
                        overflowX: 'hidden',
                        width: '100%',
                    },
                    '*': {
                        transition: 'all 1.8s ease-in-out !important',
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                        width: '100%',
                        backdropFilter: 'blur(10px)',
                        backgroundImage: 'none',
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        width: '100%',
                        maxWidth: '100%',
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiBox: {
                styleOverrides: {
                    root: {
                        width: '100%',
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
                    },
                },
            },
            MuiListItemText: {
                styleOverrides: {
                    root: {
                        transition: 'all 1.8s ease-in-out',
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