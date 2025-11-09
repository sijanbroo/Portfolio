import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div>
      <div className="flex max-md:flex-col flex-row items-center justify-center mt-2 mb-40">
        <div className="flex flex-col w-1/3 justify-center items-start max-md:order-2 max-md:w-full max-md:m-12 max-md:mt-12 gap-4 max-md:items-center">
          <div className="flex flex-row justify-center mb-2 max-md:flex-col max-md:items-center gap-4">
            <h2 className="font-semibold text-2xl flex max-md:justify-start">
              Hi There! ✋
            </h2>
          </div>
          <div className="">
            <div className="font-bold mb-5">
              <h1 className="text-4xl font-bold">
                I'M <span className="text-[#cc5ef7]">SIJAN SHRESTHA</span>
              </h1>
            </div>
            <div className="">
              {""}
              <ReactTyped
                className="text-[#cc5ef7] text-2xl font-semibold"
                strings={[
                  "Web Developer",
                  "Freelancer",
                  "CyberSecurity Enthusiast",
                ]}
                typeSpeed={100}
                loop
                backspeed={100}
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

      <div className="flex max-md:flex-col flex-row justify-center items-center mt-15 gap-8">
        <div className="mr-8">
          <img
            src="imgs/avatar.svg"
            alt="Avatar Image"
            className="mt-8 mb-4"
            style={{ maxHeight: "450px", objectFit: "contain" }}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 max-md:w-full max-md:ml-3  w-1/2">
          <div className="flex justify-center  mb-6">
            <h1 className="text-4xl max-md:text-3xl font-medium">
              LET ME <span className="text-[#cc5ef7]">INTRODUCE</span> MYSELF
            </h1>
          </div>

          <div className="max-md:text-base text-lg flex-col max-md:items-center max-md:justify-center gap-4 items-start justify-center">
            <p className="">
              I fell in love with programming and I have at-least learnt
              something, I think… 🤷‍♂️
            </p>
            <p className="">
              My field of Interest's are building new{" "}
              <span className="text-[#cc5ef7]">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="text-[#cc5ef7]">
                Networking and CyberSecurity.
              </span>
            </p>
            <p className="">
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <span className="text-[#cc5ef7]">Modern Javascript Library</span>{" "}
              like
              <span className="text-[#cc5ef7]"> React.js.</span>
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="flex flex-col justify-center items-center mt-20 mb-20">
          <h1 className="text-4xl max-md:text-3xl mb-2 font-medium">
            FIND ME ON
          </h1>
          <p className="text-lg max-md:text-base mb-2">
            Feel free to <span className="text-[#cc5ef7]">connect</span> with me
          </p>
          <div className="flex flex-row gap-6">
            <Link to="https://linkedin.com/in/sijanbro/">
              <i className="fi fi-brands-linkedin text-[28px] md:text-[36px] leading-none"></i>
            </Link>
            <Link to="https://github.com/sijanbroo">
              <i className="fi fi-brands-github text-[28px] md:text-[36px] leading-none"></i>
            </Link>
            <Link to="https://www.instagram.com/sijanbroo/">
              <i className="fi fi-brands-instagram text-[28px] md:text-[36px] leading-none"></i>
            </Link>
            <Link to="https://x.com/sijanshres746">
              <i className="fi fi-brands-twitter-alt text-[28px] md:text-[36px] leading-none"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
