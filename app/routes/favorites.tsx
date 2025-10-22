import { Link } from "react-router";
import styled from "styled-components";
import { useFavorites } from "app/contexts/FavoritesContext";

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <Main>
      <h1>My Favorites</h1>
      {/*
        Conditional rendering pattern: show an empty state when there are no
        favorites (a friendly UX touch), otherwise map over favorites to render
        links to the detail page.
      */}
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
    </Main>
  );
}
