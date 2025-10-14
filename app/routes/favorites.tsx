import { Link } from "react-router";
import styled from "styled-components";
import { useFavorites } from "app/contexts/FavoritesContext";

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <main style={{ padding: 16 }}>
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Go add some 💖</p>
      ) : (
        <List>
          {favorites.map((name) => (
            <li key={name}>
              <Link to={`/pokemon/${name}`}>{name}</Link>
            </li>
          ))}
        </List>
      )}
      <p style={{ marginTop: 16 }}><Link to="/">← Back to list</Link></p>
    </main>
  );
}
