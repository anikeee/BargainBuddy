import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from './LoginButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    BargainBuddy
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <LoginButton />
                </Box>
                <IconButton color="inherit">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
