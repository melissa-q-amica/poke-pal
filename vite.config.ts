import { defineConfig } from "vite";
import path from "path";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "app/styles"),
      components: path.resolve(__dirname, "app/components"),
      lib: path.resolve(__dirname, "app/lib"),
    },
  },
  ssr: { noExternal: ["styled-components"] },
});
