import React, {useEffect, useState} from 'react';
import confetti from 'canvas-confetti';
import {Box, Snackbar, Alert, Dialog, DialogTitle, DialogContent, TextField, IconButton} from '@mui/material';
import {FaTimes} from 'react-icons/fa';

const EasterEggs = () => {
    const [clickCount, setClickCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const [typedKeys, setTypedKeys] = useState('');
    const [showKoalaRain, setShowKoalaRain] = useState(false);
    const [konamiCode, setKonamiCode] = useState([]);
    const [showConsole, setShowConsole] = useState(false);
    const [consoleInput, setConsoleInput] = useState('');
    const [invertedColors, setInvertedColors] = useState(false);

    // Logo tıklama sayacı konfeti efekti
    useEffect(() => {
        if (clickCount === 3) {
            confetti({
                particleCount: 500,
                spread: 180,
                origin: {y: 1.5},
                scalar: 1.2,
                startVelocity: 85,
                gravity: 0.5,
                drift: (Math.random() - 0.5) * 0.5,
                disableForReducedMotion: true,
                zIndex: 9999,
            });
            setClickCount(0);
        }
    }, [clickCount]);


    // Logo tıklama işleyicisi
    const handleLogoClick = () => {
        setClickCount(prev => prev + 1);
    };

    return (<>
            <style>
                {`
                    @keyframes fall {
                        to {
                            transform: translateY(${window.innerHeight}px) rotate(360deg);
                        }
                    }
                `}
            </style>

            <Box
                component="a"
                href="#home"
                onClick={handleLogoClick}
                sx={{
                    display: 'block', cursor: 'pointer', '&:hover': {
                        opacity: 0.8,
                    },
                }}
            >
                <Box
                    component="img"
                    src="/logo.png"
                    alt="Logo"
                    sx={{
                        height: {xs: 32, sm: 40}, flexGrow: 1, display: 'relative',
                    }}
                />
            </Box>


        </>);
};

export default EasterEggs; 