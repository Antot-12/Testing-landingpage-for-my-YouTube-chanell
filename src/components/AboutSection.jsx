import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutSection = ({ getText }) => {
    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    {getText("about")}
                </Typography>
                <Typography variant="body1" paragraph>
                    {getText("aboutDescription")}
                </Typography>
            </Container>
        </Box>
    );
};

export default AboutSection;
