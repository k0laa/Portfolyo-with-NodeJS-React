import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Head from "./components/Head";

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

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Head />
          </div>
        </Router>
      </ThemeProvider>
  );
}

export default App;