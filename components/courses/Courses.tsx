import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import { parks } from '../../data/parks'

type CoursesProps = {}
export const Courses: FC<CoursesProps> = () => {
<<<<<<< HEAD
	const parks = [
		{
			name: 'Hoyt Grove',
			url: '/images/hoyt.jpeg',
			description: 'Hoyt Grove Park is the local favorite, which hosts many lightly wooded fairways that require interesting shot shapes. It is the most popular course in town, and usually hosts 1-2 minis a week.'
		},
		{
			name: 'Boomer Lake',
			url: '/images/boomer.jpg',
			description:
				'Boomer Lake Park is known for its long, open fairways and its water carry on hole 7. With downhill bombers, touchy greens, and constant wind off the lake, Boomer is sure to test your skills.',
		},
		{
			name: 'Lake McMurtry',
			url: '/images/mcmurtry.jpg',
			description:
				'Lake McMurtry Park hosts two 18 hole courses on its property. There is a $6 fee per vehicle to enter the park, but its well maintained fairways and challenging tee shots will challenge even the best local pros.',
		},
	]
=======
>>>>>>> b84eb3fdb90682338e2e0a639585a26c7148c902
	return (
		<Grid container justifyContent='center' sx={{ pt: 8, pb: 8 }}>
			{parks.map((park) => {
				return (
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
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
