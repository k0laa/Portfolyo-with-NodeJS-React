import React from 'react';
import {Box, Container, Typography, Grid, Paper} from '@mui/material';
import {motion} from 'framer-motion';
import {FaBrain, FaGlobe, FaRobot, FaGamepad} from 'react-icons/fa';

const skills = [
    {
        icon: <FaRobot size={40}/>,
        title: 'Gömülü Sistemler',
        description: 'Arduino, Raspberry Pi ve ESP32 ile akıllı sistemler geliştirme',
        color: '#6C63FF',
    },
    {
        icon: <FaBrain size={40}/>,
        title: 'Yapay Zeka',
        description: 'TensorFlow ve PyTorch ile derin öğrenme modelleri',
        color: '#FF6584',
    },
    {
        icon: <FaGlobe size={40}/>,
        title: 'Web Geliştirme',
        description: 'React ve Flask ile modern web uygulamaları',
        color: '#4CAF50',
    },
    {
        icon: <FaGamepad size={40}/>,
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
                backgroundColor: 'transparent',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: 'text.primary',
                            position: 'relative',
                            // '&::after': {
                            //     content: '""',
                            //     position: 'absolute',
                            //     bottom: '-10px',
                            //     left: '50%',
                            //     transform: 'translateX(-50%)',
                            //     width: '100px',
                            //     height: '4px',
                            //     background: 'linear-gradient(90deg, #6C63FF, #FF6584)',
                            //     borderRadius: '2px',
                            // },
                        }}
                    >
                        Hakkımda
                    </Typography>

                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{opacity: 0, x: -50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.8, delay: 0.2}}
                                viewport={{once: true}}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        color: 'text.primary',
                                        fontWeight: 600,
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
                                    }}
                                >
                                    Merhaba, ben Buğra. Gömülü sistemlerden yapay zekâya, web teknolojilerinden çok
                                    oyunculu
                                    oyunlara kadar "nerede kod, orada ben" diyebileceğiniz bir geliştiriciyim.


                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 3,
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    ESP32 ile uğraşırken bir anda kendimi savaşan İHA'lara algoritma yazarken, ertesi
                                    gün Photon
                                    Network ile bir oyun sunucusunun çöküşünü izlerken bulabilirim. (Ama sonra
                                    düzeltirim. Söz.)


                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 3,
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Kod yazarken sadece "çalıştı" demekle yetinmem — neden çalıştı, daha iyi nasıl
                                    çalışır, uçar mı,
                                    kaçar mı? Savunma sanayine akıllı sistemler
                                    kazandırmak ve
                                    hayatı daha otonom hâle getirmek hedefim. Çünkü neden sadece çalışsın ki, biraz da
                                    akıllı olsun
                                    değil mi?


                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Kısaca, hayatım "debug" ile "deploy" arasında geçen bir serüven. Açık kaynak ruhunu
                                    seviyor,
                                    bilgiyi paylaşmaktan ve keşfetmekten büyük mutluluk duyuyorum.Ve evet, bazen kod
                                    yazıp çayımı içerken derin
                                    derin düşünürüm:
                                    <br/><span style={{
                                    color: 'text.primary',
                                    fontWeight: 'bold',
                                    fontStyle: 'italic',
                                    marginLeft: '0.5rem'
                                }}>"Bu satır beni geleceğe götürecek mi?"</span>
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{opacity: 0, x: 50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.8, delay: 0.4}}
                                viewport={{once: true}}
                            >
                                <Grid container spacing={2}>
                                    {skills.map((skill, index) => (
                                        <Grid item xs={12} sm={6} key={index}>
                                            <motion.div
                                                whileHover={{scale: 1.05}}
                                                whileTap={{scale: 0.95}}
                                            >
                                                <Paper
                                                    elevation={3}
                                                    sx={{
                                                        p: 3,
                                                        height: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        textAlign: 'center',
                                                        backgroundColor: 'background.paper',
                                                        borderRadius: 2,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-5px)',
                                                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                                                        },
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            color: skill.color,
                                                            mb: 2,
                                                            p: 1,
                                                            borderRadius: '50%',
                                                            backgroundColor: 'rgba(108, 99, 255, 0.1)',
                                                        }}
                                                    >
                                                        {skill.icon}
                                                    </Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            mb: 1,
                                                            color: 'text.primary',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {skill.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: 'text.secondary',
                                                            lineHeight: 1.6,
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