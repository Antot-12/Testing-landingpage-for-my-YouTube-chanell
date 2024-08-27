import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, useMediaQuery, Box, Menu, MenuItem } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VideoGallery from './components/VideoGallery';
import SuggestionForm from './components/SuggestionForm';
import Footer from './components/Footer';
import LatestVideo from './components/LatestVideo';

const App = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState(prefersDarkMode);
    const [language, setLanguage] = useState('ua');
    const [anchorEl, setAnchorEl] = useState(null);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light',
                    primary: {
                        main: darkMode ? '#00bcd4' : '#ff9800', // Orange for light theme, cyan for dark theme
                    },
                    background: {
                        default: darkMode ? '#121212' : '#ffffff',
                        latestVideo: darkMode ? '#181818' : '#ffffff',
                        otherSections: darkMode ? '#121212' : '#f5f5f5',
                    },
                    text: {
                        primary: darkMode ? '#18d3eb' : '#212121', // Turquoise in dark mode, default in light mode
                    },
                },
                typography: {
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    h3: {
                        fontWeight: 700, // Bold font for component titles
                        color: darkMode ? '#18d3eb' : '#ff9800', // Turquoise in dark mode, orange in light mode
                    },
                    h4: {
                        fontWeight: 700, // Bold in both modes
                        color: darkMode ? '#18d3eb' : '#ff9800', // Turquoise in dark mode, orange in light mode
                    },
                    h5: {
                        fontWeight: 700, // Bold in both modes
                        color: darkMode ? '#18d3eb' : '#ff9800', // Turquoise in dark mode, orange in light mode
                    },
                    body1: {
                        fontWeight: 400,
                    },
                },
            }),
        [darkMode]
    );

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleLanguageClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageClose = (lang) => {
        setAnchorEl(null);
        if (lang) setLanguage(lang);
    };

    const getText = (key) => {
        const translations = {
            ua: {
                welcome: "Ласкаво просимо на BOMBA Production!",
                about: "Про нас",
                aboutDescription: "BOMBA Production — це команда професіоналів, яка спеціалізується на створенні високоякісного відеоконтенту. Наш канал на YouTube присвячений різноманітним темам, включаючи подорожі, технології, креативні проекти та багато іншого.",
                suggestion: "Залиште свою пропозицію",
                suggestionText: "Ми завжди відкриті до ваших пропозицій щодо покращення нашого каналу. Напишіть нам, що ви хотіли б побачити або як ми можемо стати кращими.",
                suggestionSuccess: "Дякуємо за вашу пропозицію! Ми розглянемо її найближчим часом.",
                emailAddress: "Email Address",
                message: "Ваше повідомлення",
                submit: "Відправити",
                ourVideos: "Наші Відео",
                latestVideo: "Останнє Відео",
                errorLoadingVideo: "Помилка завантаження відео:",
                loading: "Завантаження...",
                footerRights: "BOMBA Production. Всі права захищені",
                footerJoinUs: "Приєднуйтесь до нас на соціальних платформах:",
                footerYouTubeLink: "YouTube Channel",
                heroDescription: "Креативний контент, захоплюючі відео та безмежне натхнення. Пориньте у світ цікавого та незабутнього з нами!",
                video1: "Як Повернути Стару Панель Завантаження В Google Chrome",
                video2: "Як Почистити Pavilion 17",
                video3: "Як Почистити Lenovo Legion 5 15Imh05",
            },
            en: {
                welcome: "Welcome to BOMBA Production!",
                about: "About Us",
                aboutDescription: "BOMBA Production is a team of professionals specializing in creating high-quality video content. Our YouTube channel covers a variety of topics including travel, technology, creative projects, and more.",
                suggestion: "Leave your suggestion",
                suggestionText: "We are always open to your suggestions on how to improve our channel. Let us know what you'd like to see or how we can get better.",
                suggestionSuccess: "Thank you for your suggestion! We will review it soon.",
                emailAddress: "Email Address",
                message: "Your message",
                submit: "Submit",
                ourVideos: "Our Videos",
                latestVideo: "Latest Video",
                errorLoadingVideo: "Error loading video:",
                loading: "Loading...",
                footerRights: "BOMBA Production. All rights reserved.",
                footerJoinUs: "Join us on social platforms:",
                footerYouTubeLink: "YouTube Channel",
                heroDescription: "Creative content, exciting videos, and endless inspiration. Dive into a world of interesting and unforgettable moments with us!",
                video1: "How To Restore The Old Download Panel In Google Chrome",
                video2: "How To Clean Pavilion 17",
                video3: "How To Clean Lenovo Legion 5 15Imh05",
            },
            sk: {
                welcome: "Vitajte na BOMBA Production!",
                about: "O nás",
                aboutDescription: "BOMBA Production je tím profesionálov, ktorí sa špecializujú na tvorbu vysoko kvalitného video obsahu. Náš YouTube kanál sa venuje rôznym témam, vrátane cestovania, technológií, kreatívnych projektov a ďalších.",
                suggestion: "Nechajte svoj návrh",
                suggestionText: "Vždy sme otvorení vašim návrhom na zlepšenie nášho kanálu. Dajte nám vedieť, čo by ste chceli vidieť alebo ako môžeme byť lepší.",
                suggestionSuccess: "Ďakujeme za váš návrh! Čoskoro ho prehodnotíme.",
                emailAddress: "Email Address",
                message: "Vaša správa",
                submit: "Odoslať",
                ourVideos: "Naše Videá",
                latestVideo: "Najnovšie Video",
                errorLoadingVideo: "Chyba pri načítaní videa:",
                loading: "Načítava sa...",
                footerRights: "BOMBA Production. Všetky práva vyhradené.",
                footerJoinUs: "Pripojte sa k nám na sociálnych platformách:",
                footerYouTubeLink: "YouTube Channel",
                heroDescription: "Kreatívny obsah, vzrušujúce videá a nekonečná inšpirácia. Ponorte sa s nami do sveta zaujímavých a nezabudnuteľných momentov!",
                video1: "Ako Obnoviť Starý Panel Na Stiahnutie V Google Chrome",
                video2: "Ako Vyčistiť Pavilion 17",
                video3: "Ako Vyčistiť Lenovo Legion 5 15Imh05",
            },
        };

        return translations[language][key] || translations.ua[key];
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    handleLanguageClick={handleLanguageClick}
                />
                <HeroSection getText={getText} />
                <AboutSection getText={getText} />
                <LatestVideo getText={getText} />
                <VideoGallery getText={getText} />
                <SuggestionForm getText={getText} />
                <Footer getText={getText} />
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleLanguageClose(null)}
            >
                <MenuItem onClick={() => handleLanguageClose('ua')}>Українська</MenuItem>
                <MenuItem onClick={() => handleLanguageClose('en')}>English</MenuItem>
                <MenuItem onClick={() => handleLanguageClose('sk')}>Slovenský</MenuItem>
            </Menu>
        </ThemeProvider>
    );
};

export default App;
