import React, { useState } from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    },
                }}
            >
                <Box sx={{ position: 'relative', mb: 2, borderRadius: 2, overflow: 'hidden' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                        }}
                    >
                        {project.images.map((image, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={image}
                                alt={`${project.title} - Görsel ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    position: 'absolute',
                                    opacity: index === currentImageIndex ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                }}
                            />
                        ))}
                    </Box>

                    {project.images.length > 1 && (
                        <>
                            <Box
                                onClick={prevImage}
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 2,
                                }}
                            >
                                <FaChevronLeft size={24} color="white" />
                            </Box>
                            <Box
                                onClick={nextImage}
                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 2,
                                }}
                            >
                                <FaChevronRight size={24} color="white" />
                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    display: 'flex',
                                    gap: 1,
                                    zIndex: 2,
                                }}
                            >
                                {project.images.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                transform: 'scale(1.2)',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </>
                    )}
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: 'text.primary',
                        fontSize: '1.1rem',
                    }}
                >
                    {project.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        mb: 2,
                        color: 'text.secondary',
                        flexGrow: 1,
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                    }}
                >
                    {project.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {project.technologies.map((tech, index) => (
                        <Box
                            key={index}
                            sx={{
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                backgroundColor: 'primary.main',
                                color: 'white',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                            }}
                        >
                            {tech}
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    {project.github && (
                        <IconButton
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main',
                                },
                            }}
                        >
                            <FaGithub size={20} />
                        </IconButton>
                    )}
                    {project.demo && (
                        <IconButton
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main',
                                },
                            }}
                        >
                            <FaExternalLinkAlt size={20} />
                        </IconButton>
                    )}
                </Box>
            </Paper>
        </motion.div>
    );
};

export default ProjectCard; 