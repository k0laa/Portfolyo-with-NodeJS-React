import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımda', href: '#about' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' },
];

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            sx={{ 
                textAlign: 'center',
                height: '100%',
                backgroundColor: 'background.default',
            }}
        >
            <List sx={{ pt: 8 }}>
                {navItems.map((item) => (
                    <ListItem 
                        key={item.name} 
                        component="a" 
                        href={item.href}
                        sx={{
                            justifyContent: 'center',
                            '&:hover': {
                                backgroundColor: 'rgba(108, 99, 255, 0.1)',
                            },
                        }}
                    >
                        <ListItemText
                            primary={item.name}
                            sx={{ 
                                color: 'text.primary', 
                                textAlign: 'center',
                                '& .MuiTypography-root': {
                                    fontSize: {
                                        xs: '1.2rem',
                                        sm: '1.3rem',
                                    },
                                    fontWeight: 500,
                                },
                            }}
                        />
                    </ListItem>
                ))}
                <ListItem sx={{ justifyContent: 'center', mt: 2 }}>
                    <IconButton
                        onClick={toggleTheme}
                        sx={{
                            color: 'text.primary',
                            '&:hover': {
                                color: 'primary.main',
                                backgroundColor: 'rgba(108, 99, 255, 0.1)',
                            },
                        }}
                    >
                        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                backdropFilter: 'blur(10px)',
                boxShadow: 'none',
                transition: 'background-color 0.3s ease-in-out',
                width: '100%',
            }}
        >
            <Toolbar sx={{ 
                minHeight: { xs: 56, sm: 64 },
                px: { xs: 2, sm: 3, md: 4 },
                width: '100%',
            }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        color: 'primary.main', 
                        fontWeight: 700,
                    }}
                >
                    <Box
                        component="img"
                        src="/logo.png"
                        alt="Logo"
                        sx={{
                            height: { xs: 32, sm: 40 },
                            flexGrow: 1,
                            display: 'relative',
                        }}
                    />
                </Typography>
                
                {isMobile ? (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ 
                            color: 'text.primary',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    >
                        <FaBars size={24} />
                    </IconButton>
                ) : (
                    <Box sx={{ display: 'flex', gap: { sm: 1, md: 2 }, alignItems: 'center' }}>
                        {navItems.map((item) => (
                            <motion.div
                                key={item.name}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    href={item.href}
                                    sx={{
                                        color: 'text.primary',
                                        fontSize: { sm: '0.9rem', md: '1rem' },
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </motion.div>
                        ))}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IconButton
                                onClick={toggleTheme}
                                sx={{
                                    color: 'text.primary',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                            </IconButton>
                        </motion.div>
                    </Box>
                )}
            </Toolbar>
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'background.default',
                        width: '100%',
                        maxWidth: '100%',
                        transition: 'background-color 0.3s ease-in-out',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;