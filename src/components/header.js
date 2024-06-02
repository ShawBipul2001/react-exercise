import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <h1 className="app-title">Users List</h1>
            <div className="theme-toggle">
                <label>
                    <input type="radio" name="theme" value="light" />
                    Light
                </label>
                <label>
                    <input type="radio" name="theme" value="dark" />
                    Dark
                </label>
            </div>
        </header>
    );
};

export default Header;
