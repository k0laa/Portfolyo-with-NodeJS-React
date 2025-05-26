import React from 'react';
import { Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../config/constants';

const iconComponents = {
    FaGithub,
    FaLinkedin,
    FaInstagram,
};

const SocialLinks = ({ sx = {} }) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, ...sx }}>
            {SOCIAL_LINKS.map((link, index) => {
                const IconComponent = iconComponents[link.icon];
                return (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <IconButton
                            href={link.url}
                            target="_blank"
                            aria-label={link.label}
                            sx={{
                                color: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'rgba(108, 99, 255, 0.1)',
                                },
                            }}
                        >
                            <IconComponent size={30} />
                        </IconButton>
                    </motion.div>
                );
            })}
        </Box>
    );
};

export default SocialLinks; 