import React, { useState } from 'react';
import userData from '../data/users.json';
import '../styles/UserTable.css';

const UserTable = () => {
  const [users, setUsers] = useState(userData);
  const [editIndex, setEditIndex] = useState(null); // Track index of user being edited
  const [editName, setEditName] = useState('');
  const [editDesignation, setEditDesignation] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editRoles, setEditRoles] = useState([]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(users[index].name);
    setEditDesignation(users[index].designation);
    setEditEmail(users[index].email);
    setEditRoles(users[index].roles);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = {
      ...updatedUsers[editIndex],
      name: editName,
      designation: editDesignation,
      email: editEmail,
      roles: editRoles, // Update roles as well
    };
    setUsers(updatedUsers);
    setEditIndex(null); // Clear edit index
  };

  const handleCancel = () => {
    setEditIndex(null); // Clear edit index
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editDesignation}
                    onChange={(e) => setEditDesignation(e.target.value)}
                  />
                ) : (
                  user.designation
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <select
                    value={editRoles[0]} // Assuming only one role is selected for simplicity
                    onChange={(e) => setEditRoles([e.target.value])}
                  >
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                    <option value="Contributor">Contributor</option>
                    <option value="Manager">Manager</option>
                  </select>
                ) : (
                  user.roles.join(', ')
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
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
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
