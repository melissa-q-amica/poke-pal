/**
 * React Query client configuration
 *
 * React Query (@tanstack/react-query) simplifies data fetching, caching, and
 * updating UI based on server state. The QueryClient holds configuration for
 * how queries should behave by default across the app.
 *
 * Key options used here:
 * - staleTime: how long (ms) fetched data is considered fresh. While fresh,
 *   React Query won't refetch automatically. This helps reduce network noise
 *   for small demo projects.
 * - refetchOnWindowFocus: disables automatic refetch when the window regains
 *   focus (useful for predictable dev behavior).
 * - retry: how many times to retry a failed request before showing an error.
 */
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // keep data fresh for 60s to avoid excessive refetches
      refetchOnWindowFocus: false, // helpful for learning/testing
      retry: 1, // retry once on failure before surfacing an error
    },
  },
});
