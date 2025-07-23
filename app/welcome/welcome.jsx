import { Link } from "react-router";

export function Welcome() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center p-8 lg:p-16 bg-[#55a37e]">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-100 leading-tight">
            Fede Ratier
          </h1>
          <p className="text-lg text-emerald-100 leading-relaxed">
            Jumping between engineering manager, tech lead and product lead
            doing sound engineering by night.
          </p>
          <div className="space-y-4">
            <Link asChild to="https://www.linkedin.com/in/federatier/">
              <button className="w-full cursor-pointer my-2 bg-emerald-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                Check my LinkedIn
              </button>
            </Link>
            <Link asChild to="/Federico_Ratier-CV.pdf">
              <button className="w-full my-2 cursor-pointer border border-emerald-200 text-emerald-100 px-8 py-3 rounded-lg font-medium hover:bg-emerald-200 hover:text-emerald-800 transition-colors">
                My CV
              </button>
            </Link>
          </div>
          <p className="text-lg text-emerald-100 leading-relaxed">
            Want to contact me?{" "}
            <a
              href="mailto:hello@federatier.com"
              className="text-emerald-200 hover:underline"
            >
              hello[at]federatier[dot]com
            </a>
          </p>
        </div>
      </div>

      <div className="relative min-h-[400px] lg:min-h-screen">
        <img
          src="/summer.png"
          alt="Summer"
          fill
          className="object-cover min-h-screen"
          priority
        />
      </div>
    </div>
  );
}
