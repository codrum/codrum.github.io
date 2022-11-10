import * as React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

export const AboutStillwater = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: '#f0ede8',
				pt: '80px',
				pl: '24px',
			}}
		>
			<Container maxWidth='lg'>
				<Typography
					component='h3'
					variant='h5'
					gutterBottom
					sx={{
						color: '#e57601',
						fontFamily: 'Merriweather',
					}}
				>
					Hello, from
				</Typography>
				<Typography
					component='h3'
					variant='h4'
					gutterBottom
					sx={{ fontWeight: 700, pb: '16px', color: 'black' }}
				>
					Stillwater Disc Golf
				</Typography>
				<Box
					sx={{
						marginLeft: '-100px',
						paddingBottom: '32px',
						// marginTop: '-50px',
						// transform: 'rotate(-10deg)',
					}}
				>
					<Image
						alt='basket'
						src='/images/holeone.jpeg'
						width={384}
						height={274}
					/>
				</Box>

				<Box sx={{ maxWidth: '70%', pl: '24px' }}>
					<Typography
						component='p'
						gutterBottom
						sx={{ textAlign: 'justify', color: 'black', pb: 8 }}
					>
						How many times were you frustrated while looking out for
						a good collection of programming/algorithm /interview
						questions? What did you expect and what did you get?
						This portal has been created to provide well written,
						well thought and well explained solutions for selected
						questions. An IIT Roorkee alumnus and founder of
						GeeksforGeeks. He loves to solve programming problems in
						most efficient ways. Apart from GeeksforGeeks, he has
						worked with DE Shaw and Co. as a software developer and
						JIIT Noida as an assistant professor. It is a good
						platform to learn programming. It is an educational
						website. Prepare for the Recruitment drive of product
						based companies like Microsoft, Amazon, Adobe etc with a
						free online placement preparation course.
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}
