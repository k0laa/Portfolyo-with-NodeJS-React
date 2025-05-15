import React, {useRef, useState} from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    IconButton,
    Snackbar,
    Alert,
} from '@mui/material';
import {motion} from 'framer-motion';
import {FaGithub, FaLinkedin, FaInstagram, FaEnvelope} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const socialLinks = [
    {
        icon: <FaGithub size={24}/>,
        url: 'https://github.com/k0laa',
        label: 'GitHub',
    },
    {
        icon: <FaLinkedin size={24}/>,
        url: 'https://linkedin.com/in/bugrayalcin8',
        label: 'LinkedIn',
    },
    {
        icon: <FaInstagram size={24}/>,
        url: 'https://instagram.com/___kolaa___',
        label: 'Instagram',
    },
    {
        icon: <FaEnvelope size={24}/>,
        url: 'mailto:bugrayalcn1@gmail.com',
        label: 'Email',
    },
];

const Contact = () => {
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
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
        console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
        console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
        setSnackbar({...snackbar, open: false});
    };

    return (
        <Box
            id="contact"
            sx={{
                py: 8,
                backgroundColor: 'transparent',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
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
                        İletişime Geç
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3, color: 'text.primary',

                                    zIndex: 10,
                                    position: 'relative',
                                    userSelect: 'text',
                                    width: 'fit-content',
                                }}
                            >
                                Benimle İletişime Geçin
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    color: 'text.secondary',
                                    zIndex: 10,
                                    position: 'relative',
                                    userSelect: 'text',
                                    width: 'fit-content',
                                }}
                            >
                                Projeleriniz veya işbirliği fırsatları için benimle iletişime
                                geçebilirsiniz. Size en kısa sürede dönüş yapacağım.
                            </Typography>

                            <Box sx={{display: 'flex', gap: 2, mb: 4}}>
                                {socialLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        <IconButton
                                            href={link.url}
                                            target="_blank"
                                            aria-label={link.label}
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(108, 99, 255, 0.1)',
                                                },
                                            }}
                                        >
                                            {link.icon}
                                        </IconButton>
                                    </motion.div>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                component="form"
                                ref={formRef}
                                onSubmit={handleSubmit}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3,
                                    maxWidth: '600px',
                                    mx: 'auto',
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
                            </Box>

                            <Snackbar
                                open={snackbar.open}
                                autoHideDuration={6000}
                                onClose={handleCloseSnackbar}
                                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                            >
                                <Alert
                                    onClose={handleCloseSnackbar}
                                    severity={snackbar.severity}
                                    sx={{width: '100%'}}
                                >
                                    {snackbar.message}
                                </Alert>
                            </Snackbar>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>

        </Box>
    );
};

export default Contact;