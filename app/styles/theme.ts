export const theme = {
  colors: {
    bg: "#1a1a24",                // deep navy / off-black
    surface: "#242433",           // card backgrounds
    text: "#f2f2f7",              // near-white
    subtext: "#a6a6b2",           // muted text
    accent: "#b693fd",            // soft pastel purple
    accent2: "#8be9fd",           // pastel cyan
    accent3: "#ffb6c1",           // pastel pink
    border: "rgba(255,255,255,0.08)",
  },
  radius: "12px",
  spacing: (n: number) => `${n * 8}px`,
} as const;
