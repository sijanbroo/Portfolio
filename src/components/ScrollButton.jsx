import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function ScrollButton() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Calculate how far user has scrolled (percentage)
      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;

      // Show up arrow when scrolled past 10%, down arrow otherwise
      if (scrollPercentage > 10) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }

      // Always keep button visible
      setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (scrollDirection === "up") {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll down one viewport height
      window.scrollTo({
        top: window.pageYOffset + window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#cc5ef7] text-white shadow-lg shadow-[#cc5ef7]/40 hover:bg-[#b74bdc] hover:shadow-xl hover:shadow-[#cc5ef7]/50 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#cc5ef7]/50 focus:ring-offset-2 focus:ring-offset-gray-900"
      aria-label={scrollDirection === "up" ? "Scroll to top" : "Scroll down"}
    >
      {scrollDirection === "up" ? (
        <FaArrowUp size={20} className="animate-bounce" />
      ) : (
        <FaArrowDown size={20} className="animate-bounce" />
      )}
    </button>
  );
}

export default ScrollButton;
