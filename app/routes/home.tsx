import { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getPokemonPage, type PokemonListItem, type PokemonListResponse } from "lib/pokeapi";
import { Card, Button } from "components/ui";
import { useFavorites } from "app/contexts/FavoritesContext";

const Grid = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Nav = styled.nav`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Controls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  /* align with the inner content of Card which uses theme.spacing(2) padding */
  padding-left: ${({ theme }) => theme.spacing(0)};
`;

const Fetching = styled.span`
  margin-left: ${({ theme }) => theme.spacing(1)};
`;

export default function Home() {
  const [page, setPage] = useState(0);
  // useQuery manages fetching, caching and background updates for us.
  // - queryKey identifies the data uniquely (here: page number)
  // - queryFn performs the actual fetch (see app/lib/pokeapi.ts)
  const { data, isFetching, isError, error } = useQuery<PokemonListResponse>({
    queryKey: ["pokemon", page],
    queryFn: () => getPokemonPage(page),
    // keepPreviousData (placeholderData) prevents UI flicker while the next
    // page is loading by retaining the previous page data until the new
    // results arrive. This is helpful for pagination UX.
    placeholderData: keepPreviousData,
    staleTime: 60_000,
  });
  const { has, toggle } = useFavorites();

  if (isError) {
    return (
      <Main>
        <h1>PokéPal</h1>
        <p>Oh no! Couldn’t load Pokémon. {(error as Error)?.message}</p>
      </Main>
    );
  }

  return (
    <Main>
      <h1>PokéPal</h1>
      <p>Welcome! Browse and favorite cute Pokémon ✨</p>
      <Nav>
        <Link to="/favorites">Favorites</Link>
      </Nav>

      <Grid>
        {data?.results?.map((p) => {
          const fav = has(p.name);
          return (
            <Card key={p.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
              <button onClick={() => toggle(p.name)} aria-pressed={fav} aria-label={fav ? "Remove from favorites" : "Add to favorites"}>
                {fav ? "💖" : "♡"}
              </button>
            </Card>
          );
        })}
      </Grid>

      <Controls>
        <Button disabled={page === 0 || isFetching} onClick={() => setPage((p) => p - 1)}>Prev</Button>
        <Button disabled={!data?.next || isFetching} onClick={() => setPage((p) => p + 1)}>Next</Button>
        {isFetching && <Fetching>Jigglypuff is fetching data…</Fetching>}
      </Controls>
    </Main>
  );
}
