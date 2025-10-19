import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("cv", "routes/cv.jsx"),
  route("note/:slug", "routes/note/$slug.jsx"),
];
