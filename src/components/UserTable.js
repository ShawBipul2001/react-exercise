import React, { useState, useEffect } from 'react';
import usersData from '../data/users.json';
import './UserTable.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserTable = () => {
  const [users, setUsers] = useState(usersData);
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({
    name: '',
    designation: '',
    email: '',
    roles: []
  });
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedUser({...users[index], roles: [...users[index].roles]});
  };

  const handleDelete = (email) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if(confirmDelete){
      const updatedUsers = users.filter(user => user.email !== email);
      setUsers(updatedUsers);
    }
  };

  const handleRoleChange = (index, newRole) => {
    const newUsers = [...users];
    newUsers[index].roles = [newRole];
    setUsers(newUsers);
  };

  const handleSave = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(editedUser.email)) {
      const newUsers = [...users];
      newUsers[editIndex] = editedUser;
      setUsers(newUsers);
      setEditIndex(null);
    } else {
      alert('Please enter a valid email address');
    }
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="UserTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.email}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleChange}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="designation"
                    value={editedUser.designation}
                    onChange={handleChange}
                  />
                ) : (
                  user.designation
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <select
                    name="roles"
                    value={editedUser.roles[0]}
                    onChange={(e) => handleChange({ target: { name: 'roles', value: [e.target.value] } })}
                  >
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                    <option value="Contributor">Contributor</option>
                    <option value="Manager">Manager</option>
                    <option value="Admin">Admin</option>
                  </select>
                ) : (
                  <select
                    value={user.roles[0]}
                    onChange={(e) => handleRoleChange(index, e.target.value)}
                  >
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                    <option value="Contributor">Contributor</option>
                    <option value="Manager">Manager</option>
                    <option value="Admin">Admin</option>
                  </select>
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}><FontAwesomeIcon icon={faEdit} /></button>
                    <button onClick={() => handleDelete(user.email)}><FontAwesomeIcon icon={faTrash} /></button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
