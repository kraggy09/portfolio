import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, handleThemeChange, setTheme, color, setColor } =
    useContext(ThemeContext);
  console.log(theme);

  return (
    <nav className="flex w-full py-3 items-center text-lg px-16 justify-between">
      <span className="font-bold hover:text-red-400 text-2xl">Kaif.dev</span>
      <ul className="flex">
        <Link to={"/"}>
          <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
            Home
          </span>
        </Link>
        <Link to={"/about"}>
          <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
            About
          </span>
        </Link>
        <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
          Projects
        </span>
        <span className={`hover:cursor-pointer px-6 hover:${theme?.hover}`}>
          Contact
        </span>
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
