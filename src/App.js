import Header from './components/header';
import UserTable from './UserTable';
import React, { useState, useEffect } from 'react';
function App() {
  const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme)
            setTheme(savedTheme);
        document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
    }, [theme]);

    const handleThemeChange = (e) => {
        const newTheme = e.target.value;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
  return (
    <>
      <Header theme={theme}
      handleThemeChange={handleThemeChange}
      />
      <UserTable />
    </>
  );
}
export default App;
