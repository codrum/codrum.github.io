import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import '@fontsource/open-sans'
import '@fontsource/ubuntu'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
		<Head>
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
		</Head>
			<Script
				id='get-ga'
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=G-J1ZP3L1Q6R`}
			/>

			<Script id='config' strategy='lazyOnload'>
				{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-J1ZP3L1Q6R', {
			page_path: window.location.pathname,
        });
		`}
			</Script>

			<Script
				async
				src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5016075289889293'
				crossOrigin='anonymous'
			/>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
