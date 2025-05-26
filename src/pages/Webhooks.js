import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Webhooks = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // SSE bağlantısını kur
        const eventSource = new EventSource('https://bugrayalcin.com/api/events');

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setLogs(prevLogs => [{
                event: data.event,
                timestamp: new Date().toISOString(),
                payload: JSON.stringify(data.payload, null, 2)
            }, ...prevLogs].slice(0, 100));
        };

        eventSource.onerror = (error) => {
            console.error('SSE error:', error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
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
                        {logs.length === 0 ? (
                            <Typography variant="body1" color="text.secondary" align="center">
                                Henüz webhook logu bulunmuyor.
                            </Typography>
                        ) : (
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
                        )}
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Webhooks; 