import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="inherit" href="/">Home</Button>
                    </Typography>
                    <Button color="inherit" href="/connexion">Connexion</Button>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2,  marginLeft: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
