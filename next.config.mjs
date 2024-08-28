/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'conejonegro.local',
          protocol: 'https',
          hostname: 'https://mcseguros.com.mx/portfolio',
        },
      ],
    },
};

export default nextConfig;
