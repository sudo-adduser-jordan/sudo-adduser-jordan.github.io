import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: 'export',
  basePath: '', // Replace with your GitHub repository name
//   basePath: '/sudo-adduser-jordan', // Replace with your GitHub repository name
  images: {
    unoptimized: true, // Disable server-based image optimization
  },
};

export default nextConfig;
