const nextConfig = {
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    const proxyTarget = (process.env.NEXT_PUBLIC_PROXY ?? "").replace(
      /\/$/,
      "",
    );

    if (!proxyTarget) return [];

    return [
      {
        source: "/webapi/:path*",
        destination: `${proxyTarget}/webapi/:path*`,
      },
    ];
  },
};

export default nextConfig;
