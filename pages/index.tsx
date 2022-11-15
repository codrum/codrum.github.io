import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import { JoinToday } from '../components/bottombanner/JoinToday'
import { Content } from '../components/Content'
import { Courses } from '../components/courses/Courses'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { SDGC } from '../components/sdgc/SDGC'

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
				<SDGC />
				<JoinToday />
			</main>
		</ThemeProvider>
	)
}

export default HomePage
