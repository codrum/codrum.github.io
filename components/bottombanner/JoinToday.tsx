import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'

type JoinTodayProps = {}

export const JoinToday: FC<JoinTodayProps> = () => {
	return (
		<Box
			sx={{
				height: '100%',
				pt: 8,
			}}
		>
			<Container>
				<Typography
					variant='h4'
					textAlign='center'
					gutterBottom
					sx={{ fontWeight: 700, fontFamily: 'Ubuntu', pb: 4 }}
				>
					Join the SDGC Facebook group to stay up to date on local
					events!
				</Typography>
				<Box sx={{ textAlign: 'center', pb: 8 }}>
					<Link href='https://www.facebook.com/groups/561098823911209'>
						<Button variant='outlined' size='large'>
							Join Now
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	)
}
