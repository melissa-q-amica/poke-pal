/**
 * Theme tokens for styled-components
 *
 * This small theme object contains the design tokens used across the app.
 * Keeping tokens in one place makes it easy to iterate on visuals and teaches
 * the value of a single source of truth for colors/spacing.
 *
 * - colors: semantic color slots (bg/surface/text/etc). Prefer semantic names
 *   over raw hex usage in components.
 * - radius: shared border radius used for buttons/cards
 * - spacing: a tiny helper that turns unit values into pixel spacing. This
 *   reduces magic numbers like `padding: 8px` in favor of `spacing(1)`.
 */
export const theme = {
  colors: {
    bg: "#1a1a24", // deep navy / off-black used for app background
    surface: "#242433", // surface color for cards / panels
    text: "#f2f2f7", // primary text color (light)
    subtext: "#a6a6b2", // secondary/muted text
    accent: "#b693fd", // primary accent color
    accent2: "#8be9fd", // secondary accent
    accent3: "#ffb6c1", // tertiary accent
    border: "rgba(255,255,255,0.08)", // subtle border color
  },
  radius: "12px",
  // spacing helper: spacing(1) => 8px, spacing(2) => 16px, etc.
  spacing: (n: number) => `${n * 8}px`,
} as const;
