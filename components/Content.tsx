import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import React, { FC } from 'react'
import { AboutStillwater } from './stillwater/AboutStillwater'
import { Stillwater } from './stillwater/Stillwater'

type ContentProps = {}
export const Content: FC<ContentProps> = () => {
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				md={6}
				sx={{ display: { xs: 'hidden', md: 'flex' } }}
			>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: 'url("/images/mapimage2.jpg")',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
					}}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stillwater />
			</Grid>
		</Grid>
	)
}
