/**
 * App root
 *
 * This file is the HTML shell for the app when using a server-rendering/SSR-capable
 * dev server (React Router dev). It composes the top-level providers that most
 * React apps need during development and learning:
 *
 * - QueryClientProvider: provides @tanstack/react-query functionality for data
 *   fetching, caching and background updates.
 * - ThemeProvider: supplies a theme object to styled-components so components
 *   can access design tokens like colors, spacing and radius via `theme`.
 * - FavoritesProvider: a small example of a React Context for shared state
 *   (persisted to localStorage in this project). This demonstrates global state
 *   without a heavy library.
 * - Outlet: where the current route (page) component is rendered by React Router.
 *
 * For learners: think of this file as the app "frame". Routes are rendered into
 * the <Outlet/>; everything higher up (theme, global styles, query client)
 * becomes available to those route components.
 */

import { Outlet, Scripts, ScrollRestoration } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "lib/query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { FavoritesProvider } from "app/contexts/FavoritesContext";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <title>PokéPal</title>
      </head>
      <body>
        {/*
          Providers wrap the rendered app so any nested component can use them.
          Order matters slightly: ThemeProvider only needs to wrap where styled
          components are used; QueryClientProvider needs to wrap where
          useQuery/useMutation will be called. Keeping them together here is a
          simple, clear pattern for learners.
        */}
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            {/* Global CSS (resets, theme-aware body styles) */}
            <GlobalStyle />
            {/* App-level context for favorites persisted to localStorage */}
            <FavoritesProvider>
              {/* React Router renders the active route component here */}
              <Outlet />
            </FavoritesProvider>
          </ThemeProvider>
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
