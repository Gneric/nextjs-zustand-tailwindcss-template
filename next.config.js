/** @type {import('next').NextConfig} */

module.exports = {
    output: 'export',
    distDir: 'out',
    reactStrictMode: true,
    devIndicators: false,
    generateBuildId: () => 'static-build',
    skipTrailingSlashRedirect: true,
    skipMiddlewareUrlNormalize: true,
}
