import React, { useContext } from "react";
import {
  AiOutlineArrowDown,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { theme, color } = useContext(ThemeContext);
  return (
    <main id="home" className="mt-16 pt-24  h-[100vh]">
      <div className="flex h-[60vh] justify-around  -z-16">
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
        <div className="h-full ">
          <img
            src="/mine.png"
            className="h-full border-2 border-orange-600 rounded-full hover:cursor-pointer hover:scale-120"
            alt=""
          />
          <div className="-z-10 absolute  top-0 right-0 ">
            <svg
              height={400}
              width={400}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFA450"
                d="M41.2,-71.9C52.3,-65,59.4,-51.7,68.2,-38.6C77,-25.6,87.5,-12.8,90.3,1.6C93.1,16,88.1,32,79.4,45.2C70.7,58.4,58.2,68.8,44.4,77.3C30.5,85.8,15.2,92.4,-0.3,93C-15.9,93.5,-31.8,88,-43,78C-54.2,68,-60.7,53.4,-68.6,39.6C-76.4,25.9,-85.6,12.9,-87.4,-1C-89.1,-15,-83.5,-30,-74.2,-41.2C-64.9,-52.4,-51.9,-59.9,-38.9,-65.7C-25.9,-71.5,-13,-75.5,1,-77.3C15.1,-79.1,30.1,-78.7,41.2,-71.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
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
