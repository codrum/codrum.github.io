import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { Content } from './Content'
import { Footer } from './Footer'
import { Courses } from './courses/Courses'
import { SDGCInfo } from './sdgc/SDGCInfo'
import { Activities } from './sdgc_activities/Activities'

export function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const theme = createTheme()

export const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<main>
				<Hero />
				<Content />
				<Courses />
				<SDGCInfo />
				<Activities />
			</main>
			{/* <Footer /> */}
		</ThemeProvider>
	)
}
