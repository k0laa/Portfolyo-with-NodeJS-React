import React, {useState} from 'react';
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
import {FaBars, FaSun, FaMoon, FaGraduationCap} from 'react-icons/fa';
import {motion} from 'framer-motion';
import EasterEggs from './EasterEggs';
import GradeSimulator from './GradeSimulator';

const navItems = [
    {name: 'Ana Sayfa', href: '#home'},
    {name: 'Hakkımda', href: '#about'},
    {name: 'Projeler', href: '#projects'},
    {name: 'İletişim', href: '#contact'},
];

const Navbar = ({toggleTheme, isDarkMode}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [gradeSimulatorOpen, setGradeSimulatorOpen] = useState(false);
    const [gradeSimulatorAnchor, setGradeSimulatorAnchor] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleGradeSimulatorClick = (event) => {
        setGradeSimulatorAnchor(event.currentTarget);
        setGradeSimulatorOpen(true);
    };

    const handleGradeSimulatorClose = () => {
        setGradeSimulatorAnchor(null);
        setGradeSimulatorOpen(false);
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
            <List sx={{pt: 8}}>
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
                <ListItem
                    sx={{
                        justifyContent: 'center',
                        '&:hover': {
                            backgroundColor: 'rgba(108, 99, 255, 0.1)',
                        },
                    }}
                    onClick={handleGradeSimulatorClick}
                >
                    <ListItemText
                        primary={
                            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1}}>
                                <FaGraduationCap size={20}/>
                                <span>Ders Notları</span>
                            </Box>
                        }
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
                <ListItem sx={{justifyContent: 'center', mt: 2}}>
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
                        {isDarkMode ? <FaSun size={24}/> : <FaMoon size={24}/>}
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    width: '100%',
                }}
            >
                <Toolbar sx={{
                    minHeight: {xs: 56, sm: 64},
                    px: {xs: 2, sm: 3, md: 4},
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
                            component="a"
                            href="#home"
                            sx={{
                                display: 'block',
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            }}
                        >

                        </Box>
                        <EasterEggs/>
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
                            <FaBars size={24}/>
                        </IconButton>
                    ) : (
                        <Box sx={{display: 'flex', gap: {sm: 1, md: 2}, alignItems: 'center'}}>
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <Button
                                        href={item.href}
                                        sx={{
                                            color: 'text.primary',
                                            fontSize: {sm: '0.9rem', md: '1rem'},
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
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
                            >
                                <IconButton
                                    onClick={handleGradeSimulatorClick}
                                    sx={{
                                        color: 'text.primary',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    <FaGraduationCap size={20}/>
                                </IconButton>
                            </motion.div>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
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
                                    {isDarkMode ? <FaSun size={20}/> : <FaMoon size={20}/>}
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
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </AppBar>
            <GradeSimulator
                open={gradeSimulatorOpen}
                onClose={handleGradeSimulatorClose}
                anchorEl={gradeSimulatorAnchor}
            />
        </>
    );
};

export default Navbar;