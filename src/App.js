import React, {useEffect} from 'react';
import {ThemeProvider} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import theme from './config/theme';
import {EMAILJS_CONFIG} from './config/constants';

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
    useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Navbar/>
                    <Head/>
                    <About/>
                    <Skills/>
                    <Timeline/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;