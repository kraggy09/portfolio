import React, { useContext } from "react";

import {
  AiOutlineArrowDown,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { theme, color } = useContext(ThemeContext);
  return (
    <main id="home" className="mt-16 pt-24  md:h-[mdh]">
      <div className="flex md:h-[md] flex-col-reverse lg:flex-row justify-around">
        <div className="lg:w-1/2 flex flex-col lg:items-start justify-center ">
          <h1 className="lg:text-5xl text-3xl md:text-4xl text-center lg:text-left font-bold">
            Front-End React Developer
            <img src="/hi.gif" className="inline   h-10 w-10" />
          </h1>
          <h2
            className={`md:text-2xl mx-3 md:mx-0 text-xl text-center lg:text-start mt-6 ${theme?.textLight}`}
          >
            Hi, I'm Kaif Shaikh. A passionate Front-end React Developer based in
            Kolkata, India. 📍
          </h2>

          <div
            className="mt-6 my-6 flex items-center justify-center"
            id="socials"
          >
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
            <a
              target="_blank"
              className={`mx-2 hover:${theme?.hover}`}
              rel="noreferrer"
              href="https://www.leetcode.com/kraggy"
            >
              <SiLeetcode size={30} />
            </a>
            <a
              href="/resume.pdf"
              download={true}
              className="rounded-full flex items-center justify-center hover:scale-120 hover:cursor-pointer hover:shadow-xl hover:bg-white hover:border hover:border-orange-500  hover:text-orange-600 transition-all duration-300 px-3 mx-2 py-1 font-bold text-lg bg-orange-600 text-white "
            >
              Resume
              <AiOutlineArrowDown />
            </a>
          </div>
        </div>
        <div className="h-full px-6 md:px-36 lg:px-0 ">
          <img
            src="/mine.png"
            className="h-full lg:h-96   lg:mx-0 mb-6 lg:mb-0 border-2 border-orange-600 rounded-full hover:cursor-pointer hover:scale-120"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:justify-center lg:flex-row items-center">
        <h1
          className={`text-xl font-bold border-b-2 lg:border-b-0 mb-6 lg:mb-0 pb-2 lg:border-r-2 ${
            color !== "day" ? " border-black" : "border-white"
          } pr-3`}
        >
          Tech Stack
        </h1>

        <div
          className={`flex pl-10 md:pl-0 flex-wrap lg:justify-around items-center`}
        >
          <div
            className={`my-6 md:my-0 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full  h-10 w-10 md:h-20 md:w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img
              src="/html.png"
              className="md:h-16 md:w-16 h-8 w-8  rounded-full"
            />
          </div>
          <div
            className={`my-6 md:my-0 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full  h-10 w-10 md:h-20 md:w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img
              src="/css.png"
              className="md:h-16 md:w-16 h-8 w-8  rounded-full"
            />
          </div>
          <div
            className={`my-6 md:my-0 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full  h-10 w-10 md:h-20 md:w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img
              src="/js.png"
              className="md:h-16 md:w-16 h-8 w-8  rounded-full"
            />
          </div>
          <div
            className={`my-6 md:my-0 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full  h-10 w-10 md:h-20 md:w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img
              src="/react.png"
              className="hover:animate-spin md:h-16 md:w-16 h-8 w-8  rounded-full"
            />
          </div>
          <div
            className={`my-6 md:my-0 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full  h-10 w-10 md:h-20 md:w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img
              src="/redux.png"
              className="md:h-16 md:w-16 h-8 w-8  rounded-full"
            />
          </div>

          <div
            className={`my-6 md:my-0 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer mx-6 rounded-full  h-10 w-10 md:h-20 md:w-20 flex items-center justify-center shadow-gray-400`}
          >
            <img
              src="/tailwind.png"
              className="md:h-16 md:w-16 h-8 w-8  object-fit rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
