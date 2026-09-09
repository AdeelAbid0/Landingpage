const nextConfig = {
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
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
