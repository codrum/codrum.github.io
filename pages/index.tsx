import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import { Content } from '../components/Content'
import { Courses } from '../components/courses/Courses'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { SDGCInfo } from '../components/sdgc/SDGCInfo'
import { JoinToday } from '../components/bottombanner/JoinToday'

const theme = createTheme()
const HomePage: NextPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<main>
				<Hero />
				<Content />
				<Courses />
				<SDGCInfo />
				<JoinToday />
			</main>
		</ThemeProvider>
	)
}

export default HomePage
