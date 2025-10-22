/**
 * Vite configuration
 *
 * This file configures the Vite dev server and build. Key learning points
 * for new React developers:
 * - `plugins`: Vite plugins extend behavior; here we use the React Router dev
 *   plugin which integrates SSR-capable route loading during development.
 * - `resolve.alias`: short aliases make imports cleaner (eg `import foo from 'lib/foo'`).
 * - `ssr.noExternal`: instructs Vite not to externalize certain packages during SSR
 *   (useful for packages that ship ESM or require processing, such as styled-components).
 * - `server.headers`: development-only headers to control caching (helps reduce
 *   stale-caching issues in some browsers while learning).
 */
import { defineConfig } from "vite";
import path from "path";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: {
      // Short path aliases for easier importing inside the app
      app: path.resolve(__dirname, "app"),
      styles: path.resolve(__dirname, "app/styles"),
      components: path.resolve(__dirname, "app/components"),
      lib: path.resolve(__dirname, "app/lib"),
      contexts: path.resolve(__dirname, "app/contexts"),
    },
  },
  // Avoid externalizing styled-components during SSR so it can be processed by Vite
  ssr: { noExternal: ["styled-components"] },
  server: {
    headers: {
      // Development headers to reduce caching issues while learning.
      "cache-control": "no-store, max-age=0, must-revalidate",
      "pragma": "no-cache",
      "expires": "0",
    },
  },
});
