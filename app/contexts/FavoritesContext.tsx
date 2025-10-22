/**
 * FavoritesContext
 *
 * A compact example of global app state using React Context. This pattern is
 * useful for small pieces of state (like a favorites list) without pulling in
 * a full state-management library.
 *
 * Notes for learners:
 * - The provider persists favorites to localStorage so the list survives page
 *   reloads. Persistence code is intentionally simple and wrapped in try/catch
 *   to avoid breaking in environments without localStorage.
 * - `useFavorites` is a convenience hook that ensures consumers are inside the
 *   provider and exposes a small CRUD-ish API for favorites.
 */
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import type { ReactNode } from "react";

type FavoritesApi = {
  favorites: string[];
  add: (name: string) => void;
  remove: (name: string) => void;
  toggle: (name: string) => void;
  has: (name: string) => boolean;
};

const FavoritesContext = createContext<FavoritesApi | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load persisted favorites once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites");
      if (raw) setFavorites(JSON.parse(raw));
    } catch (e) {
      // If localStorage is unavailable (eg. privacy mode), just ignore
    }
  }, []);

  // Persist favorites when they change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (e) {
      // ignore persistence errors in constrained environments
    }
  }, [favorites]);

  const api: FavoritesApi = useMemo(() => {
    const add = (name: string) =>
      setFavorites(xs => (xs.includes(name) ? xs : [...xs, name]));
    const remove = (name: string) =>
      setFavorites(xs => xs.filter(x => x !== name));
    const toggle = (name: string) =>
      setFavorites(xs => (xs.includes(name) ? xs.filter(x => x !== name) : [...xs, name]));
    const has = (name: string) => favorites.includes(name);
    return { favorites, add, remove, toggle, has };
  }, [favorites]);

  return <FavoritesContext.Provider value={api}>{children}</FavoritesContext.Provider>;
}

/**
 * Convenience hook for consuming the favorites context.
 * Throws an error if used outside of the provider so learners get a clear
 * failure when they forget to wrap the component tree.
 */
export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
