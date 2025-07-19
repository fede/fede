import { Welcome } from "../welcome/welcome";

export const meta = () => {
  return [
    { title: "Fede Ratier" },
    {
      name: "description",
      content:
        "Federico Ratier - Engineering Manager, Tech Lead, Product Lead, and Sound Engineer",
    },
  ];
};

export default function Home() {
  return <Welcome />;
}
