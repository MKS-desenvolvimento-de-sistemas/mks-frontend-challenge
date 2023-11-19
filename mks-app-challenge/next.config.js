/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig
