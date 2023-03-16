import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import LoginButton from './LoginButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
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
