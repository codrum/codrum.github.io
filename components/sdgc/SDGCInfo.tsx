import { Box, Grid, Typography, Container } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'

type SDGCInfoProps = {}
export const SDGCInfo: FC<SDGCInfoProps> = () => {
	return (
		<Grid
			container
			sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
		>
			<Grid item xs={12} md={7}>
				<Box
					sx={{
						width: '100%',
						minHeight: '80vh',
						backgroundColor: '#f0ede8',
						pl: { xs: 4, md: 8 },
						pr: { xs: 4, md: 8 },
					}}
				>
					<Container sx={{ pt: 8, textAlign: 'justify' }}>
						<Typography
							component='h3'
							variant='h5'
							gutterBottom
							sx={{
								color: '#e57601',
								fontFamily: 'Ubuntu',
							}}
						>
							Home to the
						</Typography>
						<Typography
							component='h3'
							variant='h4'
							gutterBottom
							sx={{
								fontWeight: 700,
								pb: '16px',
								color: 'black',
								textAlign: 'left',
								fontFamily: 'Ubuntu',
							}}
						>
							Stillwater Disc Golf Club
						</Typography>
						<Box
							sx={{
								float: { md: 'right' },
								pl: { md: 4 },
								pt: 2,
							}}
						>
							<Image
								alt='basket'
								src='/images/basket.jpeg'
								width={192}
								height={256}
							/>
						</Box>
						<Typography
							variant='body1'
							sx={{
								color: 'black',
								fontFamily: 'Open-sans',
								pb: 2,
							}}
						>
							The Stillwater Disc Golf Club is a group of avid
							disc golfers in the mid Oklahoma region. We host 1-2
							mini tournaments a week, and 2-3 PDGA approved
							C-tier and B-tier tournaments. The SDGC has been
							around almost as long as disc golf has in
							Stillwater, and works in hand with the City to help
							upkeep and maintain our beautiful courses.
						</Typography>
						<Typography
							variant='body1'
							sx={{
								color: 'black',
								fontFamily: 'Open-sans',
								pb: 2,
							}}
						>
							Up until now, the SDGC's online presence has been
							contained to a Facebook Group. We post information
							about local events and tournaments as well as a
							place to discuss local happenings in the disc golf
							scene. Most commonly, you'll find lost and found
							discs, discussion about tournmanets, and of course,
							the occasional photo of a community member posing
							next to a basket with a "1" after accomplishing an
							ace.
						</Typography>
						<Typography
							variant='body1'
							sx={{
								color: 'black',
								fontFamily: 'Open-sans',
								pb: 8,
							}}
							gutterBottom
						>
							If you're new to the Stillwater area, or are just
							looking for cool people to play disc golf with, join
							the SDGC today!
						</Typography>
					</Container>
				</Box>
			</Grid>
			<Grid item xs={12} md={5}>
				<Box
					sx={{
						width: '100%',
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
