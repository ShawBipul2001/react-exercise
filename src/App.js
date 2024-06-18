import Header from './components/header';
import UserTable from './UserTable';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Admin Portal</h1>
          <ThemeSwitcher />
        </header>
        <UserTable />
      </div>
    </ThemeProvider>
  );
}

export default App;
