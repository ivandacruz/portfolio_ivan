/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['localhost', 'portfolio-ivan.vercel.app'],
    unoptimized: true
  }
}

module.exports = nextConfig 