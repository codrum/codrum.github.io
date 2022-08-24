/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: { unoptimized: true },
	assetPrefix: isProd ? '/codrum.github.io/' : '',
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = nextConfig
