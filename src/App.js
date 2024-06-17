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
  const [editRowNo,setEditRowNo] = useState(-1);
  const [editingUser,setEditingUser] = useState({});
  const handleEditUserSubmit = (e)=>{
    e.preventDefault();
    const newUsersList = users.filter((user,index) =>(index!==editRowNo));
    setUsers([...newUsersList,editingUser]);
    setEditRowNo(-1);
  }
  const handleAddUserSubmit = (e)=>{
    e.preventDefault();
    // console.log(newUser);
    // console.log(users[0]);
    setUsers([...users,newUser]);
    setNewUser(defaultNewUser);
  }
  const handleDelete = (e) =>{
    const idx = parseInt(e.currentTarget.id,10);
    const newUsersList = users.filter((user,index) => (index!==idx));
    setUsers(newUsersList);
  }
  const handleEdit = (e) =>{
    const idx = parseInt(e.currentTarget.id,10);
    setEditingUser(users[idx]);
    setEditRowNo(parseInt(e.currentTarget.id,10));
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
        editRowNo = {editRowNo}
        setEditRowNo={setEditRowNo}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        handleEditUserSubmit={handleEditUserSubmit}
      />
      {/* Create more components here */}
    </>
  );
}

export default App;
