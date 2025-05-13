import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                zIndex: 5,
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 1 }}
                >
                    {'© '}
                    {new Date().getFullYear()}
                    {' Buğra Yalçın. Tüm hakları saklıdır.'}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Made with ❤️ by '}
                    <Link
                        color="primary"
                        href="https://github.com/k0laa"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        k0laa
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;