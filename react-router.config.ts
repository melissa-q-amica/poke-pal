/**
 * React Router top-level config
 *
 * This file controls how the React Router dev server behaves. Important
 * options for learners:
 * - ssr: when true the router will attempt server-side rendering. For a
 *   simpler single-page app experience you can set this to false (client-only).
 *
 * React Router's dev tooling reads this config during `react-router dev`.
 */
import type { Config } from "@react-router/dev/config";

export default {
  // Server-side render by default. Set to `false` to run as an SPA during dev.
  ssr: true,
} satisfies Config;
