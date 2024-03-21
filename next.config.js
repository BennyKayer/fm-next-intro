/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // serverActions: true, // no longer required in v14
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig
