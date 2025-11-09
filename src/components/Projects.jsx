import React from "react";

function Projects() {
  return (
    <section className="w-full">
      {/* Page container */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Responsive layout: stack on mobile, side-by-side on md+ */}
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2 min-h-[60vh] py-10">
          {/* Text block */}
          <h1
            className="text-center md:text-left font-bold
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-md:order-2"
          >
            I&apos;m Working Secretly On My{" "}
            <span className="text-[#cc5ef7]">Projects</span>, And Will Be
            Available Shortly.
          </h1>

          {/* Image block */}
          <div className="flex justify-center max-md:order-1">
            <img
              src="imgs/stay-at-home.png"
              alt="Person working at home on a project"
              className="w-full max-w-[520px] h-auto object-contain
                         md:max-w-[580px] lg:max-w-[640px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
