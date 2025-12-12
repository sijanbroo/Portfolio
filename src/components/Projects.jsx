import React from "react";

const projects = [
  {
    title: "Blog Site",
    repo: "https://github.com/sijanbroo/Blog-Site",
    description:
      "A modern blog platform with clean layouts, post browsing, and a focus on readable typography.",
    tech: ["React", "Responsive UI", "Routing"],
    tag: "Web App",

    alt: "Blog site layout preview",
  },
  {
    title: "AI Resume Analyzer",
    repo: "https://github.com/sijanbroo/ai-resume-analyzer",
    description:
      "Analyzes resumes with AI to surface key skills and gaps, making review faster and consistent.",
    tech: ["AI", "Parsing", "Scoring"],
    tag: "AI Tool",

    alt: "AI resume analyzer dashboard",
  },
  {
    title: "MovieSite",
    repo: "https://github.com/sijanbroo/MovieSite",
    description:
      "Movie discovery experience with curated listings, details, and a responsive, media-rich layout.",
    tech: ["React", "API", "UI"],
    tag: "Entertainment",

    alt: "Movie discovery interface",
  },
  {
    title: "Currency Converter",
    repo: "https://github.com/sijanbroo/Currency-Converter",
    description:
      "Lightweight currency converter with up-to-date rates and quick conversions on any device.",
    tech: ["Rates", "Utilities", "Responsive"],
    tag: "Utility",

    alt: "Currency converter UI",
  },
  {
    title: "Password Generator",
    repo: "https://github.com/sijanbroo/Password-Generator",
    description:
      "Generates strong, customizable passwords with an easy UI to pick length and character sets.",
    tech: ["Security", "Utilities", "UI"],
    tag: "Tool",

    alt: "Password generator settings screen",
  },
  {
    title: "Sijan Kitchen",
    repo: "https://github.com/sijanbroo/sijan-kitchen-project",
    description:
      "A food experience site highlighting dishes, imagery, and a welcoming brand-forward presentation.",
    tech: ["React", "Styled UI", "Responsive"],
    tag: "Landing",

    alt: "Sijan Kitchen landing page",
  },
];

function Projects() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0f0f10] via-[#0d0d12] to-[#0b0b10] py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cc5ef7]">
            Featured work
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Projects that blend polish and practicality
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl">
            A selection of recent builds—from productized tools to delightful
            UIs. Each card links to the source so you can dig into the details.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm p-6 flex flex-col gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-2 hover:border-[#cc5ef7]/60"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1e1b2e] via-[#1a1a1f] to-[#0f0f14] border border-white/5 aspect-[16/9]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.alt || project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-sm text-gray-400">
                    Preview coming soon
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full bg-[#cc5ef7]/15 text-[#e9b8ff] border border-[#cc5ef7]/30">
                  {project.tag}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_0_4px_rgba(52,211,153,0.15)]" />
                  <span>In the wild</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-white group-hover:text-[#cc5ef7] transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-lg bg-[#cc5ef7] hover:bg-[#b74bdc] transition-colors shadow-lg shadow-[#cc5ef7]/30"
                >
                  <span>View Code</span>
                  <i
                    className="fi fi-rr-arrow-small-right text-base"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-[#cc5ef7]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
