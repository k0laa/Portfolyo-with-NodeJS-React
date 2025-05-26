import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaHtml5 } from 'react-icons/fa';
import {
    SiTensorflow,
    SiArduino,
    SiCplusplus,
    SiJavascript,
    SiFlask,
    SiElectron,
    SiEspressif,
    SiAutodesk,
    SiSqlite,
    SiOpencv,
    SiPytorch,
    SiJetbrains, SiUbuntu, SiUnity, SiPhoton, SiSelenium, SiPlotly, SiNumpy, SiVsco, SiCurl,
} from 'react-icons/si';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { MdOutlineViewInAr } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import * as PropTypes from "prop-types";

function SiYolobit() {
    return null;
}

SiYolobit.propTypes = { size: PropTypes.number };

function SiGazebo() {
    return null;
}

SiGazebo.propTypes = { size: PropTypes.number };

const skills = [
    {
        category: 'Programlama Dilleri',
        items: [
            { name: 'Python', icon: <FaPython size={30} />, level: 85 },
            { name: 'C#', icon: <SiCplusplus size={30} />, level: 70 },
            { name: 'Java', icon: <FaJava size={30} />, level: 65 },
            { name: 'JavaScript', icon: <SiJavascript size={30} />, level: 40 },
        ]
    },
    {
        category: 'Arayüz Teknolojileri',
        items: [
            { name: 'Flask', icon: <SiFlask size={30} />, level: 70 },
            { name: 'HTML/CSS', icon: <FaHtml5 size={30} />, level: 75 },
            { name: 'React', icon: <FaReact size={30} />, level: 65 },
            { name: 'Electron.js', icon: <SiElectron size={30} />, level: 45 }
        ]
    },
    {
        category: 'Gömülü & IoT',
        items: [
            { name: 'Arduino', icon: <SiArduino size={30} />, level: 80 },
            { name: 'ESP32', icon: <SiEspressif size={30} />, level: 80 },
            { name: 'Fusion 360', icon: <SiAutodesk size={30} />, level: 60 }
        ]
    },
    {
        category: 'Framework ve Diğer Kütüphaneler',
        items: [
            { name: 'Selenium', icon: <SiSelenium size={30} />, level: 70 },
            { name: 'Matplotlib', icon: <SiPlotly size={30} />, level: 60 },
            { name: 'NumPy', icon: <SiNumpy size={30} />, level: 80 }
        ]
    },
    {
        category: 'Yapay Zeka & Görüntü İşleme',
        items: [
            { name: 'TensorFlow', icon: <SiTensorflow size={30} />, level: 70 },
            { name: 'OpenCV', icon: <SiOpencv size={30} />, level: 85 },
            { name: 'YOLO', icon: <AiOutlineEye  size={30} />, level: 75 },
            { name: 'PyTorch', icon: <SiPytorch size={30} />, level: 50 }
        ]
    },
    {
        category: 'Simülasyon & Otonom Sistemler',
        items: [
            { name: 'Gazebo', icon: <GiPerspectiveDiceSixFacesRandom  size={30} />, level: 80 },
            { name: 'PX4 Autopilot', icon: <MdOutlineViewInAr  size={30} />, level: 70 }
        ]
    },
    {
        category: 'IDE ve Ortamlar',
        items: [
            { name: 'JetBrains', icon: <SiJetbrains size={30} />, level: 90 },
            { name: 'WSL Ubuntu', icon: <SiUbuntu size={30} />, level: 85 },
            { name: 'Cursor', icon: <SiCurl size={30} />, level: 75 },
            { name: 'VsCode', icon: <SiVsco size={30} />, level: 70 },
        ]
    },
    {
        category: 'Oyun Geliştirme',
        items: [
            { name: 'Unity', icon: <SiUnity size={30} />, level: 70 },
            { name: 'Photon Network 2', icon: <SiPhoton size={30} />, level: 60 }
        ]
    },
    {
        category: 'Veritabanı',
        items: [
            { name: 'SQLite', icon: <SiSqlite size={30} />, level: 85 }
        ]
    }
];

const Skills = () => {
    return (
        <Box
            id="skills"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
                zIndex: 2,
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                ><Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        color: 'text.primary',
                        position: 'relative',
                    }}
                >
                        Neler Yapabilirim?
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={3}
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
                                }}
                            >

                                <Typography
                                    variant="body1"
                                    sx={{
                                        textAlign: 'left',
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: 'text.primary', marginBottom: '15px', fontWeight: 'bold', marginTop: '35px' }}>Paylaşımcı Yaklaşım</Typography>

                                    Farklı alanlardaki teknik bilgi ve deneyimlerimle gömülü sistemlerden yapay zekâya,
                                    oyun geliştirmeden modern arayüz tasarımlarına kadar pek çok projeye katkı sağlayabilirim.
                                    Uygulamalı çözümler üretmeye ve  <span style={{ fontWeight: 'bold' }}> bilgimi paylaşarak </span> başkalarına ilham vermeye istekliyim.

                                    <Typography variant="h6" sx={{ color: 'text.primary', marginBottom: '15px', fontWeight: 'bold', marginTop: '35px' }}>Gömülü Sistemler & IoT</Typography>
                                    Arduino ve ESP32 ile çeşitli donanım projeleri geliştirdim.
                                    ESC, servo ve DC motor kontrollünü kompleks projelerde başarılı şekilde gerçekleştirebiliyorum.
                                    Kablosuz iletişimde ESP-NOW, nRF24L01, Bluetooth ve Wifi protokollerini etkin biçimde kullanıyorum.

                                    <Typography variant="h6" sx={{ color: 'text.primary', marginBottom: '15px', fontWeight: 'bold', marginTop: '35px' }}>Yapay Zeka & Görüntü İşleme</Typography>
                                    YOLO ve SSD tabanlı nesne tanıma modelleriyle nesne algılama sistemleri geliştirdim.
                                    OpenCV kullanarak görüntü işleme uygulamaları geliştirdim.
                                    Ayrıca Gazebo ve PX4 ile otonom uçuş simülasyonları üzerinde çalıştım.

                                    <Typography variant="h6" sx={{ color: 'text.primary', marginBottom: '15px', fontWeight: 'bold', marginTop: '35px' }}>Uygulama ve Web Geliştirme</Typography>
                                    Python ve Flask ile API entegrasyonları yapabiliyorum.
                                    PyQt5 ve Electron.js masaüstü uygulamaları için şık ve işlevsel arayüzler tasarlayabilirim.
                                    React ile responsive web uygulamaları geliştirebilirim.

                                    <Typography variant="h6" sx={{ color: 'text.primary', marginBottom: '15px', fontWeight: 'bold', marginTop: '35px' }}>Oyun Geliştirme</Typography>
                                    Unity ve Photon Network 2    kullanarak çok oyunculu 2D ve 3D oyunlar tasarlayabilirim.

                                    <Typography variant="h6" sx={{ color: 'text.primary', marginBottom: '15px', fontWeight: 'bold', marginTop: '35px' }}>Mentorluk & Eğitim</Typography>
                                    Ortaokul öğrencilerine robotik, Arduino ve temel yazılım konularında eğitim verebilirim.
                                    Teknofest projelerinde danışmanlık yaparak fikir geliştirme, devre tasarımı ve kodlama süreçlerinde öğrencilere rehberlik edebilirim.
                                    Kodlama ve robotik yarışmalarına hazırlık aşamasında teknik destek ve motivasyon sağlayabilirim.

                                    <Typography variant="h6" sx={{ color: 'text.primary', marginBottom: '15px', fontWeight: 'bold', marginTop: '35px' }}>Diğer Teknik Yetkinlikler</Typography>
                                    Java ve C# dillerinde algoritmalar ve veri yapıları üzerine çalışmalar yaptım.
                                    MATLAB kullanarak sayısal analiz ve mühendislik hesaplamaları gerçekleştirebilirim.
                                    Thinkercad ve Fusion 360 ile devre tasarımı ve 3D modelleme sunabilirim.

                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                {skills.map((category, categoryIndex) => (
                                    <Grid item xs={12} key={categoryIndex}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                p: 2,
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
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    mb: 2,
                                                    color: 'text.primary',
                                                    textAlign: 'left',
                                                    borderBottom: '2px solid',
                                                    borderColor: 'primary.main',
                                                    pb: 1,
                                                    fontSize: '1.1rem',
                                                }}
                                            >
                                                {category.category}
                                            </Typography>
                                            <Grid container spacing={1}>
                                                {category.items.map((skill, skillIndex) => (
                                                    <Grid item xs={4} sm={3} md={2} key={skillIndex}>
                                                        <motion.div
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center',
                                                                    p: 1,
                                                                    borderRadius: 1,
                                                                    '&:hover': {
                                                                        backgroundColor: 'rgba(108, 99, 255, 0.1)',
                                                                    },
                                                                }}
                                                            >
                                                                <Box sx={{ color: 'primary.main', mb: 0.5 }}>
                                                                    {React.cloneElement(skill.icon, { size: 25 })}
                                                                </Box>
                                                                <Typography
                                                                    variant="caption"
                                                                    sx={{
                                                                        color: 'text.primary',
                                                                        textAlign: 'center',
                                                                        fontSize: '0.7rem',
                                                                        lineHeight: 1.2,
                                                                    }}
                                                                >
                                                                    {skill.name}
                                                                </Typography>
                                                            </Box>
                                                        </motion.div>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Skills;