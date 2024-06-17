import React, { useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    useEffect(() => {
        const themeSwitchers = document.querySelectorAll('input[name="theme"]');
        
        themeSwitchers.forEach(switcher => {
            switcher.addEventListener('change', function() {
                if (this.checked) {
                    document.documentElement.setAttribute('data-theme', this.value);
                    localStorage.setItem('theme', this.value); 
                }
            });
        });

        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.querySelector(`input[name="theme"][value="${savedTheme}"]`).checked = true;
    }, []); 

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
