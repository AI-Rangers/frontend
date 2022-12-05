/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        // source: '/api/:path*',
        // destination: 'http://localhost:4000/:path*'
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://api.puff.tw" },
        ],
      },
    ]
  },
  output: 'standalone',
  reactStrictMode: true,
  env: {
    // LIFF_ID: process.env.LIFF_ID,
    LIFF_ID: "1657706181-1gYzEj7b",
    // NEXT_PUBLIC_LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID,
  },
}
