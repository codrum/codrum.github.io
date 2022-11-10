import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import { AboutStillwater } from './stillwater/AboutStillwater'

export const Content = () => {
	return (
		<Grid container>
			<Grid item xs={12} md={6}>
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
				<AboutStillwater />
			</Grid>
		</Grid>
	)
}
