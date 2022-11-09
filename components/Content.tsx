import * as React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { cards } from './Home'
import { Box } from '@mui/material'
import { AboutStillwater } from './stillwater/AboutStillwater'

export const Content = () => {
	return (
		<Grid container>
			<Grid item xs={12} md={6}>
				<Box
					sx={{
						width: '100%',
						height: '120vh',
						backgroundImage: 'url("/images/mapimage2.jpeg")',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
					}}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<AboutStillwater />
			</Grid>
		</Grid>
	)
}
