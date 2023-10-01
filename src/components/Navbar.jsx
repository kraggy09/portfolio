import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsFillMoonFill, BsMoonFill, BsSunFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, handleThemeChange, setTheme, color, setColor } =
    useContext(ThemeContext);
  const [scrollHeight, setscrollHeight] = useState(0);
  const [nav, setNav] = useState(false);

  return (
    <nav
      className={`flex fixed top-0 shadow-sm ${
        color === "day" ? "shadow-gray-900" : "shadow-gray-400"
      } left-0 w-full py-4 items-center z-10 text-lg px-16 justify-between ${
        theme?.background
      } `}
    >
      <span className="font-bold hover:text-red-400 text-2xl">Kaif.dev</span>
      <div className="lg:block hidden">
        <ul className="flex ">
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

          <span
            className={`hover:cursor-pointer rounded-2xl  border-2 ${
              color === "night" && "border-black"
            } flex items-center justify-between w-[120px]`}
          >
            {/** <button
              onClick={() => {
                handleThemeChange(color);
              }}
            >
              {color === "day" ? (
                <span className="flex items-center justify-center">
                  <BsFillMoonFill />
                </span>
              ) : (
                "Day"
              )}
            </button> */}
            <div
              className={`px-5 py-1 rounded-xl ${
                color === "day" && "bg-orange-600 text-white"
              }`}
              onClick={() => handleThemeChange(color)}
            >
              <BsMoonFill />
            </div>
            <div
              className={`px-5 py-1 rounded-xl  ${
                color === "night" && "bg-orange-600 text-white"
              }`}
              onClick={() => handleThemeChange(color)}
            >
              <BsSunFill />
            </div>
          </span>
        </ul>
      </div>
      <div
        className={
          nav
            ? `h-[100vh] fixed left-0 top-0 w-[100%]  ease-in-out duration-500  ${theme?.background}`
            : "fixed left-[-100%]"
        }
      >
        <AiOutlineClose
          onClick={() => {
            setNav(!nav);
          }}
          className="absolute top-2 right-3 hover:text-orange-600 hover:cursor-pointer ease-in duration-300"
          size={35}
        />
        <ul
          className={`${
            nav
              ? "flex h-[90vh] z-3 flex-col items-center ease-in justify-center"
              : ""
          }`}
        >
          <Link
            to="home"
            onClick={() => {
              setNav(!nav);
            }}
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>Home</li>
          </Link>
          <Link
            onClick={() => {
              setNav(!nav);
            }}
            to="about"
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>About</li>
          </Link>
          <Link
            onClick={() => {
              setNav(!nav);
            }}
            to="project"
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>Projects</li>
          </Link>
          <Link
            onClick={() => {
              setNav(!nav);
            }}
            to="contact"
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>Contacts</li>
          </Link>
          <span
            className={`hover:cursor-pointer rounded-2xl mt-6  border-2 ${
              color === "night" && "border-black"
            } flex items-center justify-between w-[120px]`}
            onClick={() => setNav(!nav)}
          >
            <div
              className={`px-5 py-1 rounded-xl ${
                color === "day" && "bg-orange-600 text-white"
              }`}
              onClick={() => handleThemeChange(color)}
            >
              <BsMoonFill />
            </div>
            <div
              className={`px-5 py-1 rounded-xl  ${
                color === "night" && "bg-orange-600 text-white"
              }`}
              onClick={() => handleThemeChange(color)}
            >
              <BsSunFill />
            </div>
          </span>
        </ul>
      </div>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="lg:hidden block"
      >
        {!nav ? (
          <AiOutlineMenu
            className="hover:text-orange-600 hover:cursor-pointer ease-in duration-300"
            size={35}
          />
        ) : (
          <AiOutlineClose
            className="hover:text-orange-600 hover:cursor-pointer ease-in duration-300"
            size={35}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
