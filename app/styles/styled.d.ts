/**
 * Type augmentation for styled-components DefaultTheme
 *
 * This file tells TypeScript what shape our theme object has so that when you
 * access `theme` in a styled component (eg: ${({ theme }) => theme.colors.bg}),
 * TypeScript can provide autocompletion and catches misspelled token names.
 */
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

