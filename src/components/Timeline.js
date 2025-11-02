import React from 'react';
import {Box, Container, Typography, Paper} from '@mui/material';
import {motion} from 'framer-motion';
import {FaGraduationCap, FaHandsHelping} from 'react-icons/fa';

const timelineData = [
    {
        type: 'experience',
        title: 'Stajyer Yazılım Geliştirici ',
        institution: 'BT10 Bilgi Teknolojileri',
        date: 'Ağustos 2025',
        description: 'İlk zorunlu stajımı yaptım. BT10 Bilgi Teknolojileri şirketinde kurumsal veri benzerliği projesinde yer aldım. Python, Java, SQLite, Maven, LINDO, Google OR-Tools gibi çeşitli alanlarde eğitim aldım ve çalıştım. ',
        icon: <FaHandsHelping size={24}/>,
    },
    {
        type: 'experience',
        title: 'Yazılım Geliştirici – Savaşan İHA Takımı',
        institution: 'MISYA Topluluğu | Balıkesir Üniversitesi',
        date: '2024 - 2025',
        description: 'MISYA topluluğunun Savaşan İHA takımında, PX4 ile Gazebo simülasyon ortamında YOLO tabanlı nesne tespiti ve otonom sistemler üzerine çalıştım',
        icon: <FaHandsHelping size={24}/>,
    },
    {
        type: 'experience',
        title: 'Teknofest Danışmanlığı',
        institution: 'Altıeylül Belediyesi',
        date: '2024',
        description: 'Teknofest Ortaokul Robolig yarışması kapsamında, öğrencilere danışmanlık yaparak robotik proje geliştirme süreçlerinde rehberlik ettim. Takım çalışması ve mentorluk konusunda değerli deneyimler kazandım.',
        icon: <FaHandsHelping size={24}/>,
    },
    {
        type: 'experience',
        title: 'Aktif Üye | Yapay Zeka Topluluğu',
        institution: 'Balıkesir Üniversitesi',
        date: '2024',
        description: 'Yapay zekaya olan ilgimi keşfetmemi ve bu alanda yön belirlememi sağlayan ilk akademik topluluk.',
        icon: <FaHandsHelping size={24}/>,
    },
    {
        type: 'education',
        title: 'Bilgisayar Mühendisliği',
        institution: 'Balıkesir Üniversitesi',
        date: '2023 - Devam Ediyor',
        description: 'Görüntü işleme, yapay zeka ve otonom sistemlere olan ilgimle, kendimi adım adım geliştirmeye çalışıyorum. Her yeni projede biraz daha öğreniyor, hayalime yaklaşmanın heyecanını yaşıyorum.',
        icon: <FaGraduationCap size={24}/>,
    },
    {
        type: 'education',
        title: 'Lise',
        institution: 'Alanya Hüseyin Girenes Fen Lisesi',
        date: '2019 - 2023',
        description: 'Robotikle başlayan serüvenim, oyun geliştirmeyle devam etti; fark etmeden tutkum, mesleğim oldu. :)',
        icon: <FaGraduationCap size={24}/>,
    },
];

const Timeline = () => {
    return (
        <Box
            id="timeline"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.15, delay: 0.03}}
                    viewport={{once: false}}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: 'text.primary',
                            zIndex: 10,
                            position: 'relative',
                            userSelect: 'text',
                            pointerEvents: 'auto'
                        }}
                    >
                        Eğitim & Deneyim
                    </Typography>

                    <Box sx={{position: 'relative'}}>
                        {/* Timeline çizgisi */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 2,
                                height: '100%',
                                backgroundColor: 'primary.main',
                                '@media (max-width: 900px)': {
                                    left: 20,
                                },
                                pointerEvents: 'none'
                            }}
                        />

                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.15, delay: index * 0.05}}
                                viewport={{once: false}}
                            >
                                <Box
                                    sx={{
                                        justifyContent: 'center',
                                        mb: 4,
                                        '@media (max-width: 900px)': {
                                            justifyContent: 'flex-start',
                                            pl: 6,
                                        },
                                        position: 'relative',
                                        zIndex: 2
                                    }}
                                >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            width: {xs: '100%', md: '45%'},
                                            ml: index % 2 === 0 ? 0 : 'auto',
                                            mr: index % 2 === 0 ? 'auto' : 0,
                                            backgroundColor: 'background.paper',
                                            zIndex: 2,
                                            position: 'relative',
                                            userSelect: 'text',
                                            pointerEvents: 'auto'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                left: index % 2 === 0 ? 'auto' : -40,
                                                right: index % 2 === 0 ? -40 : 'auto',
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: 'primary.main',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                '@media (max-width: 900px)': {
                                                    left: -40,
                                                    right: 'auto',
                                                },
                                            }}
                                        >
                                            {item.icon}
                                        </Box>

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'text.primary', mb: 1,
                                                zIndex: 2,
                                                position: 'relative',
                                                userSelect: 'text',}}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: 'primary.main', mb: 1,

                                                zIndex: 2,
                                                position: 'relative',
                                                userSelect: 'text',
                                            }}
                                        >
                                            {item.institution}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary', mb: 1,

                                                zIndex: 2,
                                                position: 'relative',
                                                userSelect: 'text',
                                            }}
                                        >
                                            {item.date}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',

                                                zIndex: 2,
                                                position: 'relative',
                                                userSelect: 'text',
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Paper>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Timeline;