import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Navbar = () => {
    return <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar>
            <CameraIcon sx={{ mr: 2, color: 'black' }} />
            <Typography variant="h6" color="black" noWrap>
                Album layout
            </Typography>
        </Toolbar>
    </AppBar>;
}
