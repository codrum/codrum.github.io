import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import { SDGCInfo } from './SDGCInfo'

type SDGCProps = {}
export const SDGC: FC<SDGCProps> = () => {
    return (
        <Grid
            container
            sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
        >
            <Grid item xs={12} md={7}>
                <SDGCInfo />
            </Grid>
            <Grid item xs={12} md={5}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: '80vh',
                        backgroundImage:
                            'url("/images/stillwaterdiscgolf.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',

                    }}
                />
            </Grid>
        </Grid>
    )
}
