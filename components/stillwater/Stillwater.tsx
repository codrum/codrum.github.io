import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import React, { FC } from 'react'
import { StillwaterInfo } from './StillwaterInfo'
// import { Stillwater } from './stillwater/Stillwater'

type StillwaterProps = {}
export const Stillwater: FC<StillwaterProps> = () => {
	return (
		<Grid container sx={{ flexDirection: { xs: 'row-reverse', md: 'row' } }}>
			<Grid
				item
				xs={12}
				md={6}
				sx={{ display: { md: 'flex' } }}
			>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						minHeight: '80vh',
						backgroundImage: 'url("/images/mapimage2.jpg")',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
					}}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<StillwaterInfo />
			</Grid>
		</Grid>
	)
}
