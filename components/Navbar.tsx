import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Box, Button, Slide, useScrollTrigger } from '@mui/material'

type hideOnScrollProps = { children: React.ReactElement }

const HideOnScroll = ({ children }: hideOnScrollProps) => {
	const trigger = useScrollTrigger()
	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

export const Navbar = () => {
	const pages = ['Courses', 'SDGC', 'Events']

	return (
		<HideOnScroll>
			<AppBar
				position='sticky'
				elevation={0}
				color='transparent'
				// sx={{ backgroundColor: 'rgba(43, 88, 101,0.6)' }}
			>
				<Toolbar>
					<Image
						src='/images/newlogo.png'
						height={45}
						width={135}
						alt='logo'
						style={{
							marginTop: '-16px',
							paddingLeft: '16px',
							opacity: '1',
						}}
					/>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'center',
						}}
					>
						{/* {pages.map((page) => (
							<Button
								key={page}
								// onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
								size='large'
							>
								{page}
							</Button>
						))} */}
					</Box>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	)
}
