import Table from './components/Table';
import Header from './components/header';
import React, { useState } from 'react';

function App() {

  const mode = localStorage.getItem("mode")
  const [isDarkMode, setIsDarkMode] = useState(mode);
  console.log("mode: " + mode)

  const toggleDarkMode = () => {
    const newMode = isDarkMode === 'dark'?'light':'dark';
    localStorage.setItem("mode", newMode)
    setIsDarkMode(newMode);
  };
  return (
    <div className={isDarkMode === 'dark' ? "dark" : ""}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Table />
    </ div>
  );
}

export default App;
