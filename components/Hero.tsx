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
			</Container>
		</Box>
	)
}
