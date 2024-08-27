import React from 'react';
import { MenuItem, Select, Box } from '@mui/material';

const languages = {
    ua: 'Українська',
    en: 'English',
    sk: 'Slovenský',
};

const LanguageSelector = ({ language, setLanguage }) => {
    return (
        <Box sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1000 }}>
            <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                variant="outlined"
                sx={{
                    backgroundColor: '#fff',
                    color: '#000',
                    '& .MuiSelect-outlined': {
                        backgroundColor: '#fff',
                        color: '#000',
                    },
                }}
            >
                {Object.entries(languages).map(([key, label]) => (
                    <MenuItem key={key} value={key}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};

export default LanguageSelector;
