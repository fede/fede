import { getAllMDXNotes } from "../utils/mdx";
import { useLoaderData, Link } from "react-router";

export async function loader() {
  const notes = await getAllMDXNotes();
  return { notes };
}

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
  const { notes } = useLoaderData();

  return (
    <div className="flex justify-center p-8">
      <div className="max-w-md space-y-6">
        <div className="mb-10 m-auto w-72 h-96 bg-white p-3 shadow-lg shadow-stone-400 dark:shadow-stone-800 transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="w-full h-78 bg-[url(/me.jpeg)] bg-cover bg-center"></div>
        </div>
        <h1>Fede Ratier</h1>
        <p className="text-lg leading-relaxed">
          Jumping between engineering manager, tech lead and product lead doing
          sound engineering by night.
        </p>
        <div className="flex space-x-4">
          <Link
            className="underline py-2"
            to="https://www.linkedin.com/in/federatier/"
          >
            LinkedIn
          </Link>
          <Link className="underline py-2" to="https://github.com/fede">
            Github
          </Link>
        </div>
        <p className="text-lg leading-relaxed">
          Want to contact me?{" "}
          <a href="mailto:hello@federatier.com" className="hover:underline">
            hello@federatier.com
          </a>
        </p>

        <h2 className="text-sm uppercase font-bold pt-4">Notes</h2>
        {notes && notes.length > 0 && (
          <div className="space-y-2 grid gap-2">
            {notes.map((note) => (
              <div className="" key={note.slug}>
                <Link to={`/note/${note.slug}`}>
                  <h3 className="text-xl font-semibold">{note.title}</h3>
                </Link>

                {note.updated && (
                  <p className="text-xs">
                    Last update: {note.updated} | {note.tag}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
