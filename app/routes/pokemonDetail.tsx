import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getPokemon } from "lib/pokeapi";

const Wrap = styled.main` padding: ${({ theme }) => theme.spacing(2)}; `;
const Img = styled.img`
  width: 200px; height: 200px; image-rendering: pixelated;
  display: block; margin: ${({ theme }) => theme.spacing(2)} 0;
`;

export default function PokemonDetail() {
  const { name = "" } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
  });

  if (isLoading) return <Wrap>Loading…</Wrap>;
  if (isError || !data) return <Wrap>Couldn’t load {name}. {(error as Error)?.message}</Wrap>;

  const types = data.types?.map((t: any) => t.type.name).join(", ") ?? "unknown";

  return (
    <Wrap>
      <Link to="..">← Back</Link>
      <h2 style={{ textTransform: "capitalize" }}>{data.name}</h2>
      <Img alt={data.name} src={data.sprites?.front_default ?? ""} />
      <p>Types: {types}</p>
    </Wrap>
  );
}
