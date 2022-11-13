import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export const Hero = () => {
	return (
		<Box
			sx={{
				backgroundImage: 'url("/images/ogBackground2.jpg")',
				backgroundSize: 'cover',
				pt: 16,
				pb: 6,
				mt: '-150px',
				height: '100vh',
			}}
		>
			<Container>
				<Typography
					component='h1'
					variant='h1'
					align='center'
					color='white'
					gutterBottom
					sx={{
						color: 'white',
						fontFamily: 'Ubuntu',
						fontWeight: 700,
						fontSize: {
							xs: '48px',
							md: '72px',
						},
						pt: 16,
					}}
				>
					Stillwater Disc Golf
				</Typography>
				<Typography
					component='h4'
					align='center'
					color='white'
					gutterBottom
					sx={{
						color: 'white',
						fontFamily: 'Ubuntu',
						fontWeight: 700,
						fontSize: {
							xs: '36px',
							md: '48px',
						},
						pt: 8,
					}}
				>
					Join The Club
				</Typography>
				<Box sx={{ textAlign: 'center', pb: 8 }}>
					<Link href='https://www.facebook.com/groups/561098823911209'>
						<Button
							variant='outlined'
							size='large'
							sx={{ color: 'white', borderColor: 'white', mr: 1 }}
						>
							Join Now
						</Button>
					</Link>
					<Link href='#explore'>
						<Button
							variant='outlined'
							size='large'
							onClick={(event) => {
								document
									.getElementById('explore')
									?.scrollIntoView({ behavior: 'smooth' })
								event.preventDefault()
							}}
							sx={{ color: 'white', borderColor: 'white', ml: 1 }}
						>
							Explore
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	)
}
