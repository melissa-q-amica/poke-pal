// app/routes/home.tsx
import styled from "styled-components";
import { Link } from "react-router";
import { Card, Button } from "components/ui"; // ← alias path

const Grid = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  padding: ${({ theme }) => theme.spacing(2)};
`;

export default function Home() {
  return (
    <main>
      <h1>PokéPal</h1>
      <p>Welcome! Browse and favorite cute Pokémon ✨</p>
      <nav><Link to="/favorites">Favorites</Link></nav>

      <Grid>
        <Card>example card</Card>
      </Grid>

      <div style={{ display: "flex", gap: 8, padding: 16 }}>
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </main>
  );
}
