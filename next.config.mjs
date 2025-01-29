/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
