import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      src: "/src",
      imagenes: "/src/imagenes",
      components: "/src/components",
      pages: "/src/pages",
      context: "/src/context",
      images: "/src/images",
    },
  },
});
