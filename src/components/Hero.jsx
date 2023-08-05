import React, { useContext } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { theme, color } = useContext(ThemeContext);
  return (
    <main id="home" className="mt-16 h-[100vh]">
      <div className="flex h-[60vh] justify-around">
        <div className="w-1/2 flex flex-col items-start justify-center ">
          <h1 className="text-5xl text-left font-bold">
            Front-End React Developer{"      "}
            <img src="/hi.gif" className="inline h-10 w-10" />
          </h1>
          <h2 className={`text-2xl mt-6 ${theme?.textLight}`}>
            Hi, I'm Kaif Shaikh. A passionate Front-end React Developer based in
            Kolkata, India. 📍
          </h2>

          <div className="mt-6 flex items-center justify-center" id="socials">
            <a
              target="_blank"
              className={`mx-2 hover:${theme?.hover}`}
              rel="noreferrer"
              href="https://www.linkedin.com/in/kaif-shaikh-bb2260194/"
            >
              <AiFillLinkedin size={30} />
            </a>
            <a
              target="_blank"
              className={`mx-2 hover:${theme?.hover}`}
              rel="noreferrer"
              href="https://www.github.com/kraggy09"
            >
              <AiFillGithub size={30} />
            </a>
          </div>
        </div>
        <img
          src="/mine.png"
          className="rounded-full hover:cursor-pointer hover:scale-120"
          alt=""
        />
      </div>
      <div className="w-full flex items-center">
        <h1
          className={`text-xl font-bold border-r-2 ${
            color !== "day" ? " border-black" : "border-white"
          } pr-3`}
        >
          Tech Stack
        </h1>

        <div className={`flex justify-around items-center`}>
          <div
            className={`shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full h-20 w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img src="/html.png" className="h-16 w-16 rounded-full" />
          </div>
          <div
            className={`shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full h-20 w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img src="/css.png" className="h-16 w-16 rounded-full" />
          </div>
          <div
            className={`shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full h-20 w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img src="/js.png" className="h-16 w-16 rounded-full" />
          </div>
          <div
            className={`shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full h-20 w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img
              src="/react.png"
              className="hover:animate-spin h-16 w-16 rounded-full"
            />
          </div>
          <div
            className={`shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full h-20 w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img src="/redux.png" className="h-16 w-16 rounded-full" />
          </div>

          <div
            className={`shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full h-20 w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img
              src="/tailwind.png"
              className="h-16 w-16 object-fit rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
