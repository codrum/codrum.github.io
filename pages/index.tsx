import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import { JoinToday } from '../components/bottombanner/JoinToday'
import { Courses } from '../components/courses/Courses'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { SDGC } from '../components/sdgc/SDGC'
import { Stillwater } from '../components/stillwater/Stillwater'

const theme = createTheme()
const HomePage: NextPage = () => {
	return (
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
	)
}

export default HomePage
