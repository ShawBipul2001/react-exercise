import React from 'react'

import '../styles/EditUser.css'

const EditUser = ({editUser,setEditRowNo, handleEditUserSubmit, setEditUser}) => {
    const handleEditUserChange = (e)=>{
        if(e.target.id==='roles'){
            setEditUser({...editUser, roles:[e.target.value]})
        }
        else{
            const {id, value} = e.target;
            setEditUser({...editUser, [id]:value});
        }
    }
    return (
        <form
            className='editUser'
            onSubmit={handleEditUserSubmit}
        >
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                placeholder={editUser.name}
                value={editUser.name}
                onChange={(e)=>handleEditUserChange(e)}
                required
            />
            <label htmlFor='designation'>Designation</label>
            <input
                id='designation'
                type='text'
                placeholder={editUser.designation}
                value={editUser.designation}
                onChange={(e) =>handleEditUserChange(e)}
                required
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='text'
                placeholder={editUser.email}
                value = {editUser.email}
                onChange={(e) =>handleEditUserChange(e)}
                required
            />
            <label htmlFor="roles">Role:</label>
            <select 
                id="roles" 
                name="roles" 
                value={editUser.roles[0]}
                onChange={(e) =>handleEditUserChange(e)}
            >
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
                <option value="Contributor">Contributor</option>
                <option value="Manager">Manager</option>
            </select>
            <button 
                type="submit"
                aria-label='Save User'
            >
               Save User
            </button>
            <button 
                type="button"
                aria-label='Save User'
                onClick={()=>{setEditRowNo(-1)}}
            >
               Cancel Edit
            </button>
        </form>
      )
}

export default EditUser
