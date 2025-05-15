import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6C63FF',
        },
        secondary: {
            main: '#FF6584',
        },
        background: {
            default: '#0A192F',
            paper: '#112240',
        },
        text: {
            primary: '#CCD6F6',
            secondary: '#8892B0',
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

export default theme; 