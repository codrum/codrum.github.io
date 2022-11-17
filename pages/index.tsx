import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { JoinToday } from '../components/bottombanner/JoinToday'
import { Courses } from '../components/courses/Courses'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { SDGC } from '../components/sdgc/SDGC'
import { Stillwater } from '../components/stillwater/Stillwater'

const theme = createTheme()
const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Stillwater Disc Golf</title>
				<meta name="description" content="Local information about Stillwater Disc Golf courses, home to the Stillwater Disc Golf Club."></meta>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<main>
					<Hero />
					<Stillwater />
					<Courses />
					<SDGC />
					<JoinToday />
				</main>
			</ThemeProvider>
		</>
	)
}

export default HomePage
