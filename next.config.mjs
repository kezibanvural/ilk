/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        AUTH_TRUSTED_HOSTS: process.env.AUTH_TRUSTED_HOSTS,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
    experimental: {
      trustHostHeader: true,
    },
  };
  
  export default nextConfig;