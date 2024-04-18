import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    jsconfigPaths({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs", ".scss"],
    }),
    react({
      include: /\.(mdx|js|jsx|scss|json|svg)$/,
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    port: 5175,
  },
});
