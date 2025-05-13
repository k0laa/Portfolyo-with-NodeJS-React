import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaBrain, FaGlobe } from 'react-icons/fa';

const skills = [
    {
        icon: <FaCode size={40} />,
        title: 'Gömülü Sistemler',
        description: 'Arduino, Raspberry Pi ve diğer mikrodenetleyiciler ile projeler geliştirme',
    },
    {
        icon: <FaBrain size={40} />,
        title: 'Yapay Zeka',
        description: 'Makine öğrenmesi ve derin öğrenme modelleri geliştirme',
    },
    {
        icon: <FaGlobe size={40} />,
        title: 'Web Geliştirme',
        description: 'Modern web teknolojileri ile responsive ve interaktif uygulamalar',
    },
    {
        icon: <FaDatabase size={40} />,
        title: 'Veri Bilimi',
        description: 'Veri analizi ve görselleştirme projeleri',
    },
];

const About = () => {
    return (
        <Box
            id="about"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
                zIndex : 1,
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
                            zIndex : 10,
                            position : 'relative',
                            userSelect : 'text',
                            width : 'fit-content',
                            margin: '0 auto',
                            padding: '50px',
                        }}
                    >
                        Hakkımda
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'center',
                            maxWidth: '800px',
                            mx: 'auto',
                            mb: 8,
                            color: 'text.secondary',
                            zIndex : 10,
                            position : 'relative',
                            userSelect : 'text',
                            width : 'fit-content',
                        }}
                    >
                        Gömülü sistemler, yapay zeka ve web teknolojileri konusunda tutkulu bir geliştiriciyim.
                        Günlük hayat problemlerine kod yazarak çözümler üretmeyi seviyorum. Unity ve PhotonNetwork
                        kullanarak çok oyunculu oyunlar geliştiriyorum. Bilgimi açık kaynakla paylaşmayı seviyorum
                        ve hedefim savunma sanayi ve otonom sistemlerde AI ile fark yaratmak!
                    </Typography>

                    <Grid container spacing={4}>
                        {skills.map((skill, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
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
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                            },
                                            zIndex : 2,
                                        }}
                                    >
                                        <Box sx={{ color: 'primary.main', mb: 2 , zIndex : 2}}>
                                            {skill.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{ mb: 1, color: 'text.primary' , zIndex : 2}}
                                        >
                                            {skill.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'text.secondary' , zIndex : 2}}
                                        >
                                            {skill.description}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;