import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      surface: string;
      text: string;
      subtext: string;
      accent: string;
      accent2: string;
      accent3: string;
      border: string;
    };
    radius: string;
    spacing: (n: number) => string;
  }
}

