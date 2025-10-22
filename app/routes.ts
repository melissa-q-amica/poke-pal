/**
 * Route configuration for React Router (dev)
 *
 * This array maps URL paths to the files that implement those routes. When the
 * app runs, React Router resolves the incoming URL and dynamically imports the
 * matching file (code-splitting each route automatically in dev/production).
 *
 * For learners: paths with `:` denote route params (eg `/pokemon/:name`) and
 * become available to the page via `useParams()`.
 */
import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  // Home listing page
  route("/", "./routes/home.tsx"),
  // Favorites page (user favorites persisted to localStorage)
  route("/favorites", "./routes/favorites.tsx"),
  // Dynamic detail page for a Pokémon (useParams to read :name)
  route("/pokemon/:name", "./routes/pokemonDetail.tsx"),
] satisfies RouteConfig;
