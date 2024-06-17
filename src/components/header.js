import React from 'react';
import '../styles/Header.css';

const Header = ({mode,setMode}) => {
    const handleThemeChange = (e)=>{
        const newMode = e.target.value;
        setMode(newMode);
        localStorage.setItem('mode',newMode);
    }

    return (
        <header className={mode==='dark' ? "app-header dark" : "app-header light"}>
            <h1 className="app-title">Users List</h1>
            <div className="theme-toggle">
                <label>
                    <input 
                        type="radio" 
                        name="theme"    
                        value="light"
                        checked={mode === 'light'}
                        onChange={handleThemeChange} 
                    />
                    Light
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="theme" 
                        value="dark"
                        checked={mode === 'dark'}
                        onChange={handleThemeChange} 
                    />
                    Dark
                </label>
            </div>
        </header>
    );
};

export default Header;
