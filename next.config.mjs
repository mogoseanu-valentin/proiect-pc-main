/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.clerk.com',
      'img.google.com',
      'images.pexels.com',
      'a0.muscache.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/7.x/**',
      },
    ],
  },
  // Explicitly configure fonts to avoid 404 errors
  experimental: {
    optimizeFonts: true,
  },
}

export default nextConfig;
