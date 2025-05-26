import React, { useRef, useState, useEffect } from 'react';
import { Container, TextField, Button, Snackbar, Alert, Box, Grid, Typography, Paper } from '@mui/material';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/constants';
import SectionTitle from './common/SectionTitle';
import AnimatedSection from './common/AnimatedSection';
import SocialLinks from './common/SocialLinks';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [visitorData, setVisitorData] = useState(null);
    // Kullanıcının IP ve tarayıcı bilgilerini al
    useEffect(() => {
        const fetchVisitorData = async () => {
            try {
                const res = await fetch('https://ipapi.co/json/');
                const ipData = await res.json();
                const browserData = {
                    userAgent: navigator.userAgent,
                    platform: navigator.platform,
                    screen: `${window.screen.width}x${window.screen.height}`,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                };
                setVisitorData({
                    ip: ipData.ip,
                    country: ipData.country_name,
                    city: ipData.city,
                    region: ipData.region,
                    isp: ipData.org,
                    browser: browserData,
                });
            } catch (err) {
                console.error('Ziyaretçi verisi alınamadı:', err);
            }
        };

        fetchVisitorData();
    }, []);

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name: form.name,
            email: form.email,
            time: new Date().toLocaleString(),
            message: form.message,
            ip_addr: visitorData?.ip || 'Bilinmiyor',
            location: `${visitorData?.city || 'Bilinmiyor'}, ${visitorData?.region || 'Bilinmiyor'}, ${visitorData?.country || 'Bilinmiyor'}`,
            browser_info: visitorData
                ? `${visitorData.browser.platform}, ${visitorData.browser.userAgent}, ${visitorData.browser.screen}, ${visitorData.browser.timezone}`
                : 'Bilinmiyor',
        };

        emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams,
            EMAILJS_CONFIG.PUBLIC_KEY
        )
            .then(() => {
                setSnackbar({
                    open: true,
                    message: 'Mesajınız başarıyla gönderildi!',
                    severity: 'success',
                });
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setSnackbar({
                    open: true,
                    message: 'Bir hata oluştu. Lütfen tekrar deneyin.',
                    severity: 'error',
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box
            id="contact"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
            }}
        >
            <AnimatedSection id="contact">
                <Container maxWidth="lg">
                    <SectionTitle title="İletişime Geç" />

                    <Grid container spacing={5}>
                        {/* Sol Taraf - İletişim Bilgileri ve Sosyal Medya */}
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={5}>
                                {/* İletişim Bilgileri Kartı */}
                                <Grid item xs={12}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            backgroundColor: 'background.paper',
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 3.5,
                                            position: 'relative',
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                            İletişim Bilgileri
                                        </Typography>

                                        <Box
                                            component="a"
                                            href="mailto:bugrayalcn1@gamil.com"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                                textDecoration: 'none',
                                                color: 'text.secondary',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                    transform: 'translateX(5px)',
                                                }
                                            }}
                                        >
                                            <FaEnvelope size={20} color="#6c63ff" />
                                            <Typography variant="body1">
                                                bugrayalcn1@gamil.com
                                            </Typography>
                                        </Box>

                                        <Box
                                            component="a"
                                            href="tel:+905399478093"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                                textDecoration: 'none',
                                                color: 'text.secondary',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                    transform: 'translateX(5px)',
                                                }
                                            }}
                                        >
                                            <FaPhone size={20} color="#6c63ff" />
                                            <Typography variant="body1">
                                                +90 539 947 8093
                                            </Typography>
                                        </Box>

                                        <Box
                                            component="a"
                                            href="https://www.google.com/maps/search/?api=1&query=Balıkesir,Türkiye"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                                textDecoration: 'none',
                                                color: 'text.secondary',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                    transform: 'translateX(5px)',
                                                }
                                            }}
                                        >
                                            <FaMapMarkerAlt size={20} color="#6c63ff" />
                                            <Typography variant="body1">
                                                Balıkesir, Türkiye
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Sosyal Medya Kartı */}
                                <Grid item xs={12}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            backgroundColor: 'background.paper',
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 3.5,
                                            position: 'relative',
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                            Sosyal Medya
                                        </Typography>
                                        <SocialLinks
                                            sx={{
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                gap: 3,
                                            }}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Sağ Taraf - İletişim Formu */}
                        <Grid item xs={12} md={8}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    backgroundColor: 'background.paper',
                                    borderRadius: 2,
                                    position: 'relative',
                                }}
                            >
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '24px',
                                    }}
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="İsim"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'rgba(108, 99, 255, 0.3)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="Soyisim"
                                                name="surname"
                                                value={form.surname}
                                                onChange={handleChange}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'rgba(108, 99, 255, 0.3)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <TextField
                                        required
                                        fullWidth
                                        label="E-posta"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'rgba(108, 99, 255, 0.3)',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'primary.main',
                                                },
                                            },
                                        }}
                                    />

                                    <TextField
                                        required
                                        fullWidth
                                        label="Mesaj"
                                        name="message"
                                        multiline
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'rgba(108, 99, 255, 0.3)',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'primary.main',
                                                },
                                            },
                                        }}
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        disabled={loading}
                                        sx={{
                                            mt: 2,
                                            py: 1.5,
                                            backgroundColor: 'primary.main',
                                            '&:hover': {
                                                backgroundColor: 'primary.dark',
                                            },
                                        }}
                                    >
                                        {loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Snackbar
                        open={snackbar.open}
                        autoHideDuration={6000}
                        onClose={handleCloseSnackbar}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert
                            onClose={handleCloseSnackbar}
                            severity={snackbar.severity}
                            sx={{ width: '100%' }}
                        >
                            {snackbar.message}
                        </Alert>
                    </Snackbar>
                </Container>
            </AnimatedSection>
        </Box>
    );
};

export default Contact;