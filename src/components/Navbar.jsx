import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Language as LanguageIcon } from '@mui/icons-material';

const Navbar = ({ darkMode, toggleDarkMode, handleLanguageClick }) => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: darkMode ? '#121212' : '#ff9800', // Orange background for light mode, dark for dark mode
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: '16px', paddingRight: '16px' }}>
                <Box
                    component="img"
                    src="/src/assets/logo.png"
                    alt="BOMBA Production Logo"
                    sx={{
                        height: '60px', // Increase the size of the logo
                    }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={toggleDarkMode} color="inherit">
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <IconButton onClick={handleLanguageClick} color="inherit">
                        <LanguageIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
