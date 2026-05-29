/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site to `out/` (no Node server shipped).
  output: "export",
  // Static export can't use the on-demand Image Optimization server.
  images: { unoptimized: true },
};

export default nextConfig;
