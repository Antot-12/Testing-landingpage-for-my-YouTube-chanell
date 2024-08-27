import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroSection = ({ getText }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                textAlign: 'center',
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/src/assets/image-3.jpg)', // Ensure correct path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'text.primary', // This will change based on the theme
                padding: '0 20px',
                animation: 'fadeIn 2s ease-in-out',
                '@keyframes fadeIn': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h3" component="h1" gutterBottom sx={{ animation: 'fadeSlide 1.5s ease-in-out' }}>
                    {getText("welcome")}
                </Typography>
                <Typography variant="h5" paragraph sx={{ animation: 'fadeSlide 2s ease-in-out' }}>
                    {getText("heroDescription")}
                </Typography>
            </Container>
        </Box>
    );
};

export default HeroSection;
