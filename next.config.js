/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "uploadthing.com",
      "utfs.io",
      "img.clerk.com",
      "subdomain",
      "files.stripe.com",
      "7sqsbvs1cn.ufs.sh",
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
