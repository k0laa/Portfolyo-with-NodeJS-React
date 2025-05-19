import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
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
            <ParticlesBackground />
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: 0.03 }}
                    sx={{ zIndex: 2 }}
                    viewport={{ once: false }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'text.primary',
                            zIndex: 10,
                            position: 'relative',
                            userSelect: 'text',
                        }}
                    >
                        Merhaba, Ben Buğra 👋
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
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
                            maxWidth: '750px',
                            mb: 4,
                            color: 'text.secondary',
                            zIndex: 10,
                            position: 'relative',
                            userSelect: 'text',
                            width: 'fit-content',
                        }}
                    >
                        Gömülü sistemler ve yapay zekâ teknolojilerine ilgi duyan bir geliştiriciyim.
                        Amacım otonom sistemlerde yapay zekâyla yenilikçi çözümler üretirken aynı zamanda
                        açık kaynak kültürünü destekleyerek
                        bilgiyi paylaşmak ve birlikte gelişmek.
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