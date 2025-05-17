import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Particles from "../components/Particles";

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/k0laa/repos');
                const data = await response.json();
                
                // GitHub API'den gelen projeleri düzenle
                const formattedProjects = data.map(repo => ({
                    title: repo.name,
                    description: repo.description || 'Açıklama bulunmuyor.',
                    images: [`https://raw.githubusercontent.com/k0laa/${repo.name}/main/resources/main.png`],
                    technologies: repo.topics || [],
                    github: repo.html_url,
                    demo: repo.homepage || undefined
                }));

                setProjects(formattedProjects);
                setLoading(false);
            } catch (err) {
                setError('Projeler yüklenirken bir hata oluştu.');
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                py: 8,
                backgroundColor: 'background.default',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg">
                <Particles />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: 'text.primary',
                        }}
                    >
                        Tüm Projelerim
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default AllProjects; 