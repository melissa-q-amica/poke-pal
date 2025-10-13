import { useParams, Link } from "react-router";

export default function PokemonDetail() {
  const { name = "" } = useParams();
  return (
    <main>
      <Link to="/">← Back</Link>
      <h2>Details for {name}</h2>
    </main>
  );
}
