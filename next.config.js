/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'app')],
      },
    images: {
        domains: ['lh3.googleusercontent.com', 'i.ibb.co'],
      },
}

module.exports = nextConfig