/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  env: {
    NEXT_PUBLIC_GRAPHCMS_URL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  },
}

module.exports = nextConfig 
