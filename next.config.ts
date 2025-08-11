import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // 🔥 Ativa modo de exportação estática
  trailingSlash: true,
  // images: {
  //   unoptimized: true, // Desativa a otimização de imagens
  // },
};

export default nextConfig;
