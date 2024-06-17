import React from 'react';
import Header from './components/header'; // Assuming header.js exists
import UserTable from './components/UserTable'; // Importing UserTable component

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <UserTable />
      </div>
    </>
  );
};

export default App;
