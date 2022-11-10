import { Box, Grid, Typography, Container } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
type SDGCInfoProps = {}

export const SDGCInfo: FC<SDGCInfoProps> = () => {
	return (
		<Grid container>
			<Grid item xs={12} md={7}>
				<Box
					sx={{
						width: '100%',
						height: '100vh',
						backgroundColor: '#f0ede8',
						pl: 8,
						pr: 8,
					}}
				>
					<Container sx={{ pt: 8 }}>
						<Typography
							component='h3'
							variant='h5'
							gutterBottom
							sx={{
								color: '#e57601',
								fontFamily: 'Merriweather',
							}}
						>
							Home to the
						</Typography>
						<Typography
							component='h3'
							variant='h4'
							gutterBottom
							sx={{ fontWeight: 700, pb: '16px', color: 'black' }}
						>
							Stillwater Disc Golf Club
						</Typography>
						<Typography
							variant='body1'
							sx={{ color: 'black' }}
							gutterBottom
						>
							Ut quam neque, hendrerit et laoreet ac, porttitor ac
							sem. Morbi et orci a nisi rutrum volutpat. Proin
							condimentum sed elit ac pretium. Nulla ac pulvinar
							dui. Mauris non justo quam. Nam non venenatis
							mauris. Duis eros justo, consectetur non justo ac,
							commodo fringilla felis. Morbi porttitor ipsum nec
							justo venenatis interdum. Fusce ac aliquet mauris,
							nec tempus diam. Mauris sed nibh quam.
						</Typography>
						<Box sx={{ float: 'right' }}>
							<Image
								alt='basket'
								src='/images/basket.jpeg'
								width={192}
								height={256}
							/>
						</Box>
						<Typography
							variant='body1'
							sx={{ color: 'black' }}
							gutterBottom
						>
							Ut quam neque, hendrerit et laoreet ac, porttitor ac
							sem. Morbi et orci a nisi rutrum volutpat. Proin
							condimentum sed elit ac pretium. Nulla ac pulvinar
							dui. Mauris non justo quam. Nam non venenatis
							mauris. Duis eros justo, consectetur non justo ac,
							commodo fringilla felis. Morbi porttitor ipsum nec
							justo venenatis interdum. Fusce ac aliquet mauris,
							nec tempus diam. Mauris sed nibh quam.
						</Typography>
						<Typography
							variant='body1'
							sx={{ color: 'black' }}
							gutterBottom
						>
							Ut quam neque, hendrerit et laoreet ac, porttitor ac
							sem. Morbi et orci a nisi rutrum volutpat. Proin
							condimentum sed elit ac pretium. Nulla ac pulvinar
							dui. Mauris non justo quam. Nam non venenatis
							mauris. Duis eros justo, consectetur non justo ac,
							commodo fringilla felis. Morbi porttitor ipsum nec
							justo venenatis interdum. Fusce ac aliquet mauris,
							nec tempus diam. Mauris sed nibh quam.
						</Typography>
					</Container>
				</Box>
			</Grid>
			<Grid item xs={12} md={5}>
				<Box
					sx={{
						width: '100%',
						height: '100vh',
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
