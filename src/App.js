import Header from './components/header';
import UserTable from './components/userTable';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme}/>
      <UserTable mode={theme}/>
    </>
  );
}

export default App;
