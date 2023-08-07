import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full flex my-16 shadow-xl ">
      <div
        id="left"
        className="max-h-[400px]  scrollbar-hide overflow-y-scroll w-1/2"
      >
        <img className="rounded-xl" src={project?.img} />
      </div>
      <div id="right" className="text-center w-1/2">
        <h1 className="mx-auto text-2xl font-bold uppercase text-orange-600 my-3">
          {project.name}
        </h1>
        <h3 className={`${theme.textLight} text-center mx-20 text-lg my-3`}>
          {project.desc}
        </h3>
        <div className="flex items-center  justify-center">
          {project.stack.map((item, index) => {
            return (
              <span
                key={index}
                className="py-3 px-3 mx-6 shadow-xl border rounded-xl"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
