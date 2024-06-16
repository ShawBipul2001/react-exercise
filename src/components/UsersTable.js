import React from 'react';
import { useState } from 'react';
import usersData from '../data/users.json'; 
import '../styles/UsersTable.css';

const UsersTable = () => {
    const [users, setUsers] = useState(usersData);
    const [editIndex, setEditIndex] = useState(null);
    const [editedUser, setEditedUser] = useState({
        name: '',
        designation: '',
        email: '',
        roles: []
    });

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedUser({...users[index], roles: [...users[index].roles]});
    };

    const handleDelete = (index) => {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);
    };

    const handleRoleChange = (index, newRole) => {
        const newUsers = [...users];
        newUsers[index].roles = [newRole];
        setUsers(newUsers);
    };

    const handleSave = () => {
        const newUsers = [...users];
        newUsers[editIndex] = editedUser;
        setUsers(newUsers);
        setEditIndex(null);
    };

    const handleCancel = () => {
        setEditIndex(null);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditedUser({...editedUser, [name]: value});
    };
  
    return (
        <table className="users-table">
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
                    <tr key={index}>
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
                                    onChange={(e) => handleChange({target: {name:'roles', value: [e.target.value]}})}
                                >
                                    <option value="Editor">Editor</option>
                                    <option value="Viewer">Viewer</option>
                                    <option value="COntributor">Contributor</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            ) : (
                                <select
                                    value={user.roles[0]}
                                    onChange={(e) => handleRoleChange(index, e.target.value)}
                                >
                                    <option value="Editor">Editor</option>
                                    <option value="Viewer">Viewer</option>
                                    <option value="COntributor">Contributor</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            )}
                        </td>
                        <td>
                            {editIndex === index ? (
                                <>
                                    <button className="edit" onClick={handleSave}>Save</button>
                                    <button className="delete" onClick={handleCancel}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                                    <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
