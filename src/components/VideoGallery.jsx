import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';

const videos = [
    {
        titleKey: 'video1',
        videoId: 'xFMpwrP2cxw',
        url: 'https://www.youtube.com/watch?v=xFMpwrP2cxw',
    },
    {
        titleKey: 'video2',
        videoId: 'TgAnYLTmGSk',
        url: 'https://www.youtube.com/watch?v=TgAnYLTmGSk',
    },
    {
        titleKey: 'video3',
        videoId: 'NAQ7nBO3YG0',
        url: 'https://www.youtube.com/watch?v=NAQ7nBO3YG0',
    },
];

const VideoGallery = ({ getText }) => {
    return (
        <Box sx={{ py: 8, backgroundColor: 'background.otherSections', color: 'text.primary' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    {getText('ourVideos')}
                </Typography>
                <Grid container spacing={4} mt={4}>
                    {videos.map((video, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 6px 20px rgba(0, 188, 212, 0.5)',
                                    },
                                }}
                            >
                                <CardActionArea href={video.url} target="_blank" sx={{ textAlign: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                        alt={getText(video.titleKey)}
                                    />
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
                                            {getText(video.titleKey)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default VideoGallery;
