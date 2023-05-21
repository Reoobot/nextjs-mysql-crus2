/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports =  {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};