/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig, typescript: { ignoreBuildErrors: true }, images: {
        domains: ['upload.wikimedia.org'],
    },
}