/**
 * Small API helpers for the public PokeAPI (https://pokeapi.co)
 *
 * These functions are intentionally tiny — each performs a fetch and throws
 * a helpful error when the response is not ok. Keeping logic here small and
 * typed makes it easy to test and use with react-query's `useQuery`.
 */
const BASE = "https://pokeapi.co/api/v2";

export type PokemonListItem = { name: string; url: string };
export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

/**
 * Fetches a page of Pokémon from the API.
 *
 * - page: zero-based page index
 * - pageSize: number of items per page
 *
 * Returns a typed response which is convenient for useQuery in components.
 */
export async function getPokemonPage(page = 0, pageSize = 24): Promise<PokemonListResponse> {
  const offset = page * pageSize;
  const res = await fetch(`${BASE}/pokemon?limit=${pageSize}&offset=${offset}`);
  if (!res.ok) throw new Error("Failed to load Pokémon");
  return res.json();
}

/**
 * Fetches a single Pokémon by name. The API is case-insensitive for names,
 * so we lowercase the input to be safe. The response includes sprites, types,
 * stats and other useful info for the detail page.
 */
export async function getPokemon(name: string) {
  const res = await fetch(`${BASE}/pokemon/${name.toLowerCase()}`);
  if (!res.ok) throw new Error(`Pokémon not found: ${name}`);
  return res.json(); // includes sprites, types, stats
}
