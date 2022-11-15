import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

export const AboutStillwater = () => {
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
							md: '-120px',
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

				<Typography
					component='p'
					sx={{
						textAlign: 'left',
						color: 'black',
						pb: { xs: 8 },
						fontFamily: 'Open-sans',
					}}
				>
					Welcome to Stillwater, home of four great 18-hole disc golf
					courses! Disc golf has been around in Stillwater since the
					1983 when the town's first baskets entered the earth at
					Boomer Lake. It remained as a low-key passtime for those
					educated enough to understand the sport for decades. However, with the recent growth in popularity of the sport
					thank to Covid-19, Stillwater is quickly becoming a disc
					golfing hotspot across Oklahoma.
				</Typography>
				<Typography
					component='p'
					sx={{
						textAlign: 'left',
						color: 'black',
						// pb: 8,
						fontFamily: 'Open-sans',

					}}
				>
					Since Stillwater hosts the OSU campus, which now has their own disc golf club, you will find no shortage of golfers spread amongst the two in-town courses,
					Boomer Lake and Hoyt Grove. You will find a majority of players prefer the wooded fairways of Hoyt Grove, but do not underestimate the
					mental boost that a sunset over Boomer Lake can provide. For a dedicated day of hiking and disc golfing, look no further than a fifteen minute drive
					to Lake McMurtry, which hosts two beautifully maintained courses and miles of trails.
				</Typography>
			</Container>
		</Box>
	)
}
