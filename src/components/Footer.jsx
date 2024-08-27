import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = ({ getText }) => {
    return (
        <Box sx={{ py: 4, backgroundColor: 'background.default', color: 'text.primary', textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Typography variant="body1">{getText("footerRights")}</Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    {getText("footerJoinUs")}
                </Typography>
                <Link href="https://www.youtube.com/@Bomba_Production" target="_blank" rel="noopener" color="inherit" sx={{ mt: 1 }}>
                    {getText("footerYouTubeLink")}
                </Link>
            </Container>
        </Box>
    );
};

export default Footer;
