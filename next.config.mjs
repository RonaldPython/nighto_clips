/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    eslint: {
      ignoreDuringBuilds: true
    },
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '',
          pathname: '/demos/**',  // Adjusted the pathname to match the image path
        },
        
      ],
    },
  };
  
  export default nextConfig;
  