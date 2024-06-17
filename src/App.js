import React, {useEffect, useState} from 'react';
import Header from './components/header'; // Assuming header.js exists
import UserTable from './components/UserTable'; // Importing UserTable component
// import './styles/UserTable.css'

const App = () => {

  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme mode, default to 'light' if not found
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
});

// Function to handle theme change
const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme); // Update theme based on selected radio button value
    localStorage.setItem('theme', selectedTheme); // Save theme mode to localStorage
};

// Apply theme class to header when theme changes
useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode'; // Apply theme class to body element
}, [theme]);

  return (
    <>
      <Header theme={theme}
        handleThemeChange={handleThemeChange}
      />
      <div>
        <UserTable />
      </div>
    </>
  );
};

export default App;
