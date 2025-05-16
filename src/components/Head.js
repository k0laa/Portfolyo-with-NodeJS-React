import React from 'react';
import {Box, Typography, Container, Button} from '@mui/material';
import {motion} from 'framer-motion';
import ParticlesBackground from './Particles';


const Head = () => {


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
            <ParticlesBackground/>
            <Container maxWidth="lg">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.15, delay: 0.03}}
                    sx={{zIndex: 2}}
                    viewport={{once: false}}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {xs: '2.5rem', md: '4rem'},
                            fontWeight: 700,
                            mb: 2,
                            color: 'text.primary',
                            zIndex: 10,
                            position: 'relative',
                            userSelect: 'text',
                            width: 'fit-content',

                        }}
                    >
                        Merhaba, Ben Buğra 👋
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: {xs: '1.5rem', md: '2rem'},
                            color: 'text.secondary',
                            mb: 4,
                            zIndex: 10,
                            position: 'relative',
                            userSelect: 'text',
                            width: 'fit-content',
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
                            zIndex: 10,
                            position: 'relative',
                            userSelect: 'text',
                            width: 'fit-content',
                        }}
                    >
                        Gömülü sistemler, yapay zeka ve web teknolojileri konusunda tutkulu bir geliştiriciyim.
                        Savunma sanayi ve otonom sistemlerde AI ile fark yaratmayı hedefliyorum.
                    </Typography>
                    <Box sx={{display: 'flex', gap: 2}}>
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