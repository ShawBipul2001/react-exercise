import React from 'react';
import '../styles/Header.css';

const Header = ({theme, setTheme}) => {
    return (
        <header className={`app-header header-${theme}`}>
            <h1 className="app-title">Users List</h1>
            <div className="theme-toggle">
                <label>
                    <input checked={theme === 'light'} type="radio" name="theme" value="light" onClick={() => setTheme("light")} />
                    Light
                </label>
                <label>
                    <input checked={theme === 'dark'} type="radio" name="theme" value="dark" onClick={() => setTheme("dark")} />
                    Dark
                </label>
            </div>
        </header>
    );
};

export default Header;
