import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';

const projects = [
    {
        title: 'Yemek Tarifi Asistanı',
        description: 'Kullanıcıların evdeki malzemelerini girerek hızlıca tarif önerileri almasını sağlayan bir uygulama.',
        images: [
            'https://github.com/k0laa/Yemek_Tarif_Asistani/blob/main/resources/main.png?raw=true',
            'https://github.com/k0laa/Yemek_Tarif_Asistani/blob/main/resources/find_recipe.png?raw=true',
            'https://github.com/k0laa/Yemek_Tarif_Asistani/blob/main/resources/recipe_details.png?raw=true',
            'https://github.com/k0laa/Yemek_Tarif_Asistani/blob/main/resources/random_recipe.png?raw=true',

        ],
        technologies: ['Python', 'AI', 'Web Scraping'],
        github: 'https://github.com/k0laa/Yemek_Tarif_Asistani',
        demo: 'https://yemek-tarif-asistani.onrender.com/',
    },
    {
        title: 'Fake Commit Design',
        description: 'GitHub profilinizin katkı grafiğini dilediğiniz şekil ve resimlerle süsleyebileceğiniz bir araç.',
        images: [
            'https://github.com/k0laa/Fake_Commit_Design/blob/main/resources/icon_3.png?raw=true',
            'https://github.com/k0laa/Fake_Commit_Design/blob/main/resources/example_paint.png?raw=true',
            'https://github.com/k0laa/Fake_Commit_Design/blob/main/resources/empty_grid.png?raw=true',
        ],
        technologies: ['Python', 'GitHub API'],
        github: 'https://github.com/k0laa/Fake_Commit_Design',
        demo: undefined,
    },
    {
        title: 'Veterinerlik Uygulaması',
        description: 'PyQt5 ile geliştirilmiş modern bir veterinerlik uygulaması.',
        images: [
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/icons/app_icon.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/appointment_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/login_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/my_appointments_tab.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/my_pets_tab.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/new_appointment_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/new_pet_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/profile_tab.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/records_tab.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/signup_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/waiting_patients_tab.png?raw=true',
        ],
        technologies: ['Python', 'PyQt5', 'SQLite'],
        github: 'https://github.com/k0laa/Veterinerlik_Uygulamasi',
        demo: undefined,
    },
    {
        title: 'Valorant Instalock',
        description: 'Valorant oynarken senden önce istediğin ajanı sormadan kitleyenlere son!',
        images: [
            'https://github.com/k0laa/Valorant_Instalock/blob/main/images/icon.png?raw=true',
            'https://github.com/k0laa/Valorant_Instalock/blob/main/resources/main.png?raw=true',
            'https://github.com/k0laa/Valorant_Instalock/blob/main/resources/example.png?raw=true',
        ],
        technologies: ['Python', 'Automation'],
        github: 'https://github.com/k0laa/Valorant_Instalock',
        demo: undefined,
    },
];

const Projects = ({ isDarkMode }) => {
    const navigate = useNavigate();

    return (
        <Box
            id="projects"
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
                    transition={{ duration: 0.15, delay: 0.03 }}
                    viewport={{ once: false }}
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
                        Projelerim
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <ProjectCard project={project} isDarkMode={isDarkMode} />
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => navigate('/all-projects')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                '&:hover': {
                                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            Daha Fazla Proje Göster
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Projects;