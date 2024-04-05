import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "movie-flix",
      name: "MovieFlix",
      live: "https://movieflix96.netlify.app",
      github: "https://www.github.com/kraggy09/movie-flix",
      img: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315317/portfolio/m245ujc6qrtuz1xnewst.png",
      tab: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315315/portfolio/uitpwav3fuso9y0dsdz3.png",
      mob: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315314/portfolio/kdpohd7admxkel4ggfib.png",
      desc: "MovieFlix is a web app that can be used by the user to get detailed info about the movies. They can get the trending,popular,top rated moveis and TV shows. Explore innumerable movies and TV shows",
      stack: ["ReactJs", "Redux", "TailwindCSS"],
    },
    {
      id: "journey-jet",
      name: "JourneyJet",
      live: "https://journeyjet.netlify.app",
      github: "https://www.github.com/kraggy09",
      img: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315314/portfolio/kjwhum8frz7r63hxptu6.png",
      tab: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315314/portfolio/kjwhum8frz7r63hxptu6.png",
      mob: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315312/portfolio/uyjnomohbiko94i5d7js.png",
      desc: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      stack: ["ReactJs", "TailwindCSS"],
    },
    {
      id: "bit-bolt",
      name: "BitBolt",
      live: "https://bitbolt.netlify.app",
      github: "https://www.github.com/kraggy09/bit-bolt",
      img: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315275/portfolio/guopkn0rihaejzasicwd.jpg",
      tab: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315312/portfolio/lju4spxir7hwfzut9vay.jpg",
      mob: "https://res.cloudinary.com/dvof5uyrw/image/upload/v1712315311/portfolio/gen65oevlikamc28jzhj.jpg",
      desc: "BitBolt is a website that can be used to track various cryptocurrencies. User can save their coins and check for some of the trending coins in todays world!",
      stack: ["ReactJs", "TailwindCSS"],
    },
  ];
  return (
    <div id="project" className=" pt-10">
      <div className="px-16 lg:px-0">
        <h1 className="uppercase text-xl md:text-2xl text-center lg:text-start lg:text-3xl text-orange-600 font-extrabold my-3 ">
          PORTFOLIO
        </h1>
        <h3 className="lg:text-3xl text-2xl text-center lg:text-start font-semibold">
          Each project is a unique piece of development 🧩
        </h3>
      </div>
      <div className="flex flex-col items-center">
        {projects.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
