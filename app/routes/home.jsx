import { getAllMDXPosts } from "../utils/mdx";
import { useLoaderData, Link } from "react-router";

export async function loader() {
  const posts = await getAllMDXPosts();
  return { posts };
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
  const { posts } = useLoaderData();

  return (
    <div className="flex justify-center p-8 lg:p-16">
      <div className="max-w-md space-y-6">
        <div className="mb-10 m-auto w-56 h-60 bg-white p-3 shadow-lg shadow-stone-400 transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="w-full h-48 bg-[url(/me.jpeg)] bg-cover bg-center"></div>
        </div>
        <h1>Fede Ratier</h1>
        <p className="text-lg text-stone-600 leading-relaxed">
          Jumping between engineering manager, tech lead and product lead doing
          sound engineering by night.
        </p>
        <div className="flex space-x-4">
          <Link
            className="underline text-stone-700 py-2"
            to="https://www.linkedin.com/in/federatier/"
          >
            LinkedIn
          </Link>
          <Link
            className="underline text-stone-700 py-2"
            to="https://github.com/fede"
          >
            Github
          </Link>
        </div>
        <p className="text-lg text-stone-600 leading-relaxed">
          Want to contact me?{" "}
          <a href="mailto:hello@federatier.com" className="hover:underline">
            hello@federatier.com
          </a>
        </p>

        <h2 className="text-sm uppercase font-bold text-stone-600 pt-4">
          Notes
        </h2>
        {posts && posts.length > 0 && (
          <div className="space-y-2 text-stone-600 grid gap-2">
            {posts.map((post) => (
              <div className="" key={post.slug}>
                <Link to={`/notes/${post.slug}`}>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                </Link>

                {post.updated && (
                  <p className="text-stone-600 text-xs">
                    Last update: {post.updated} | {post.tag}
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
