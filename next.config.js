/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i0.shbdn.com" }],
    unoptimized: true,
  },
};

module.exports = nextConfig;
