import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const videos = [
    {
        title: 'Відео 1',
        description: 'Опис першого відео. Це відео про подорожі.',
        image: '/assets/video1.jpg',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
    },
    {
        title: 'Відео 2',
        description: 'Опис другого відео. Це відео про технології.',
        image: '/assets/video2.jpg',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
    },
    {
        title: 'Відео 3',
        description: 'Опис третього відео. Це відео про креативні проекти.',
        image: '/assets/video3.jpg',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
    },
];

const VideoGallery = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: '#fafafa' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Наші Відео
                </Typography>
                <Grid container spacing={4} mt={4}>
                    {videos.map((video, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={video.image}
                                    alt={video.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {video.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {video.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default VideoGallery;
