/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      AUTH_SECRET: process.env.AUTH_SECRET,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,
      API_URL: process.env.API_URL,
    },
  };
  
  export default nextConfig;
  