import { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getPokemonPage, type PokemonListItem, type PokemonListResponse } from "lib/pokeapi";
import { Card, Button } from "components/ui";

const Grid = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  padding: ${({ theme }) => theme.spacing(2)};
`;

export default function Home() {
  const [page, setPage] = useState(0);

  const { data, isFetching, isError, error } = useQuery<PokemonListResponse>({
    queryKey: ["pokemon", page],
    queryFn: () => getPokemonPage(page),
    // v5 way to keep previous page visible while the next loads:
    placeholderData: keepPreviousData,
    staleTime: 60_000,
  });

  if (isError) {
    return (
      <main style={{ padding: 16 }}>
        <h1>PokéPal</h1>
        <p>Oh no! Couldn’t load Pokémon. {(error as Error)?.message}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>PokéPal</h1>
      <p>Welcome! Browse and favorite cute Pokémon ✨</p>
      <nav><Link to="/favorites">Favorites</Link></nav>

      <Grid>
        {data?.results?.map((p: PokemonListItem) => (
          <Card key={p.name}>
            <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
          </Card>
        ))}
      </Grid>

      <div style={{ display: "flex", gap: 8, padding: 16 }}>
        <Button
          aria-label="Previous page"
          disabled={page === 0 || isFetching}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </Button>
        <Button
          aria-label="Next page"
          disabled={!data?.next || isFetching}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
        {isFetching && <span style={{ marginLeft: 8 }}>Jigglypuff is fetching data…</span>}
      </div>
    </main>
  );
}
