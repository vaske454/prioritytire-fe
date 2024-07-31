/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'prioritytire-be.ddev.site',
            },
            {
                protocol: 'https',
                hostname: 'prioritytire.com',
            },
            {
                protocol: 'https',
                hostname: 'us-east-1-shared-usea1-02.graphassets.com'
            }
        ],
    },
};

export default nextConfig;
