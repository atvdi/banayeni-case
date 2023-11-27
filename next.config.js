/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { remotePatterns: [{ protocol: "https", hostname: "i0.shbdn.com" }] },
};

module.exports = nextConfig;
