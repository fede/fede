import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("cv", "routes/cv.jsx"),
  route("notes/:slug", "routes/notes/$slug.jsx"),
];
