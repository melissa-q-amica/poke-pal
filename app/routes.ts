import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("/", "./routes/home.tsx"),
  route("/favorites", "./routes/favorites.tsx"),
  route("/pokemon/:name", "./routes/pokemonDetail.tsx"),
] satisfies RouteConfig;
