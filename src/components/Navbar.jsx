import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, handleThemeChange, setTheme, color, setColor } =
    useContext(ThemeContext);
  const [scroll, setScroll] = useState(0);

  console.log(theme);
  return (
    <nav
      className={`flex fixed top-0 shadow-sm shadow-gray-400 left-0 w-full py-7 items-center text-lg px-16 justify-between ${theme?.background} `}
    >
      <span className="font-bold hover:text-red-400 text-2xl">Kaif.dev</span>
      <ul className="flex">
        <Link to="home" smooth={true} duration={500}>
          <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
            Home
          </span>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
            About
          </span>
        </Link>

        <Link to="project" smooth={true} duration={500}>
          <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
            Projects
          </span>
        </Link>

        <Link to="contact" smooth={true} duration={500}>
          <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
            Contact
          </span>
        </Link>

        <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
          <button
            onClick={() => {
              handleThemeChange(color);
            }}
          >
            {color === "day" ? "Night" : "Day"}
          </button>
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
