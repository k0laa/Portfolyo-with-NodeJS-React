import React, { useEffect, useState } from 'react';
import { ThemeProvider, Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './config/constants';
import { getTheme } from './config/theme';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "./components/Head";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AllProjects from './pages/AllProjects';
import ScrollToTop from './components/common/ScrollToTop';

// Scroll to hash component
const ScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return null;
};

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Önce localStorage'dan tema tercihini kontrol et
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme !== null) {
            return savedTheme === 'dark';
        }
        // Eğer localStorage'da tema tercihi yoksa, sistem temasını kullan
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // EmailJS başlatma
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

        // Tema değiştiğinde localStorage'a kaydet
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={getTheme(isDarkMode)}>
            <CssBaseline />
            <Router>
                <Box className="App" sx={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
                    <ScrollToHash />
                    <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Head />
                                <About />
                                <Skills />
                                <Timeline />
                                <Projects isDarkMode={isDarkMode} />
                                <Contact />
                            </>
                        } />
                        <Route path="/all-projects" element={<AllProjects isDarkMode={isDarkMode} />} />
                    </Routes>
                    <Footer />
                    <ScrollToTop />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;