import React, { useState } from "react";

// const [hover, setHover] = useState(false);
// const bColor = hover ? "#7d5692" : "#9b7eac";
function About() {
  return (
    <div>
      <div className="flex flex-row max-md:flex-col items-center justify-center mt-20 mb-40">
        <div className=" flex flex-col w-1/3 justify-center items-start max-md:order-2 max-md:w-full max-md:m-12 gap-2 max-md:items-center max-md:justify-start px-4">
          <h1 className="text-4xl max-md:text-3xl font-bold mb-5 flex items-center ">
            Know Who <span>I'M</span>
          </h1>

          <p className="text-xl max-md:text-lg mt-4 font-semibold">
            Hi Everyone, I am{" "}
            <span className="text-[#ce5ff8]">Sijan Shrestha</span> from{" "}
            <span className="text-[#ce5ff8]">Chitwan, Nepal.</span>
          </p>
          <p className="text-xl max-md:text-lg font-semibold">
            I am pursuing <span className=""> B.Sc. CSIT</span> at{" "}
            <span className="">Tribhuvan University.</span>
          </p>
          <p className="text-xl max-md:text-lg font-semibold mt-4 mb-4">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="text-xl max-md:text-lg font-semibold">
            <li>
              <i class="fi fi-dc-angle-double-small-right"></i>Playing Games
            </li>
            <li>
              <i class="fi fi-dc-angle-double-small-right"></i>Travelling
            </li>
            <li>
              <i class="fi fi-dc-angle-double-small-right"></i>Reading Books
            </li>
          </ul>
          <div className="flex mt-6 flex-col text-xl max-md:text-lg justify-center text-[#9b7eac]">
            <p>"Strive to build things that make a difference!"</p>
            <p className="flex justify-end">&mdash; Sijan</p>
          </div>
        </div>
        <div className="flex justify-center max-md:w-full h-auto w-1/2 max-md:order-1 max-md:mb-8">
          <img
            src="imgs/about.png"
            alt="About Image"
            className="mt-8 mb-4"
            style={{ maxHeight: "450px", objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center mt-20 mb-20">
        <div className="text-4xl max-md:text-3xl font-bold mb-12">
          Professional <span className="text-[#cc5ef7]">Skillset</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-9 justify-items-center">
          <i
            className="devicon-html5-plain duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>
          <i
            className="devicon-css3-plain font-5xl sm:font-6xl  duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>
          <i
            className="devicon-javascript-plain font-5xl sm:font-6xl  duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>

          <i
            className="devicon-react-original font-5xl sm:font-6xl  duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>
          <i
            className="devicon-redux-original font-5xl sm:font-6xl  duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>

          <i
            className="devicon-tailwindcss-original font-5xl sm:font-6xl  duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>
          <i
            className="devicon-nodejs-plain font-5xl sm:font-6xl  duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>

          <i
            class="devicon-c-original duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>
          <i
            className="devicon-cplusplus-plain duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>

          <i
            className="devicon-photoshop-plain duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
            style={{ fontSize: "64px" }}
          ></i>

          <div className="col-span-2 sm:col-span-3 md:col-span-5 flex justify-center">
            <i
              className="devicon-canva-original duration-300 p-6 border-2 rounded border-[#cc5ef7] hover:border-[#ad48d4] transition"
              style={{ fontSize: "64px" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-2 mt-10">
        <h1 className="text-4xl max-md:text-3xl font-bold">
          Days I <span className="text-[#cc5ef7]">Code</span>
        </h1>
        <img
          src="https://ghchart.rshah.org/ce5ff8/sijanbroo"
          alt="Github Contribution Chart"
          className="h-48 sm:h-64 md:h-80 lg:h-[400px] xl:h-[500px] 2xl:h-[600px] w-auto p-8 object-contain "
        />
      </div>
    </div>
  );
}

export default About;
