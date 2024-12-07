const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/popular/:id',
        destination: '/popular/[id]',
      },
      {
        source: '/catalog/:id',
        destination: '/catalog/[id]',
      },
      {
        source: '/productone/:id',
        destination: '/productone/[id]',
      },
    ];
  },
  output: 'export',
  images: {
    unoptimized: true,
  }, 
  trailingSlash: true,
}

export default nextConfig;