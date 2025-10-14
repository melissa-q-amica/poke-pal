const BASE = "https://pokeapi.co/api/v2";

export type PokemonListItem = { name: string; url: string };
export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export async function getPokemonPage(page = 0, pageSize = 24): Promise<PokemonListResponse> {
  const offset = page * pageSize;
  const res = await fetch(`${BASE}/pokemon?limit=${pageSize}&offset=${offset}`);
  if (!res.ok) throw new Error("Failed to load Pokémon");
  return res.json();
}

export async function getPokemon(name: string) {
  const res = await fetch(`${BASE}/pokemon/${name.toLowerCase()}`);
  if (!res.ok) throw new Error(`Pokémon not found: ${name}`);
  return res.json(); // includes sprites, types, stats
}
