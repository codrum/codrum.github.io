/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: isProd ? '/stillwaterdiscgolf.org/' : '',
}

module.exports = {
	nextConfig,
	images: {
		loader: 'imgix',
		path: 'https://stillwater-disc-golf.imgix.net',
	},
}
