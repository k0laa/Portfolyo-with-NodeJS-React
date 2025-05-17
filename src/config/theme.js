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
                default: isDarkMode ? 'rgb(18,18,18)' : 'rgb(245,245,245)',
                paper: isDarkMode ? 'rgb(28, 28, 28)' : 'rgb(235, 235, 235)',
            },
            text: {
                primary: isDarkMode ? '#eef0f8' : '#232729',
                secondary: isDarkMode ? '#adb2c1' : '#3f4649',
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
                        transition: 'all 0.65s ease-in-out',
                        overflowX: 'hidden',
                        width: '100%',
                    },
                    '*': {
                        transition: 'all 0.65s ease-in-out !important',
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? 'rgba(18, 18, 18, 0.6)' : 'rgba(245, 245, 245, 0.6)',
                        width: '100%',
                        backdropFilter: 'blur(10px)',
                        backgroundImage: 'none',
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        width: '100%',
                        maxWidth: '100%',
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiBox: {
                styleOverrides: {
                    root: {
                        width: '100%',
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
            MuiListItemText: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.65s ease-in-out',
                    },
                },
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
            },
            h2: {
                fontSize: 'clamp(1.8rem, 4vw, 10rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
            },
            h3: {
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 600,
                lineHeight: 1.4,
            },
            h4: {
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 500,
                lineHeight: 1.4,
            },
            h5: {
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 500,
                lineHeight: 1.4,
            },
            h6: {
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 500,
                lineHeight: 1.4,
            },
            subtitle1: {
                fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                lineHeight: 1.5,
                letterSpacing: '0.00938em',
            },
            subtitle2: {
                fontSize: 'clamp(0.875rem, 1.3vw, 0.9rem)',
                lineHeight: 1.57,
                letterSpacing: '0.00714em',
            },
            body1: {
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                lineHeight: 1.5,
                letterSpacing: '0.00938em',
            },
            body2: {
                fontSize: 'clamp(0.75rem, 1.1vw, 0.875rem)',
                lineHeight: 1.43,
                letterSpacing: '0.01071em',
            },
            button: {
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                textTransform: 'none',
                fontWeight: 500,
                letterSpacing: '0.02857em',
            },
            caption: {
                fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                lineHeight: 1.66,
                letterSpacing: '0.03333em',
            },
            overline: {
                fontSize: 'clamp(0.625rem, 0.9vw, 0.75rem)',
                lineHeight: 2.66,
                letterSpacing: '0.08333em',
                textTransform: 'uppercase',
            },
        },
    });
};