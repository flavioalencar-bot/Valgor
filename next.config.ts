import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
  },
  async redirects() {
    return [
      {
        source: "/diagnostico-digital",
        destination: "/valgor-score",
        permanent: true,
      },
      {
        source: "/fox-score",
        destination: "/valgor-score",
        permanent: true,
      },
      {
        source: "/ancelar-score",
        destination: "/valgor-score",
        permanent: true,
      },
      {
        source: "/criacao-de-sites-fox-solution",
        destination: "/criacao-de-sites",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
