import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = React.memo(() => {
    const particlesInit = useCallback(async (main) => {
        await loadFull(main);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: '#6C63FF',
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 0.3,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 0.5,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 180,
                        color: '#6C63FF',
                        opacity: 0.4,
                        width: 1,
                        triangles: {
                            enable: true,
                            opacity: 0.01
                        }
                    },
                    move: {
                        enable: true,
                        speed: 0.4,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: true,
                            rotateX: 5000,
                            rotateY: 20000,
                        },
                    },
                },
                interactivity: {
                    detect_on: 'window',
                    events: {
                        onhover: {
                            enable: true,
                            mode: ['grab', 'bubble'],
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 150,
                            links: {
                                enable: true,
                                distance: 180,
                                color: '#6C63FF',
                                opacity: 1,
                                width: 1,
                                triangles: {
                                    enable: true,
                                    opacity: 0.05
                                }
                            },
                        },
                        bubble: {
                            distance: 200,
                            size: 6,
                            duration: 2,
                            opacity: 0.8,
                            speed: 3
                        },
                        push: {
                            particles_nb: 3,
                        },
                    },
                },
                retina_detect: true,
            }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        />
    );
});

export default ParticlesBackground;
