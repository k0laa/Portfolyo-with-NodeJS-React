import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Webhooks = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Webhook endpoint'ini dinle
        const handleWebhook = async (req, res) => {
            try {
                const payload = req.body;
                const event = req.headers['x-github-event'];
                const timestamp = new Date().toISOString();

                // Yeni log'u state'e ekle
                setLogs(prevLogs => [{
                    event,
                    timestamp,
                    payload: JSON.stringify(payload, null, 2)
                }, ...prevLogs].slice(0, 100)); // Son 100 log'u tut

                res.status(200).json({ message: 'Webhook received' });
            } catch (error) {
                console.error('Webhook error:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        };

        // Webhook endpoint'ini kaydet
        window.addEventListener('webhook', handleWebhook);

        return () => {
            window.removeEventListener('webhook', handleWebhook);
        };
    }, []);

    return (
        <Box
            sx={{
                py: 8,
                px: 2,
                backgroundColor: 'background.default',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 4,
                            color: 'text.primary',
                            fontWeight: 600,
                        }}
                    >
                        GitHub Webhook Logları
                    </Typography>

                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            backgroundColor: 'background.paper',
                            borderRadius: 2,
                        }}
                    >
                        <List>
                            {logs.map((log, index) => (
                                <React.Fragment key={index}>
                                    <ListItem>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        color: 'text.primary',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {log.event} - {new Date(log.timestamp).toLocaleString()}
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        fontFamily: 'monospace',
                                                        whiteSpace: 'pre-wrap',
                                                    }}
                                                >
                                                    {log.payload}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    {index < logs.length - 1 && <Divider />}
                                </React.Fragment>
                            ))}
                        </List>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Webhooks; 