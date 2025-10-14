export const theme = {
  colors: {
    bg: "#fffafc",
    text: "#2a2a2a",
    card: "#ffeef7",
    accent: "#ff9ecb",
    accentDark: "#ff77b6",
  },
  radius: "16px",
  spacing: (n: number) => `${n * 8}px`,
} as const;
