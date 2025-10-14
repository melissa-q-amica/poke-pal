import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Avenir', 'Helvetica', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.colors.accent2};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent3};
  }

  button {
    font-family: inherit;
    border-radius: ${({ theme }) => theme.radius};
    cursor: pointer;
  }
`;
