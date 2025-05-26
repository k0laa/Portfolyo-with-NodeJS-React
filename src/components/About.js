import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaBrain, FaGlobe, FaRobot, FaGamepad } from 'react-icons/fa';

const skills = [
    {
        icon: <FaRobot size={40} />,
        title: 'Gömülü Sistemler',
        description: 'Arduino, Raspberry Pi ve ESP32 ile akıllı sistemler geliştirme',
        color: '#6C63FF',
    },
    {
        icon: <FaBrain size={40} />,
        title: 'Yapay Zeka',
        description: 'TensorFlow ve PyTorch ile derin öğrenme modelleri',
        color: '#FF6584',
    },
    {
        icon: <FaGlobe size={40} />,
        title: 'Web Geliştirme',
        description: 'React ve Flask ile modern web uygulamaları',
        color: '#4CAF50',
    },
    {
        icon: <FaGamepad size={40} />,
        title: 'Oyun Geliştirme',
        description: 'Unity ve Photon ile çok oyunculu oyunlar',
        color: '#FF9800',
    },
];

const About = () => {
    return (
        <Box
            id="about"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: 'text.primary',
                            position: 'relative',
                        }}
                    >
                        Ben Kimim?
                    </Typography>

                    <Grid container spacing={4} alignItems="center"
                    >
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.15, delay: 0.03 }}
                                viewport={{ once: true }}
                            >
                                <Paper elevation={3}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'background.paper',
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                                        },
                                        position: 'relative',
                                    }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mb: 3,
                                            color: 'text.primary',
                                            fontWeight: 600,
                                            zIndex: 2,
                                            position: 'relative',
                                            userSelect: 'text',
                                        }}
                                    >
                                        Gömülü Sistemler & AI Geliştiricisi
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            fontSize: '1.1rem',
                                            zIndex: 2,
                                            position: 'relative',
                                            userSelect: 'text',
                                        }}
                                    >
                                        Ben Buğra Yalçın. Balıkesir Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Küçük yaşlardan itibaren teknolojiye ve yazılıma duyduğum ilgiyle çeşitli projeler geliştirdim. Arduino ve ESP32 gibi donanımlarla çalıştım; Python, C# ve Java dillerinde yazılım geliştirdim. Web, masaüstü ve gömülü sistemler üzerine deneyim sahibiyim.
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            fontSize: '1.1rem',
                                            zIndex: 2,
                                            position: 'relative',
                                            userSelect: 'text',
                                        }}
                                    >
                                        Yapay zekâ, görüntü işleme, otonom sistemler ve savunma teknolojilerine odaklandım. MISYA topluluğunun savaşan İHA ekibinde görüntü işleme algoritmaları geliştiriyor, PX4 ve Gazebo ile simülasyon testleri yapıyorum. Gerçek zamanlı ve enerji verimli sistemler üretmek, hem ilgim hem de kariyer hedefim.

                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            fontSize: '1.1rem',
                                            zIndex: 2,
                                            position: 'relative',
                                            userSelect: 'text',
                                        }}
                                    >
                                        Ayrıca geçmişte Teknofest kapsamında danışmanlık yaparak ortaokul öğrencilerine robotik kodlama eğitimi verdim. Bilgiyi uygulamalı projelerle öğrenmeyi ve
                                        <span style={{ color: 'text.primary', fontWeight: 'bold' }}> paylaşmayı </span>
                                        önemsiyorum. Açık kaynak dünyasını seviyor, yeni şeyler keşfetmekten heyecan duyuyorum. Ve bazen çayımı içerken düşünürüm:
                                        <br /><span style={{
                                            color: 'text.primary',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            marginLeft: '0.5rem'
                                        }}>"Bu satır beni geleceğe götürecek mi?"</span>

                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.15, delay: 0.03 }}
                                viewport={{ once: true }}
                            >
                                <Grid container spacing={3}>
                                    {skills.map((skill, index) => (
                                        <Grid item xs={12} sm={6} key={index} sx={{ height: '370px' }}>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                style={{ height: '100%' }}
                                            >
                                                <Paper
                                                    elevation={3}
                                                    sx={{
                                                        p: 4,
                                                        height: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        textAlign: 'center',
                                                        backgroundColor: 'background.paper',
                                                        borderRadius: 2,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-5px)',
                                                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                                                        },
                                                        position: 'relative',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            color: skill.color,
                                                            mb: 3,
                                                            p: 2,
                                                            borderRadius: '50%',
                                                            backgroundColor: 'rgba(108, 99, 255, 0.1)',
                                                            zIndex: 2,
                                                            position: 'relative',
                                                            userSelect: 'text',
                                                        }}
                                                    >
                                                        {skill.icon}
                                                    </Box>
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            mb: 2,
                                                            color: 'text.primary',
                                                            fontWeight: 600,
                                                            zIndex: 2,
                                                            position: 'relative',
                                                            userSelect: 'text',
                                                        }}
                                                    >
                                                        {skill.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: 'text.secondary',
                                                            lineHeight: 1.6,
                                                            fontSize: '1.1rem',
                                                        }}
                                                    >
                                                        {skill.description}
                                                    </Typography>
                                                </Paper>
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;