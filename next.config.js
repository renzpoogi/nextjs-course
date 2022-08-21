/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//
// }

module.exports = {
  async headers() {
    return [
      {
        source: '/new-meetup',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },

        ],
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}
