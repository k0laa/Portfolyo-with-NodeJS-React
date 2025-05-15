import React from 'react';
import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Card = ({ children, sx = {}, animation = true }) => {
    const cardContent = (
        <Paper
            elevation={3}
            sx={{
                p: 3,
                height: '100%',
                backgroundColor: 'background.paper',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                },

                ...sx,
            }}
        >
            {children}
        </Paper>
    );

    if (animation) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {cardContent}
            </motion.div>
        );
    }

    return cardContent;
};

export default Card; 