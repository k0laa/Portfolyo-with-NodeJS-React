import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Head = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'background.default',
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: 'transparent',
                        },
                    },
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: '#6C63FF',
                        },
                        shape: {
                            type: 'circle',
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: '#6C63FF',
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 0.6,
                            direction: 'none',
                            random: true,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: true,
                                rotateX: 5000,
                                rotateY: 20000,
                            },
                        },

                    },
                    interactivity: {
                        detect_on: 'window',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'grab',
                            },
                            // onclick: {
                            //     enable: true,
                            //     mode: 'push',
                            // },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 120,
                                links: {
                                    opacity: 1,
                                },
                            },
                            push: {
                                particles_nb: 4,
                            },
                        },
                    },
                    retina_detect: true,
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            />
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    sx={{zIndex : 2}}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 700,
                            mb: 2,
                            color: 'text.primary',
                            zIndex : 10,
                            position : 'relative',
                            userSelect : 'text',
                            width : 'fit-content',
                        }}
                    >
                        Merhaba, Ben Buğra 👋
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            color: 'text.secondary',
                            mb: 4,
                            zIndex : 10,
                            position : 'relative',
                            userSelect : 'text',
                            width : 'fit-content',
                        }}
                    >
                        Gömülü Sistemler & AI Geliştiricisi
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '600px',
                            mb: 4,
                            color: 'text.secondary',
                            zIndex : 10,
                            position : 'relative',
                            userSelect : 'text',
                            width : 'fit-content',
                        }}
                    >
                        Gömülü sistemler, yapay zeka ve web teknolojileri konusunda tutkulu bir geliştiriciyim.
                        Savunma sanayi ve otonom sistemlerde AI ile fark yaratmayı hedefliyorum.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            href="#projects"
                            sx={{
                                borderRadius: '8px',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                            }}
                        >
                            Projelerimi Gör
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            href="#contact"
                            sx={{
                                borderRadius: '8px',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                            }}
                        >
                            İletişime Geç
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Head;