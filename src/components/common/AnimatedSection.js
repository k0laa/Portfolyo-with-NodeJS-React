import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, id, sx = {} }) => {
    return (
        <Box
            id={id}
            sx={{
                py: 8,
                backgroundColor: 'transparent',
                ...sx,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </Box>
    );
};

export default AnimatedSection; 