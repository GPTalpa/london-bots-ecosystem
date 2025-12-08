import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface IProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IProps) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("darkMode")) {
      return localStorage.getItem("darkMode") === "true";
    }

    return true;
  });

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("darkMode", String(next));
      return next;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
