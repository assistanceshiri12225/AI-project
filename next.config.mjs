/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**", // ✅ Yeh line bahut zaroori hai
      },
    ],
  },
};

export default nextConfig;