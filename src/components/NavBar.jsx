import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    if (navOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [navOpen]);
  return (
    <div className="">
      <div className="flex flex-row justify-between p-5 pt-8 pl-7 pr-7  border-b-2 border-gray-700 bg-[#1a1a1a]">
        <div className="text-[#ce5ff8] text-2xl font-bold">
          <Link to="/">SijanBro.</Link>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex flex-row text-base lg:text-lg justify-evenly gap-10 mr-4">
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <MdHome size={20} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <MdPerson size={20} />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <FaCode size={18} />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <MdDescription size={20} />
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <MdContactMail size={20} />
                Contact
              </NavLink>
            </li>
            <li className="px-5 py-2 flex items-center justify-center gap-2 bg-[#4d2d6ec4] hover:bg-[#41255cc4] rounded-lg transition">
              <NavLink
                to="https://www.github.com/sijanbroo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <FaGithub size={20} />
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="md:hidden"
          onClick={handleNavOpen}
          aria-label="Toggle navigation"
        >
          {navOpen ? (
            <MdClose className="text-[#ce5ff8] text-2xl scale-150 scro" />
          ) : (
            <CiMenuFries className="text-[#ce5ff8] text-2xl" />
          )}
        </div>
        {/* overlay: clicking/touching it closes the mobile nav */}
        {navOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setNavOpen(false)}
            aria-hidden
          />
        )}

        <div
          className={`fixed z-50 w-[250px] left-0 top-0 h-full border-r border-r-brown-200 p-6 pt-8  transition-transform duration-300 ease-in-out md:hidden ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col bg-[#1a1a1a] gap-12 items-center`}
        >
          <div className="text-[#ce5ff8] text-xl font-bold border-b-2 border-gray-700 pb-3 w-full flex justify-center">
            <Link to="/">SijanBro.</Link>
          </div>

          <ul className="flex flex-col text-sm justify-evenly gap-10 mr-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setNavOpen(false)}
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <MdHome size={18} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setNavOpen(false)}
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <MdPerson size={18} />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setNavOpen(false)}
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <FaCode size={16} />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                onClick={() => setNavOpen(false)}
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <MdDescription size={18} />
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setNavOpen(false)}
                className="flex items-center gap-2 hover:text-[#cc5ef7] transition"
              >
                <MdContactMail size={18} />
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.github.com/sijanbroo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button
                  onClick={() => setNavOpen(false)}
                  className="w-full px-6 py-3 flex items-center justify-center gap-2 bg-[#4d2d6ec4] hover:bg-[#41255cc4] rounded-md transition"
                >
                  <FaGithub size={16} />
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
