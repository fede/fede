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
    <div>
      <div className="min-h-screen flex">
        <div className="flex items-center justify-center p-8 lg:p-16 flex-grow">
          <div className="max-w-md space-y-6">
            <h1>Fede Ratier</h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Jumping between engineering manager, tech lead and product lead
              doing sound engineering by night.
            </p>
            <div className="flex space-x-4">
              <Link
                className="bg-stone-700 text-stone-100 px-4 py-2"
                to="https://www.linkedin.com/in/federatier/"
              >
                LinkedIn
              </Link>
              <Link
                className="bg-stone-700 text-stone-100 px-4 py-2"
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

            <h2 className="text-sm uppercase font-bold text-stone-600 pt-4 mb-2">
              Notes
            </h2>
            {posts && posts.length > 0 && (
              <div className="space-y-2 text-stone-600">
                {posts.map((post) => (
                  <div key={post.slug}>
                    <Link to={`/notes/${post.slug}`}>
                      <h3 className="text-xl font-semibold">{post.title}</h3>
                    </Link>
                    {post.date && (
                      <p className="text-stone-600 text-xs">
                        Last update: {post.date}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-screen">
          <img
            src="/me.jpeg"
            alt="Summer"
            fill
            className="object-cover min-h-screen"
            priority
          />
        </div>
      </div>
    </div>
  );
}
