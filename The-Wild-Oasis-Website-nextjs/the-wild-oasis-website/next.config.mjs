/** @type {import('next').NextConfig} */
const nextConfig = {  
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hbztfxeqbtcdhwcklauc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
    ],
  },
};

export default nextConfig;
