import React, { useContext,useState, useEffect } from 'react';
import usersData from './data/users.json';
import './UserTable.css';
import { ThemeContext } from './ThemeContext';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const handleEdit = (name) => {
    const updatedUsers = users.map(user => {
      if (user.name === name) {
        const newName = prompt('Enter new name:', user.name);
        const newEmail = prompt('Enter new email:', user.email);
        if (newName && newEmail) {
          return { ...user, name: newName, email: newEmail };
        }
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleDelete = (name) => {
    const updatedUsers = users.filter(user => user.name !== name);
    setUsers(updatedUsers);
  };

  const handleRoleChange = (name, newRole) => {
    const updatedUsers = users.map(user => 
      user.name === name ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Management Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DESIGNATION</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>
                <select 
                  value={user.role} 
                  onChange={(e) => handleRoleChange(user.name, e.target.value)}
                >
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                  <option value="Contributor">Contributor</option>
                  <option value="Manager">Manager</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleEdit(user.name)}>Edit</button>
                <button onClick={() => handleDelete(user.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
