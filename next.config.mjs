/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns:[
        {
          protocol: 'http',
          hostname: 'conejonegro.local',
        },
        {
          protocol: 'https',
          hostname: 'mcseguros.com.mx',
          pathname: '/portfolio/**', // Asegúrate de incluir el pathname si necesitas especificar una ruta
        },
      ],
    },
};

export default nextConfig;
