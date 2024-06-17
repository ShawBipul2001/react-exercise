import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <header className="app-header">
      <h1 className="app-title">Users List</h1>
      <div className="theme-toggle">
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={handleThemeChange}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>
    </header>
  );
};

export default Header;
