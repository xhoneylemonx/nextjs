import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      root: "C:/Users/Aomsin/Downloads/Works/nextjs01", // ใช้ key 'root' ไม่ใช่ 'rootDir'
    },
  },
  // เพิ่ม config อื่น ๆ ได้ เช่น reactStrictMode: true
  reactStrictMode: true,
};

export default nextConfig;