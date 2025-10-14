import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      card: string;
      accent: string;
      accentDark: string;
    };
    radius: string;
    spacing: (n: number) => string;
  }
}
