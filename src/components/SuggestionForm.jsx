import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Container, Typography, TextField, Button, Alert } from '@mui/material';

function SuggestionForm({ getText }) {
    const [state, handleSubmit] = useForm("movardlb");

    if (state.succeeded) {
        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Alert severity="success">{getText("suggestionSuccess")}</Alert>
            </Container>
        );
    }

    return (
        <Box sx={{ py: 8, backgroundColor: 'background.otherSections' }}>
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    {getText("suggestion")}
                </Typography>
                <Typography variant="body1" paragraph align="center">
                    {getText("suggestionText")}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                    <TextField
                        fullWidth
                        label={getText("emailAddress")}
                        id="email"
                        type="email"
                        name="email"
                        required
                        margin="normal"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <TextField
                        fullWidth
                        label={getText("message")}
                        id="message"
                        name="message"
                        multiline
                        rows={4}
                        required
                        margin="normal"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        disabled={state.submitting}
                    >
                        {getText("submit")}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default SuggestionForm;
