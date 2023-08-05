import { useLayoutEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  const night = {
    name: "night",
    background: "bg-gray-700",
    text: "text-white",
    hover: "text-red-400",
    textLight: "text-gray-400",
  };

  const day = {
    name: "day",
    background: "bg-white",
    text: "text-black",
    hover: "text-red-400",
    textLight: "text-gray-400",
  };
  const [color, setColor] = useState("day");

  const [theme, setTheme] = useState(null);

  const date = new Date();
  const hours = date.getHours();

  const defaultTheme = () => {
    console.log(hours);
    if (hours >= 17) {
      setTheme(night);
      setColor("day");
    } else {
      setTheme(day);
      setColor("night");
    }
  };
  useLayoutEffect(() => {
    defaultTheme();
  }, [hours]);

  const handleThemeChange = (color) => {
    console.log("ThemeChanged");
    if (color === "night") {
      setTheme(night);
      setColor("day");
    } else {
      setTheme(day);
      setColor("night");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, color, setColor, setTheme, handleThemeChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
