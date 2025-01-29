/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' }; // Suppress logs
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: '**', // This is the workaround to allow any external domain
        pathname: '**',
        protocol: 'https',
      },
    ],
  },
  api: {
    externalResolver: true,
  },
};

export default nextConfig;
