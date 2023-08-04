import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
const App = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const bg = theme?.background;
  const txt = theme?.text;
  return (
    <div
      className={`w-[100vw] transition-colors duration-300 ease-in-out h-[100vh] ${bg} ${txt} `}
    >
      <Navbar />
      <div className="mx-64">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
