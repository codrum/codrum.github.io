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


export const Navbar: FC<{}> = () => {
	return (
		<HideOnScroll>
			<AppBar
				position='sticky'
				elevation={0}
				color='transparent'
			>
				<Toolbar>
					<Image
						src='/images/newlogo.svg'
						height={90}
						width={270}
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
					</Box>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	)
}
