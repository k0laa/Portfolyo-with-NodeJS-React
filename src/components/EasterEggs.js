import React, {useEffect, useState} from 'react';
import confetti from 'canvas-confetti';
import {Box,} from '@mui/material';

const EasterEggs = () => {
    const [clickCount, setClickCount] = useState(0);

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
            href="/#home"
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
                    height: {xs: 32, sm: 40},
                    flexGrow: 1,
                    position: 'relative',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {transform: 'scale(1.18)'},
                }}
            />
        </Box>


    </>);
};

export default EasterEggs; 