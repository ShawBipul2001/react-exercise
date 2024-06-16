import React from 'react'
import '../styles/AddUser.css'
const AddUser = ({newUser, setNewUser,handleAddUserSubmit}) => {
   
    const handleAddUserChange = (e)=> {
        if(e.target.id==='roles'){
            setNewUser({...newUser, roles:[e.target.value]})
        }
        else{
            const {id, value} = e.target;
            setNewUser({...newUser, [id]:value});
        }
    }
    
  return (
    <form
        className='addUser'
        onSubmit={handleAddUserSubmit}
    >
        <label htmlFor='name'>Name</label>
        <input
            id='name'
            type='text'
            placeholder='write name here'
            value={newUser.name}
            onChange={(e)=>handleAddUserChange(e)}
            required
        />
        <label htmlFor='designation'>Designation</label>
        <input
            id='designation'
            type='text'
            placeholder='write designation here'
            value={newUser.designation}
            onChange={(e) =>handleAddUserChange(e)}
            required
        />
        <label htmlFor='email'>Email</label>
        <input
            id='email'
            type='text'
            placeholder='write email here'
            value = {newUser.email}
            onChange={(e) =>handleAddUserChange(e)}
            required
        />
        <label htmlFor="roles">Role:</label>
        <select 
            id="roles" 
            name="roles" 
            value={newUser.roles[0]}
            onChange={(e) =>handleAddUserChange(e)}
        >
            <option  hidden>Select a Role</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
            <option value="Contributor">Contributor</option>
            <option value="Manager">Manager</option>
        </select>
        <button 
            type="submit"
            aria-label='Add User'
        >
           Add User
        </button>
    </form>
  )
}

export default AddUser

