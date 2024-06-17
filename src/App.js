import Header from './components/header';
import Content from './components/Content';
import React, {useState, useEffect } from 'react';
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme)
            setTheme(savedTheme);
    }, []);

    const handleThemeChange = (e) => {
        const newTheme = e.target.value;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

  return (
    <div className={`app ${theme}`}>
      <Header 
        theme={theme}
        handleThemeChange={handleThemeChange}  
      />
      <Content />
    </div>
  );
}

export default App;
