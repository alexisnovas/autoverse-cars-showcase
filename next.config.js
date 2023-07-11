/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript: {
        ignoreBuildErrors: true
    },
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig