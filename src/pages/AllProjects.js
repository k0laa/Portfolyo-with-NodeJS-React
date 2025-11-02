import React from 'react';
import {Box, Container, Typography, Grid} from '@mui/material';
import {motion} from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Particles from '../components/Particles';
import {useEffect} from 'react';

const projects = [
    {
        title: 'Yemek Tarifi Asistanı',
        description: 'Kullanıcıların evdeki malzemelerini girerek hızlıca tarif önerileri almasını sağlayan bir uygulama.',
        images: [
            'https://github.com/k0laa/Yemek_Tarif_Asistani/blob/main/resources/main.png?raw=true',
            'https://github.com/k0laa/Yemek_Tarif_Asistani/blob/main/resources/find_recipe.png?raw=true',
            'https://github.com/k0laa/Yemek_Tarif_Asistani/blob/main/resources/recipe_details.png?raw=true',
            'https://github.com/k0laa/Yemek_Tarif_Asistani/blob/main/resources/random_recipe.png?raw=true',
        ],
        technologies: ['Python', 'Flask', 'spoonacular API', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/k0laa/Yemek_Tarif_Asistani',
        demo: 'https://yemek-tarif-asistani.onrender.com/',
    },
    {
        title: 'Territory Wars',
        description: 'Unity ve PhotonNetwork ile yapılmış android mobil çevrimiçi alan kapma oyunudur.',
        images: [
            'https://github.com/k0laa/TerritoryWars-Unity/blob/master/AppPhotos/menu.jpg?raw=true',
            'https://github.com/k0laa/TerritoryWars-Unity/blob/master/AppPhotos/join.jpg?raw=true',
            'https://github.com/k0laa/TerritoryWars-Unity/blob/master/AppPhotos/freeze.jpg?raw=true',
            'https://github.com/k0laa/TerritoryWars-Unity/blob/master/AppPhotos/double.jpg?raw=true',
            'https://github.com/k0laa/TerritoryWars-Unity/blob/master/AppPhotos/speed.jpg?raw=true'
        ],
        technologies: ['Python', 'GitHub API'],
        github: 'https://github.com/k0laa/Fake_Commit_Design',
        demo: 'https://drive.google.com/drive/folders/11iROUtuIlKCJSB36I6Pbg_o4FwZNt-pG',
    },
    {
        title: 'Fake Commit Design',
        description: 'GitHub profilinizin katkı grafiğini dilediğiniz şekil ve resimlerle süsleyebileceğiniz bir araç.',
        images: [
            'https://github.com/k0laa/Fake_Commit_Design/blob/main/resources/icon_3.png?raw=true',
            'https://github.com/k0laa/Fake_Commit_Design/blob/main/resources/example_paint.png?raw=true',
            'https://github.com/k0laa/Fake_Commit_Design/blob/main/resources/empty_grid.png?raw=true',
        ],
        technologies: ['Python', 'GitHub API'],
        github: 'https://github.com/k0laa/Fake_Commit_Design',
        demo: undefined,
    },
    {
        title: 'Veterinerlik Uygulaması',
        description: 'PyQt5 ile geliştirilmiş modern bir veterinerlik uygulaması.',
        images: [
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/icons/app_icon.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/appointment_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/login_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/my_appointments_tab.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/my_pets_tab.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/new_appointment_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/new_pet_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/profile_tab.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/records_tab.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/signup_window.png?raw=true',
            'https://github.com/k0laa/Veterinerlik_Uygulamasi/blob/main/resources/app_photos/waiting_patients_tab.png?raw=true',
        ],
        technologies: ['Python', 'PyQt5', 'SQLite'],
        github: 'https://github.com/k0laa/Veterinerlik_Uygulamasi',
        demo: undefined,
    },
    {
        title: 'Python-Record-Linkage-Toolkit',
        description: 'Staj görevlerimden biri olan Record Linkage Toolkit kütüphanesi incelemesi için dokümantasyon yardımı ile hazılanmış bir repodur.',
        images: [],
        technologies: ['Python', 'Record-Linkage'],
        github: 'https://github.com/k0laa/Python-Record-Linkage-Toolkit',
        demo: undefined,
    },
    {
        title: 'Valorant Instalock',
        description: 'Valorant oynarken senden önce istediğin ajanı sormadan kitleyenlere son!',
        images: [
            'https://github.com/k0laa/Valorant_Instalock/blob/main/images/icon.png?raw=true',
            'https://github.com/k0laa/Valorant_Instalock/blob/main/resources/main.png?raw=true',
            'https://github.com/k0laa/Valorant_Instalock/blob/main/resources/example.png?raw=true',
        ],
        technologies: ['Python', 'PyQt5', 'pyautogui'],
        github: 'https://github.com/k0laa/Valorant_Instalock',
        demo: undefined,
    },
    {
        title: 'Yılan Oyunu',
        description: 'Pygame kütüphanesi kullanılarak yaptığım ilk projem. Basit bir yılan oyunudur.',
        images: [
            'https://github.com/k0laa/Yilan_Oyunu_Pygame/blob/main/resources/in_game.png?raw=true',
            'https://github.com/k0laa/Yilan_Oyunu_Pygame/blob/main/resources/in_game_2.png?raw=true',
            'https://github.com/k0laa/Yilan_Oyunu_Pygame/blob/main/resources/start_game.png?raw=true',
            'https://github.com/k0laa/Yilan_Oyunu_Pygame/blob/main/resources/restart_game.png?raw=true',
        ],
        technologies: ['Python', 'Pygame'],
        github: 'https://github.com/k0laa/Yilan_Oyunu_Pygame',
        demo: undefined,
    },
    {
        title: 'Labirent Oyunu',
        description: 'C# dili kullanılarak Windows Forms platformunda geliştirilmiş eğlenceli bir Labirent Oyunudur.',
        images: [
            'https://github.com/k0laa/Windows_Forms_Labirent_Oyunu/blob/master/resources/game.png?raw=true',
        ],
        technologies: ['C#', 'Windows Forms'],
        github: 'https://github.com/k0laa/Windows_Forms_Labirent_Oyunu',
        demo: undefined,
    },
    {
        title: 'Pinpon Oyunu',
        description: 'Windows Forms kullanılarak C# ile yazılmış basit bir pinpon oyunudur.',
        images: [
            'https://github.com/k0laa/Windows_Forms_PinPon_Oyunu/blob/master/resources/start_page.png?raw=true',
            'https://github.com/k0laa/Windows_Forms_PinPon_Oyunu/blob/master/resources/in_game.png?raw=true',
            'https://github.com/k0laa/Windows_Forms_PinPon_Oyunu/blob/master/resources/game_over.png?raw=true',
        ],
        technologies: ['C#', 'Windows Forms'],
        github: 'https://github.com/k0laa/Windows_Forms_PinPon_Oyunu',
        demo: undefined,
    },
    {
        title: 'Not Uygulaması',
        description: 'Electron kullanarak yaptığım ilk projem. Basit bir not uygulmasıdır.',
        images: [],
        technologies: ['Electron', 'JavaScript', 'HTML'],
        github: 'https://github.com/k0laa/Electron-NotUygulamasi',
        demo: undefined,
    },
    {
        title: 'Soru Bankası',
        description: 'Soru bankası uygulaması',
        images: [],
        technologies: ['Python', 'PyQt5', 'SQLite'],
        github: 'https://github.com/k0laa/Soru_Bankasi',
        demo: undefined,
    },
];

const AllProjects = ({ isDarkMode }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            id="home"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg">
                <Particles/>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: 'text.primary',
                        }}
                    >
                        Tüm Projelerim
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProjectCard project={project} isDarkMode={isDarkMode}/>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default AllProjects; 