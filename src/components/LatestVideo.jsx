import React from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

const VIDEO_ID = 'JkunO-B25zg'; // The ID of the specific YouTube video

const LatestVideo = ({ getText }) => {
    return (
        <Box sx={{ py: 8, backgroundColor: 'background.latestVideo', color: 'text.primary' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    {getText('latestVideo')}
                </Typography>
                <Card sx={{ mt: 4 }}>
                    <CardMedia
                        component="iframe"
                        height="400"
                        src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                        title="Latest Video"
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
                            {getText('video1')} {/* You can change this to the actual video title or keep it dynamic */}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default LatestVideo;
