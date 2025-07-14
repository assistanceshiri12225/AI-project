/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "randomuser.me",
    },
  ],
},

  experimental: {
    allowedDevOrigins: ["http://localhost:3000", "http://192.168.56.1:3000"],
  },
};

export default nextConfig;
