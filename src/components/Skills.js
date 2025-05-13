import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiArduino, SiRaspberrypi, SiCplusplus } from 'react-icons/si';

const skills = [
    {
        category: 'Programlama Dilleri',
        items: [
            { name: 'Python', icon: <FaPython size={40} />, level: 90 },
            { name: 'C++', icon: <SiCplusplus size={40} />, level: 85 },
            { name: 'Java', icon: <FaJava size={40} />, level: 80 },
        ],
    },
    {
        category: 'Web Teknolojileri',
        items: [
            { name: 'React', icon: <FaReact size={40} />, level: 85 },
            { name: 'Node.js', icon: <FaNodeJs size={40} />, level: 80 },
            { name: 'MongoDB', icon: <FaDatabase size={40} />, level: 75 },
        ],
    },
    {
        category: 'AI & Gömülü Sistemler',
        items: [
            { name: 'TensorFlow', icon: <SiTensorflow size={40} />, level: 85 },
            { name: 'Arduino', icon: <SiArduino size={40} />, level: 90 },
            { name: 'Raspberry Pi', icon: <SiRaspberrypi size={40} />, level: 85 },
        ],
    },
];

const Skills = () => {
    return (
        <Box
            id="skills"
            sx={{
                py: 8,
                backgroundColor: 'transparent',
                zIndex : 2,
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
                            zIndex : 2,
                            position : 'relative',
                            userSelect : 'text',
                            width : 'fit-content',
                            margin: '0 auto',
                            padding: '50px',
                        }}

                    >
                        Yeteneklerim
                    </Typography>

                    <Grid container spacing={4}>
                        {skills.map((category, categoryIndex) => (
                            <Grid item xs={12} md={4} key={categoryIndex}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        backgroundColor: 'background.paper',
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 3,
                                            color: 'text.primary',
                                            textAlign: 'center',
                                            zIndex : 2,
                                            position : 'relative',
                                            userSelect : 'text',
                                            width : 'fit-content',
                                            margin: '0 auto',
                                            padding: '20px',

                                        }}
                                    >
                                        {category.category}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        {category.items.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        mb: 1,
                                                        zIndex : 2,
                                                        position : 'relative',
                                                        userSelect : 'text',
                                                        width : 'fit-content',
                                                        margin: '0 auto',
                                                        padding: '20px',
                                                    }}
                                                >
                                                    <Box sx={{ color: 'primary.main' }}>{skill.icon}</Box>
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{ color: 'text.primary',
                                                            zIndex : 2,
                                                            position : 'relative',
                                                            width : 'fit-content',
                                                        }}
                                                    >
                                                        {skill.name}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                        height: 8,
                                                        backgroundColor: 'background.default',
                                                        borderRadius: 4,
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: skillIndex * 0.2 }}
                                                        viewport={{ once: true }}
                                                        style={{
                                                            height: '100%',
                                                            backgroundColor: '#6C63FF',
                                                        }}
                                                    />
                                                </Box>
                                            </motion.div>
                                        ))}
                                    </Box>
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