import React from 'react'

import '../styles/EditUser.css'

const EditUser = ({editUser, handleEditUserSubmit, handleEditUserChange}) => {
    return (
        <form
            className='editUser'
            onSubmit={handleEditUserSubmit}
        >
        <tr>
        <td>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                placeholder={editUser.name}
                value={editUser.name}
                onChange={(e)=>handleEditUserChange(e)}
                required
            />
        </td>
        </tr>
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
        </form>
      )
}

export default EditUser
