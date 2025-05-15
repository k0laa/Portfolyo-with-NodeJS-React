import React from 'react';
import { Typography } from '@mui/material';

const SectionTitle = ({ title }) => {
    return (
        <Typography
            variant="h2"
            sx={{
                textAlign: 'center',
                mb: 6,
                color: 'text.primary',
                position: 'relative',
                zIndex: 10,
                userSelect: 'text',
            }}
        >
            {title}
        </Typography>
    );
};

export default SectionTitle; 