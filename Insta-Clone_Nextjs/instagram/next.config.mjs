/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    // domains: ["links.papareact.com"],
    remotePatterns: [
      { protocol: "https", hostname: "links.papareact.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "http", hostname: "googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
