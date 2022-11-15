import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'

type AboutStillwaterTextProps = {}
export const AboutStillwaterText: FC<AboutStillwaterTextProps> = () => {
	return (
		<>
			<Typography
				component='p'
				sx={{
					textAlign: 'left',
					color: 'black',
					pb: 4,
					fontFamily: 'Open-sans',
				}}
			>
				Welcome to Stillwater, home of four great 18-hole disc golf
				courses! Disc golf has been around in Stillwater since the
				1983 when the town's first baskets entered the earth at
				Boomer Lake. It remained as a low-key passtime for those
				educated enough to understand the sport for decades. However, with the recent growth in popularity of the sport
				thank to Covid-19, Stillwater is quickly becoming a disc
				golfing hotspot across Oklahoma.
			</Typography>
			<Typography
				component='p'
				sx={{
					textAlign: 'left', color: 'black',
					pb: 4,
					fontFamily: 'Open-sans',

				}}
			>
				Since Stillwater hosts the OSU campus, which now has their own disc golf club, you will find no shortage of golfers spread amongst the two in-town courses,
				Boomer Lake and Hoyt Grove. You will find a majority of players prefer the wooded fairways of Hoyt Grove, but do not underestimate the
				mental boost that a sunset over Boomer Lake can provide. For a dedicated day of hiking and disc golfing, look no further than a fifteen minute drive
				to Lake McMurtry, which hosts two beautifully maintained courses and miles of trails.
			</Typography>
		</>
	)
}
