import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div className="animate-fadeIn">
      <div className="flex max-md:flex-col flex-row items-center justify-center mt-8 mb-40 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 justify-center items-start max-md:order-2 max-md:mt-8 gap-5 max-md:items-center max-md:text-center">
          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-semibold text-2xl sm:text-3xl text-gray-300 animate-slideDown">
              Hi There! <span className="inline-block animate-wave">👋</span>
            </h2>
          </div>
          <div className="w-full">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                I'M{" "}
                <span className="text-[#cc5ef7] bg-gradient-to-r from-[#cc5ef7] to-[#8b3fbd] bg-clip-text text-transparent">
                  SIJAN SHRESTHA
                </span>
              </h1>
            </div>
            <div className="h-16 sm:h-20">
              <ReactTyped
                className="text-[#cc5ef7] text-2xl sm:text-3xl font-semibold"
                strings={[
                  "Frontend Developer",
                  "Aspiring Full Stack Developer",
                  "Problem Solver",
                  "Freelancer",
                  "CyberSecurity Enthusiast",
                  "Networking Enthusiast",
                ]}
                typeSpeed={80}
                loop
                backSpeed={60}
                cursorChar="|"
                showCursor={true}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex flex-col self-center mt-12 max-md:order-1 max-md:mb-8">
            <img
              src="imgs/home-main.svg"
              alt="Main Home Image"
              className="mt-8 mb-4 w-full max-w-[28rem] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex max-md:flex-col flex-row justify-center items-center mt-10 gap-8">
        <div className="mr-8">
          <img
            src="imgs/avatar.svg"
            alt="Avatar Image"
            className="mt-8 mb-4"
            style={{ maxHeight: "450px", objectFit: "contain" }}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 max-md:w-auto max-md:m-5  w-1/2">
          <div className="flex justify-center  mb-6">
            <h1 className="text-4xl max-md:text-3xl font-medium">
              LET ME <span className="text-[#cc5ef7]">INTRODUCE</span> MYSELF
            </h1>
          </div>

          <div className="max-md:text-base text-lg flex flex-col gap-4 items-start justify-center leading-relaxed text-gray-300">
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p>
              My field of interests are building new{" "}
              <span className="text-[#cc5ef7] font-semibold">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="text-[#cc5ef7] font-semibold">
                Networking and CyberSecurity.
              </span>
            </p>
            <p>
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <span className="text-[#cc5ef7] font-semibold">
                Modern JavaScript Libraries
              </span>{" "}
              like{" "}
              <span className="text-[#cc5ef7] font-semibold">React.js.</span>
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl mb-3 font-bold">FIND ME ON</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Feel free to{" "}
            <span className="text-[#cc5ef7] font-semibold">connect</span> with
            me
          </p>
          <div className="flex flex-row gap-4 sm:gap-6">
            <a
              href="https://linkedin.com/in/sijanbro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-white/10 hover:border-[#cc5ef7] transition-all hover:scale-110 hover:bg-[#cc5ef7]/10 focus:outline-none focus:ring-2 focus:ring-[#cc5ef7]/50"
              aria-label="LinkedIn"
            >
              <i className="fi fi-brands-linkedin text-[28px] md:text-[32px] leading-none"></i>
            </a>
            <a
              href="https://github.com/sijanbroo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-white/10 hover:border-[#cc5ef7] transition-all hover:scale-110 hover:bg-[#cc5ef7]/10 focus:outline-none focus:ring-2 focus:ring-[#cc5ef7]/50"
              aria-label="GitHub"
            >
              <i className="fi fi-brands-github text-[28px] md:text-[32px] leading-none"></i>
            </a>
            <a
              href="https://www.instagram.com/sijanbroo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-white/10 hover:border-[#cc5ef7] transition-all hover:scale-110 hover:bg-[#cc5ef7]/10 focus:outline-none focus:ring-2 focus:ring-[#cc5ef7]/50"
              aria-label="Instagram"
            >
              <i className="fi fi-brands-instagram text-[28px] md:text-[32px] leading-none"></i>
            </a>
            <a
              href="https://x.com/sijanshres746"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-white/10 hover:border-[#cc5ef7] transition-all hover:scale-110 hover:bg-[#cc5ef7]/10 focus:outline-none focus:ring-2 focus:ring-[#cc5ef7]/50"
              aria-label="Twitter / X"
            >
              <i className="fi fi-brands-twitter-alt text-[28px] md:text-[32px] leading-none"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
