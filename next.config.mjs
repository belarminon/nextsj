/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.sk-static.com',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
      experimental: {
        serverActions: {
          // edit: updated to new key. Was previously `allowedForwardedHosts`
          allowedOrigins: ['localhost:3000'],
        },
      },
};

export default nextConfig;
