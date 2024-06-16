import Header from './components/header';
import TableComponent from './components/TableComponent';

import users from './data/users.json';

function App() {
  
  return (
    <>
      <Header />
      <TableComponent
        users = {users}
      />
      {/* Create more components here */}
    </>
  );
}

export default App;
