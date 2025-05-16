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
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} component="a" href={item.href}>
                        <ListItemText
                            primary={item.name}
                            sx={{ color: 'text.primary', textAlign: 'center' }}
                        />
                    </ListItem>
                ))}
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
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 700 }}
                >
                    <Box
                        component="img"
                        src="/logo.png"
                        alt="Logo"
                        sx={{
                            height: 40,
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
                        sx={{ color: 'text.primary' }}
                    >
                        <FaBars size={24} />
                    </IconButton>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
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
                        backgroundColor: 'background.paper',
                        width: 240,
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