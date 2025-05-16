import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Chip,
} from '@mui/material';
import {motion} from 'framer-motion';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const projects = [
    {
        title: 'Yemek Tarifi Asistanı',
        description:
            'Kullanıcıların evdeki malzemelerini girerek hızlıca tarif önerileri almasını sağlayan bir uygulama.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['Python', 'AI', 'Web Scraping'],
        github: 'https://github.com/k0laa/Yemek_Tarif_Asistani',
        demo: '#',
    },
    {
        title: 'Fake Commit Design',
        description:
            'GitHub profilinizin katkı grafiğini dilediğiniz şekil ve resimlerle süsleyebileceğiniz bir araç.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['Python', 'GitHub API'],
        github: 'https://github.com/k0laa/Fake_Commit_Design',
        demo: '#',
    },
    {
        title: 'Veterinerlik Uygulaması',
        description:
            'PyQt5 ile geliştirilmiş modern bir veterinerlik uygulaması.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['Python', 'PyQt5', 'SQLite'],
        github: 'https://github.com/k0laa/Veterinerlik_Uygulamasi',
        demo: '#',
    },
    {
        title: 'Valorant Instalock',
        description:
            'Valorant oynarken senden önce istediğin ajanı sormadan kitleyenlere son!',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['Python', 'Automation'],
        github: 'https://github.com/k0laa/Valorant_Instalock',
        demo: '#',
    },
];

const Projects = () => {
    return (
        <Box
            id="projects"
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
                        }}
                    >
                        Projelerim
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <motion.div
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            backgroundColor: 'background.paper',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={project.image}
                                            alt={project.title}
                                        />
                                        <CardContent sx={{flexGrow: 1}}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                                sx={{
                                                    color: 'text.primary',
                                                    zIndex: 10,
                                                    position: 'relative',
                                                    userSelect: 'text',
                                                }}
                                            >
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    mb: 2,
                                                    zIndex: 10,
                                                    position: 'relative',
                                                    userSelect: 'text',
                                                }}
                                            >
                                                {project.description}
                                            </Typography>
                                            <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Chip
                                                        key={techIndex}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: 'primary.main',
                                                            color: 'white',
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                size="small"
                                                startIcon={<FaGithub/>}
                                                href={project.github}
                                                target="_blank"
                                                sx={{color: 'text.primary'}}
                                            >
                                                GitHub
                                            </Button>
                                            <Button
                                                size="small"
                                                startIcon={<FaExternalLinkAlt/>}
                                                href={project.demo}
                                                target="_blank"
                                                sx={{color: 'text.primary'}}
                                            >
                                                Demo
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Projects;