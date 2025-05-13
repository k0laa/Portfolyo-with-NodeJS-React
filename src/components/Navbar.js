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
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımda', href: '#about' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' },
];

const Navbar = () => {
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
                backgroundColor: 'rgba(10, 25, 47, 0.85)',
                backdropFilter: 'blur(10px)',
                boxShadow: 'none',
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 700 }}
                >
                    BY
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
                    <Box sx={{ display: 'flex', gap: 2 }}>
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
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;