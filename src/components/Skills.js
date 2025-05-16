import React from 'react';
import {Box, Container, Typography, Grid, Paper} from '@mui/material';
import {motion} from 'framer-motion';
import {FaPython, FaJava, FaReact, FaHtml5} from 'react-icons/fa';
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
    SiDrone,
    SiJetbrains, SiUbuntu, SiUnity, SiPhoton, SiSelenium, SiPlotly, SiNumpy, SiVsco, SiCurl
} from 'react-icons/si';
import * as PropTypes from "prop-types";

function SiYolobit() {
    return null;
}

SiYolobit.propTypes = {size: PropTypes.number};

function SiGazebo() {
    return null;
}

SiGazebo.propTypes = {size: PropTypes.number};

const skills = [
    {
        category: 'Programlama Dilleri',
        items: [
            {name: 'Python', icon: <FaPython size={30}/>, level: 85},
            {name: 'C#', icon: <SiCplusplus size={30}/>, level: 70},
            {name: 'Java', icon: <FaJava size={30}/>, level: 65},
            {name: 'JavaScript', icon: <SiJavascript size={30}/>, level: 40},
        ]
    },
    {
        category: 'Web & UI Teknolojileri',
        items: [
            {name: 'Flask', icon: <SiFlask size={30}/>, level: 70},
            {name: 'HTML/CSS', icon: <FaHtml5 size={30}/>, level: 75},
            {name: 'React', icon: <FaReact size={30}/>, level: 65},
            {name: 'Electron.js', icon: <SiElectron size={30}/>, level: 45}
        ]
    },
    {
        category: 'Gömülü Sistemler & IoT',
        items: [
            {name: 'Arduino', icon: <SiArduino size={30}/>, level: 80},
            {name: 'ESP32', icon: <SiEspressif size={30}/>, level: 80},
            {name: 'Fusion 360', icon: <SiAutodesk size={30}/>, level: 60}
        ]
    },
    {
        category: 'Veritabanı',
        items: [
            {name: 'SQLite', icon: <SiSqlite size={30}/>, level: 85}
        ]
    },
    {
        category: 'Yapay Zeka & Görüntü İşleme',
        items: [
            {name: 'TensorFlow', icon: <SiTensorflow size={30}/>, level: 70},
            {name: 'OpenCV', icon: <SiOpencv size={30}/>, level: 85},
            {name: 'YOLO', icon: <SiYolobit size={30}/>, level: 75},
            {name: 'PyTorch', icon: <SiPytorch size={30}/>, level: 50}
        ]
    },
    {
        category: 'Simülasyon & Otonom Sistemler',
        items: [
            {name: 'Gazebo', icon: <SiGazebo size={30}/>, level: 80},
            {name: 'PX4 Autopilot', icon: <SiDrone size={30}/>, level: 70}
        ]
    },
    {
        category: 'IDE ve Ortamlar',
        items: [
            {name: 'JetBrains', icon: <SiJetbrains size={30}/>, level: 90},
            {name: 'WSL Ubuntu', icon: <SiUbuntu size={30}/>, level: 85},
            {name: 'Cursor', icon: <SiCurl size={30}/>, level: 75},
            {name: 'VsCode', icon: <SiVsco size={30}/>, level: 70},
        ]
    },
    {
        category: 'Oyun Geliştirme',
        items: [
            {name: 'Unity', icon: <SiUnity size={30}/>, level: 70},
            {name: 'Photon Network 2', icon: <SiPhoton size={30}/>, level: 60}
        ]
    },
    {
        category: 'Framework ve Diğer Kütüphaneler',
        items: [
            {name: 'Selenium', icon: <SiSelenium size={30}/>, level: 70},
            {name: 'Matplotlib', icon: <SiPlotly size={30}/>, level: 60},
            {name: 'NumPy', icon: <SiNumpy size={30}/>, level: 80}
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
                            zIndex: 2,
                            position: 'relative',
                            userSelect: 'text',
                            width: 'fit-content',
                            margin: '0 auto',
                            padding: '50px',
                        }}
                    >
                        Yeteneklerim
                    </Typography>

                    <Grid container spacing={3}>
                        {skills.map((category, categoryIndex) => (
                            <Grid item xs={12} md={4} key={categoryIndex}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 2,
                                        height: '100%',
                                        backgroundColor: 'background.paper',
                                        borderRadius: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 2,
                                            color: 'text.primary',
                                            textAlign: 'center',
                                            borderBottom: '2px solid',
                                            borderColor: 'primary.main',
                                            pb: 1,
                                            zIndex: 2,
                                            position: 'relative',
                                            userSelect: 'text',
                                        }}
                                    >
                                        {category.category}
                                    </Typography>
                                    <Grid container spacing={1}>
                                        {category.items.map((skill, skillIndex) => (
                                            <Grid item xs={6} key={skillIndex}>
                                                <motion.div
                                                    whileHover={{scale: 1.05}}
                                                    whileTap={{scale: 0.95}}
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
                                                        <Box sx={{color: 'primary.main', mb: 0.5}}>
                                                            {skill.icon}
                                                        </Box>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                color: 'text.primary',
                                                                textAlign: 'center',
                                                                fontSize: '0.8rem',
                                                                zIndex: 2,
                                                                position: 'relative',
                                                                userSelect: 'text',
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
                </motion.div>
            </Container>
        </Box>
    );
};

export default Skills;