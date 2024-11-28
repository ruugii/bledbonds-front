/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.bledbonds.es",
        port: "",
        pathname: "/img/*"
      }
    ]
  }
};

export default nextConfig;
