import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

const THEME_KEY = "sport-quiz-theme";

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");

  useEffect(() => {
    const root = document.documentElement;  
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage theme={theme} onToggleTheme={toggleTheme} />} />
 
      </Routes>
    </Router>
  );
};

export default App;