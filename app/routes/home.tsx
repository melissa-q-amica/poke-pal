import { Link } from "react-router";

export default function Home() {
  return (
    <main>
      <h1>PokéPal</h1>
      <p>Welcome! Browse and favorite cute Pokémon ✨</p>
      <nav><Link to="/favorites">Favorites</Link></nav>
    </main>
  );
}
