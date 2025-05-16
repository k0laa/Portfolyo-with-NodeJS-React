import React, {useEffect, useState} from 'react';
import {ThemeProvider, Box} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {EMAILJS_CONFIG} from './config/constants';
import {getTheme} from './config/theme';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "./components/Head";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={getTheme(isDarkMode)}>
            <Router>
                <Box className="App" sx={{width: '100%', overflowX: 'hidden', position: 'relative',}}>
                    <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                    <Head/>
                    <About/>
                    <Skills/>
                    <Timeline/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;