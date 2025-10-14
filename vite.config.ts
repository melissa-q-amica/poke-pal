import { defineConfig } from "vite";
import path from "path";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, "app"),
      styles: path.resolve(__dirname, "app/styles"),
      components: path.resolve(__dirname, "app/components"),
      lib: path.resolve(__dirname, "app/lib"),
      contexts: path.resolve(__dirname, "app/contexts"),
    },
  },
  ssr: { noExternal: ["styled-components"] },
  server: {
    headers: {
      "cache-control": "no-store, max-age=0, must-revalidate",
      "pragma": "no-cache",
      "expires": "0",
    },
  },
});
