/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com", "cloud.appwrite.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
