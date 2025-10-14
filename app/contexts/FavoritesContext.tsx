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

  // Optional: load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites");
      if (raw) setFavorites(JSON.parse(raw));
    } catch {/* ignore */}
  }, []);

  // Optional: persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {/* ignore */}
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

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
