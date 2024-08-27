import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = ({ getText }) => {
    return (
        <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#000', color: 'white' }}>
            <Container maxWidth="md">
                <Typography variant="body2">
                    © {new Date().getFullYear()} {getText("footerRights")}.
                </Typography>
                <Typography variant="body2" mt={2}>
                    {getText("footerJoinUs")}
                </Typography>
                <Link href="https://www.youtube.com/c/BOMBAProductionA" target="_blank" color="inherit" sx={{ mt: 1 }}>
                    {getText("footerYouTubeLink")}
                </Link>
            </Container>
        </Box>
    );
};

export default Footer;
