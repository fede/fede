import { useLoaderData, Link } from "react-router";
import { getMDXNote } from "../../utils/mdx";

export async function loader({ params }) {
  const { slug } = params;

  if (!slug) {
    throw new Response("Note not found", { status: 404 });
  }

  const note = await getMDXNote(slug);

  if (!note) {
    throw new Response("Note not found", { status: 404 });
  }

  return { note };
}

export default function NoteSlug() {
  const { note } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <meta name="description" content={note.description} />
      <title>{`${note.title} - Fede Ratier`}</title>
      <div className="flex justify-between font-sans items-center text-xs">
        <Link
          className="border rounded-md p-2 border-stone-600 dark:border-stone-300"
          to="/"
        >
          &lt; Back home
        </Link>
        <time>
          Last update:{" "}
          {new Date(note.updated).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <article className="prose prose-lg mx-auto mt-8">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{
            __html: note.compiledSource || note.content,
          }}
        />
      </article>
    </div>
  );
}
