import React, { useState } from 'react';
import { Box, Typography, Paper, IconButton, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import defaultImage from '../assets/default_image.svg';

const ProjectCard = ({ project, isDarkMode }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    const handleImageClick = () => {
        if (project.images && project.images.length > 0) {
            setIsModalOpen(true);
        }
    };

    return (<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Paper
            elevation={3}
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
                    transform: 'translateY(-5px)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                },
                zIndex: 10,
                position: 'relative',
                userSelect: 'text',
                pointerEvents: 'auto'
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
                        cursor: project.images && project.images.length > 0 ? 'pointer' : 'default',
                    }}
                    onClick={handleImageClick}
                >
                    {project.images && project.images.length > 0 ? (project.images.map((image, index) => (<Box
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
                    />))) : (<Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            color: 'text.secondary',
                        }}
                    >
                        <Box
                            component="img"
                            src={defaultImage}
                            alt="Default Project"
                            sx={{
                                height: '50%',
                            }}
                        />
                        <Typography variant="body1" sx={{
                            color: 'text.secondary',
                        }}>
                            Görsel Bulunamadı
                        </Typography>
                    </Box>)}
                </Box>

                {project.images.length > 1 && (<>
                    <Box
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
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
                        <FaChevronLeft size={24} color='#6C63FF' />
                    </Box>
                    <Box
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
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
                        <FaChevronRight size={24} color="#6C63FF" />
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
                        {project.images.map((_, index) => (<Box
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                            }}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: 'white', transform: 'scale(1.2)',
                                },
                            }}
                        />))}
                    </Box>
                </>)}
            </Box>

            {/* Modal */}
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 2,
                    }}
                >
                    <IconButton
                        onClick={() => setIsModalOpen(false)}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'white',
                            bgcolor: 'rgba(0,0,0,0.5)',
                            '&:hover': {
                                bgcolor: 'rgba(0,0,0,0.7)',
                            },
                            zIndex: 2,
                        }}
                    >
                        <FaTimes size={20} />
                    </IconButton>

                    {/* Sol Buton */}
                    <Box
                        onClick={prevImage}
                        sx={{
                            position: 'absolute',
                            left: -60,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            bgcolor: 'rgba(0,0,0,0.5)',
                            borderRadius: '50%',
                            '&:hover': {
                                bgcolor: 'rgba(0,0,0,0.7)',
                            },
                            zIndex: 2,
                        }}
                    >
                        <FaChevronLeft size={24} color="white" />
                    </Box>

                    {/* Sağ Buton */}
                    <Box
                        onClick={nextImage}
                        sx={{
                            position: 'absolute',
                            right: -60,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            bgcolor: 'rgba(0,0,0,0.5)',
                            borderRadius: '50%',
                            '&:hover': {
                                bgcolor: 'rgba(0,0,0,0.7)',
                            },
                            zIndex: 2,
                        }}
                    >
                        <FaChevronRight size={24} color="white" />
                    </Box>

                    {/* Nokta Göstergeleri */}
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

                    <Box
                        component="img"
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Görsel ${currentImageIndex + 1}`}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            maxHeight: '80vh',
                        }}
                    />
                </Box>
            </Modal>

            <Typography
                variant="h6"
                sx={{
                    mb: 1, fontWeight: 600, color: 'text.primary', fontSize: '1.1rem',
                }}
            >
                {project.title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    mb: 2, color: 'text.secondary', flexGrow: 1, fontSize: '0.9rem', lineHeight: 1.6,
                }}
            >
                {project.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {project.technologies.map((tech, index) => (<Box
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
                </Box>))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                {project.github && (<IconButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: 'text.primary', '&:hover': {
                            color: 'primary.main',
                        },
                    }}
                >
                    <FaGithub size={20} />
                </IconButton>)}
                {project.demo && (<IconButton
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: 'text.primary', '&:hover': {
                            color: 'primary.main',
                        },
                    }}
                >
                    <FaExternalLinkAlt size={20} />
                </IconButton>)}
            </Box>
        </Paper>
    </motion.div>);
};

export default ProjectCard; 