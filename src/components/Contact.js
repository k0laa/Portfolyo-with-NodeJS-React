import React, { useRef, useState, useEffect } from 'react';
import { Container, TextField, Button, Snackbar, Alert, Box } from '@mui/material';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/constants';
import SectionTitle from './common/SectionTitle';
import AnimatedSection from './common/AnimatedSection';
import SocialLinks from './common/SocialLinks';

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
                <Container maxWidth="md"

                >
                    <SectionTitle title="İletişime Geç" />
                    <SocialLinks sx={{ justifyContent: 'center', mb: 4 }} />

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
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
                            {loading ? 'Gönderiliyor...' : 'Gönder'}
                        </Button>
                    </form>

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