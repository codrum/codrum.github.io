import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export const Hero = () => {
	return (
		<Box
			sx={{
				backgroundImage: 'url("/images/ogBackground2.jpg")',
				backgroundSize: 'cover',
				pt: 16,
				pb: 6,
				mt: '-150px',
				height: '100vh',
			}}
		>
			<Container>
				<Typography
					component='h1'
					variant='h1'
					align='center'
					color='white'
					gutterBottom
					sx={{
						color: 'white',
						fontFamily: 'Merriweather',
						fontWeight: 700,
						pt: 16,
					}}
				>
					Welcome to Stillwater
				</Typography>
				{/* <Typography variant="h5" align="center" color="white" paragraph>
                With a total of four courses in the city limits, disc golf is picking up traction and
                 becoming quite the popular passtime for not only our local residents, 
                 but also among the students at OSU. Founded in yada yada the Stillwater Disc Golf Club has
                 been cooperating with the City to help upkeep these courses.
            </Typography> */}
				{/* <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button>
            </Stack> */}
			</Container>
		</Box>
	)
}
