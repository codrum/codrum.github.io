import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Stillwater Disc Golf Club</title>
				<meta name='description' content='The home of the SDGC' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Stillwater Disc Golf{' '}
					<a href='https://www.facebook.com/groups/561098823911209'>
						Club
					</a>
				</h1>

				<p className={styles.description}>The new home of the SDGC!</p>

				<div className={styles.grid}>
					<a href='#' className={styles.card}>
						<h2>Members &rarr;</h2>
						<p>All the current SDGC members and bag tag holders.</p>
					</a>

					<a href='#' className={styles.card}>
						<h2>Events &rarr;</h2>
						<p>
							We host twice-weekly minis and have 2-3 tournaments
							a year.
						</p>
					</a>

					<a href='#' className={styles.card}>
						<h2>About Us &rarr;</h2>
						<p>We&apos;ve been active since 2013!</p>
					</a>

					<a href='#' className={styles.card}>
						<h2>Gallery &rarr;</h2>
						<p>Check out some action shots of our members.</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	)
}

export default Home
