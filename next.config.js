/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure proper handling of dynamic routes
  experimental: {
    // This helps with the dynamic server usage error
    serverActions: true,
  },
}

module.exports = nextConfig 