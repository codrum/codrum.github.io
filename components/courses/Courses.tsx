import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import { parks } from '../../data/parks'

type CoursesProps = {}
export const Courses: FC<CoursesProps> = () => {
	return (
		<Grid container justifyContent='center' sx={{ pt: 8, pb: 8 }}>
			{parks.map((park) => {
				return (
					<Grid
						item
						xs={12}
						md={4}
						key={park.name}
						sx={{ textAlign: 'center', pb: { xs: 4 } }}
					>
						<Typography
							variant='h4'
							gutterBottom
							sx={{
								color: 'black',
								fontWeight: 700,
								fontFamily: 'Ubuntu',
							}}
						>
							{park.name}
						</Typography>
						<Box sx={{ pb: 2 }}>
							<Image
								src={park.url}
								width={250}
								height={250}
								alt={park.name}
								objectFit='cover'
								style={{ borderRadius: 240 }}
							/>
						</Box>
						<Typography
							variant='body1'
							gutterBottom
							align='justify'
							sx={{
								color: 'black',
								maxWidth: '300px',
								margin: '0 auto',
								// pb: 8,
								fontFamily: 'Open-sans',
							}}
						>
							{park.description}
						</Typography>
					</Grid>
				)
			})}
		</Grid>
	)
}
