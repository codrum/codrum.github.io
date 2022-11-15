import { Box, Grid } from '@mui/material'
import React from 'react'

export const StillwaterImage = () => {
    return (<Grid
        item
        xs={12}
        lg={6}
        sx={{ display: { md: 'flex' } }}
    >
        <Box
            sx={{
                width: '100%',
                height: '100%',
                minHeight: '80vh',
                backgroundImage: 'url("/images/mapimage2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        />
    </Grid>)
}