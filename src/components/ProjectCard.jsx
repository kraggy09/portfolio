import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { AiOutlineTablet, AiOutlineLaptop } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);

  const div = useRef(null);

  const onMouseOver = () => {
    div.current.scrollTo({
      left: 0,
      top: div.current.scrollHeight,
      behavior: "smooth",
    });
  };
  const onMouseRemove = () => {
    div.current.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  const [img, setImg] = useState("lap");

  return (
    <div className="lg:w-full w-[90vw] md:w-[80vw] flex flex-col lg:flex-row transition-all duration-1000 ease-in-out my-16 shadow-2xl rounded-xl ">
      <div
        id="left"
        ref={div}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseRemove}
        className=" hover:cursor-pointer lg:max-h-[400px] border-2 rounded-xl max-h-[300px]  mx-auto scrollbar-hide overflow-y-scroll w-[75vw] duration-8000 lg:w-1/2"
      >
        <img
          className="rounded-xl transition-all duration-8000 ease-linear"
          src={
            img === "lap"
              ? project.img
              : img === "tab"
              ? project.tab
              : project.mob
          }
        />
      </div>
      <div id="right" className="text-center w-full lg:mx-6 lg:w-1/2">
        <h1 className="mx-auto text-3xl my-6 lg:text-2xl text-center font-bold uppercase text-orange-600 lg:my-3">
          {project.name}
        </h1>
        <h3
          className={`${theme?.textLight} text-center lg:mx-20 md:mx-36 px-6 md:my-6 text-xl  lg:text-lg lg:my-3`}
        >
          {project.desc}
        </h3>
        <div className="flex items-center flex-wrap my-6 lg:my-0  justify-center">
          {project.stack.map((item, index) => {
            return (
              <span
                key={index}
                className="py-3 my-3 md:my-0 px-3 mx-3 lg:mx-6 shadow-xl border rounded-xl"
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="flex items-center justify-center w-full mt-10">
          <FaMobileAlt
            size={30}
            className={`mx-3 hover:text-orange-600 ${
              img === "mob" && "text-orange-600"
            } hover:cursor-pointer`}
            onClick={() => setImg("mob")}
          />
          <AiOutlineTablet
            size={30}
            className={`mx-3 hover:text-orange-600 ${
              img === "tab" && "text-orange-600"
            } hover:cursor-pointer`}
            onClick={() => setImg("tab")}
          />{" "}
          <AiOutlineLaptop
            size={30}
            className={`mx-3 hover:text-orange-600 ${
              img === "lap" && "text-orange-600"
            } hover:cursor-pointer`}
            onClick={() => setImg("lap")}
          />
        </div>
        <div className="flex items-center justify-center text-xl mx-auto py-14 w-full">
          <a
            className="flex items-center  mx-3 hover:text-orange-600  justify-center"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Code
            <FiGithub size={30} />
          </a>
          <a
            className="flex items-center  hover:text-orange-600 justify-center"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <FiExternalLink size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
