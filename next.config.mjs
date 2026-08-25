/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't leak "Next.js" via the x-powered-by response header in production.
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // Mirrors the old Vite dev-server proxy (`"/webapi": env.VITE_PROXY` in
  // Prodoo_reactjs/vite.config.js): requests to /webapi/* are made to the
  // app's own origin (e.g. http://localhost:3000/webapi/...) and forwarded
  // here to the real backend, so the browser never calls the backend
  // cross-origin directly.
  async rewrites() {
    const proxyTarget = (process.env.NEXT_PUBLIC_PROXY ?? "").replace(
      /\/$/,
      "",
    );

    // Only local dev sets NEXT_PUBLIC_PROXY (see .env.development) — there's
    // no separate local backend, so /webapi/* borrows stage's. On deployed
    // domains (stage/dev/prodoo.com) /webapi/* is same-origin and already
    // handled by that server's own reverse proxy, so no rewrite is added.
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
