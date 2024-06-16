import { useState } from 'react';

import AddUser from './components/AddUser';
import Header from './components/header';
import TableComponent from './components/TableComponent';

import usersData from './data/users.json';

function App() {
  const defaultNewUser = {
    name:'',
    designation:'',
    email:'',
    roles:['']
  };
  const [users, setUsers] = useState(usersData);
  const [newUser, setNewUser] = useState(defaultNewUser);
  // const [editing, setEditings] = useState(defaultEditing);
  const handleAddUserSubmit = (e)=>{
    e.preventDefault();
    // console.log(newUser);
    // console.log(users[0]);
    setUsers([...users,newUser]);
  }
  const handleDelete = (e) =>{
    const idx = parseInt(e.currentTarget.id,10);
    const newUsersList = users.filter((user,index) => (index!==idx));
    setUsers(newUsersList);
  }
  const handleEdit = (e) =>{
    console.log(e.currentTarget.id);
  }
  return (
    <>
      <Header />
      <AddUser
        newUser ={newUser}
        setNewUser ={setNewUser}
        handleAddUserSubmit = {handleAddUserSubmit}
      />
      <TableComponent
        users = {users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {/* Create more components here */}
    </>
  );
}

export default App;
