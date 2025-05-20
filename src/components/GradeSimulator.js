import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Divider, IconButton, Popover } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaRandom, FaTimes } from 'react-icons/fa';
import { courses, gradeInfo } from '../data/grades';

const GradeSimulator = ({ open, onClose, anchorEl }) => {
    const [result, setResult] = useState(null);

    const generateRandomGrade = () => {
        const course = courses[Math.floor(Math.random() * courses.length)];
        const { emoji, color } = gradeInfo[course.grade];

        setResult({
            course: course.name,
            emoji: course.emoji,
            grade: course.grade,
            gradeEmoji: emoji,
            color,
            midterm: course.midterm,
            final: course.final,
            odev: course.odev,
            uygulama1: course.uygulama1,
            uygulama2: course.uygulama2
        });
    };

    return (
        <Popover
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            PaperProps={{
                sx: {
                    width: '320px',
                    height: '260px',
                    borderRadius: 3,
                    backgroundColor: 'background.paper',
                    mt: 1,
                }
            }}
        >
            <Box sx={{
                p: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FaGraduationCap size={20} color="#6C63FF" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                            Ders Notları
                        </Typography>
                    </Box>
                    <IconButton onClick={onClose} size="small">
                        <FaTimes size={16} />
                    </IconButton>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={generateRandomGrade}
                    startIcon={<FaRandom />}
                    sx={{
                        mb: 2,
                        width: '100%',
                        textTransform: 'none',
                        py: 1,
                        borderRadius: 2,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        boxShadow: '0 4px 12px rgba(108, 99, 255, 0.2)',
                        '&:hover': {
                            boxShadow: '0 6px 16px rgba(108, 99, 255, 0.3)',
                        },
                    }}
                >
                    Rastgele Ders Notum
                </Button>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 1.5,
                                backgroundColor: 'background.paper',
                                borderRadius: 2,
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.primary',
                                    textAlign: 'center',
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    mb: 0.5,
                                }}
                            >
                                {result.emoji} {result.course}
                            </Typography>
                            <Divider sx={{ my: 0.5 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 0.5 }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    Vize: {result.midterm}
                                </Typography>
                                {result.odev && (
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        Ödev: {result.odev}
                                    </Typography>
                                )}
                                {result.uygulama1  && (
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        Uyg1: {result.uygulama1}
                                    </Typography>)}
                                {result.uygulama2 && (
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        Uyg2: {result.uygulama2}
                                    </Typography>
                                )}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    Final: {result.final}
                                </Typography>
                            </Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: result.color,
                                    textAlign: 'center',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 0.5,
                                    fontSize: '1rem',
                                }}
                            >
                                {result.grade} {result.gradeEmoji}
                            </Typography>
                        </Paper>
                    </motion.div>
                )}
            </Box>
        </Popover>
    );
};

export default GradeSimulator; 