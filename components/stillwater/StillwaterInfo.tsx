import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import { AboutStillwaterText } from './AboutStillwaterText'

type StillwaterInfoProps = {}
export const StillwaterInfo: FC<StillwaterInfoProps> = () => {
    return (
        <Box
            id='explore'
            sx={{
                width: '100%',
                minHeight: '100vh',
                backgroundColor: '#f0ede8',
                pt: 8,
                pl: { xs: 4, md: 8 },
                pr: { xs: 4, md: 8 },
            }}
        >
            <Container>
                <Typography
                    component='h3'
                    variant='h5'
                    sx={{
                        color: '#e57601',
                        fontFamily: 'Ubuntu',
                    }}
                >
                    Hello, from
                </Typography>
                <Typography
                    component='h3'
                    variant='h4'
                    sx={{
                        fontWeight: 700,
                        pb: '16px',
                        color: 'black',
                        fontFamily: 'Ubuntu',
                    }}
                >
                    Stillwater Disc Golf
                </Typography>
                <Box
                    sx={{
                        pb: 2,
                        pr: 4,
                        marginLeft: {
                            lg: '-120px',
                            float: 'left',
                        },
                    }}
                >
                    <Image
                        alt='basket'
                        src='/images/holeone.jpeg'
                        width={384}
                        height={274}
                    />
                </Box>
                <AboutStillwaterText />
            </Container>
        </Box>
    )
}
