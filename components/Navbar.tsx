import { Box, Slide, useScrollTrigger } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import React, { FC } from 'react'

type hideOnScrollProps = { children: React.ReactElement }
const HideOnScroll = ({ children }: hideOnScrollProps) => {
	const trigger = useScrollTrigger()
	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

type NavbarProps = {}
export const Navbar: FC<NavbarProps> = () => {
	return (
		<HideOnScroll>
<<<<<<< HEAD
			<AppBar
				position='sticky'
				elevation={0}
				color='transparent'
			>
=======
			<AppBar position='sticky' elevation={0} color='transparent'>
>>>>>>> b84eb3fdb90682338e2e0a639585a26c7148c902
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
					></Box>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	)
}
