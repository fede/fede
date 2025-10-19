import { useLoaderData } from "react-router";
import { getMDXPost } from "../../utils/mdx";
import { Link } from "react-router";

export async function loader({ params }) {
  const { slug } = params;

  if (!slug) {
    throw new Response("Post not found", { status: 404 });
  }

  const post = await getMDXPost(slug);

  if (!post) {
    throw new Response("Post not found", { status: 404 });
  }

  return { post };
}

export default function NoteSlug() {
  const { post } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between font-sans items-center text-xs text-stone-600">
        <Link className="border rounded-md p-2 border-stone-600" to="/">
          &lt; Back home
        </Link>
        <time>
          Last update:{" "}
          {new Date(post.updated).toLocaleDateString("en-US", {
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
            __html: post.compiledSource || post.content,
          }}
        />
      </article>
    </div>
  );
}
