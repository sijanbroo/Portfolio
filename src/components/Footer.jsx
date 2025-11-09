import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between py-4 sm:py-5">
          <p className="text-center sm:text-left text-sm sm:text-base">
            Designed and Developed by
            <span className="text-[#cc5ef7]"> Sijan Shrestha</span>
          </p>

          <nav className="order-2 sm:order-none flex justify-center sm:justify-end gap-3 sm:gap-4">
            <a
              href="https://linkedin.com/in/sijanbro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:scale-110 transition transform focus:outline-none focus:ring focus:ring-[#cc5ef7]/40"
            >
              <i
                className="fi fi-brands-linkedin text-[22px] sm:text-[24px] leading-none"
                style={{ color: "#0965c1" }}
              />
            </a>

            <a
              href="https://github.com/sijanbroo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:scale-110 transition transform focus:outline-none focus:ring focus:ring-[#cc5ef7]/40"
            >
              <i
                className="fi fi-brands-github text-[22px] sm:text-[24px] leading-none"
                style={{ color: "#ffffff" }}
              />
            </a>

            <a
              href="https://www.instagram.com/sijanbroo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:scale-110 transition transform focus:outline-none focus:ring focus:ring-[#cc5ef7]/40"
            >
              <i
                className="fi fi-brands-instagram text-[22px] sm:text-[24px] leading-none"
                style={{ color: "#e503d8" }}
              />
            </a>

            <a
              href="https://x.com/sijanshres746"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:scale-110 transition transform focus:outline-none focus:ring focus:ring-[#cc5ef7]/40"
            >
              <i
                className="fi fi-brands-twitter-alt text-[22px] sm:text-[24px] leading-none"
                style={{ color: "#000000" }}
              />
            </a>
          </nav>

          <p className="order-3 text-center text-xs sm:text-sm">
            &copy; {year} <span className="text-[#cc5ef7]">Sb.</span> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
