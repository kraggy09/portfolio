import Navbar from "./components/Navbar";
import About from "./components/About";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const bg = theme?.background;
  const txt = theme?.text;
  return (
    <div
      className={`w-full transition-colors duration-300 ease-in-out h-full ${bg} ${txt} `}
    >
      <Navbar />
      <div className="mx-52 mt-6">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
