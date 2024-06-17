// import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = ({ theme, handleThemeChange }) => {
    // State for managing theme
    // const [theme, setTheme] = useState(() => {
    //     // Check localStorage for saved theme mode, default to 'light' if not found
    //     const savedTheme = localStorage.getItem('theme');
    //     return savedTheme ? savedTheme : 'light';
    // });

    // // Function to handle theme change
    // const handleThemeChange = (e) => {
    //     const selectedTheme = e.target.value;
    //     setTheme(selectedTheme); // Update theme based on selected radio button value
    //     localStorage.setItem('theme', selectedTheme); // Save theme mode to localStorage
    // };

    // // Apply theme class to header when theme changes
    // useEffect(() => {
    //     document.body.className = theme; // Apply theme class to body element
    // }, [theme]);

    return (
        <header className={`app-header ${theme}`}>
            <h1 className="app-title">Users List</h1>
            <div className="theme-toggle">
                <label>
                    <input
                        type="radio"
                        name="theme"
                        value="light"
                        checked={theme === 'light'}
                        onChange={handleThemeChange}
                    />
                    Light
                </label>
                <label>
                    <input
                        type="radio"
                        name="theme"
                        value="dark"
                        checked={theme === 'dark'}
                        onChange={handleThemeChange}
                    />
                    Dark
                </label>
            </div>
        </header>
    );
};

export default Header;
