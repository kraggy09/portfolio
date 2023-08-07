import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "movie-flix",
      name: "MovieFlix",
      live: "https://movieflix96.netlify.app",
      github: "https://www.github.com/kraggy09/movie-flix",
      img: "/movieflix.png",
      desc: "MovieFlix is a web app that can be used by the user to get detailed info about the movies. They can get the trending,popular,top rated moveis and TV shows. Explore innumerable movies and TV shows",
      stack: ["ReactJs", "Redux", "TailwindCSS"],
    },
    {
      id: "journey-jet",
      name: "JourneyJet",
      live: "https://journeyjet.netlify.app",
      github: "https://www.github.com/kraggy09",
      img: "/journeyjet.png",
      desc: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      stack: ["ReactJs", "TailwindCSS"],
    },
    {
      id: "bit-bolt",
      name: "BitBolt",
      live: "https://bitbolt.netlify.app",
      github: "https://www.github.com/kraggy09/bit-bolt",
      img: "/bitbolt.jpg",
      desc: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      stack: ["ReactJs", "TailwindCSS"],
    },
  ];
  return (
    <div id="project" className="">
      {projects.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
};

export default Projects;
