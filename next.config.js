/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  env: {
    LIFF_ID: process.env.LIFF_ID,
    NEXT_PUBLIC_LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID,
  },
}
