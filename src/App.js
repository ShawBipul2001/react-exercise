import { useState ,useEffect} from 'react';

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
  const [mode, setMode] = useState('light');
  const [users, setUsers] = useState(usersData);
  const [newUser, setNewUser] = useState(defaultNewUser);
  const [editRowNo,setEditRowNo] = useState(-1);
  const [editingUser,setEditingUser] = useState({});
  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

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
      <Header
        mode = {mode}
        setMode ={setMode}
      />
      
      <TableComponent
        mode = {mode}
        users = {users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        editRowNo = {editRowNo}
        setEditRowNo={setEditRowNo}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        handleEditUserSubmit={handleEditUserSubmit}
      />
      <AddUser
        // className ={mode==='dark'? 'darkb':'lightb'}
        mode = {mode}
        newUser ={newUser}
        setNewUser ={setNewUser}
        handleAddUserSubmit = {handleAddUserSubmit}
      />
      {/* Create more components here */}
    </>
  );
}

export default App;
