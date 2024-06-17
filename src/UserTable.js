import React, { useState, useEffect } from 'react';
import userData from './data/users.json';
import './styles/style.css';

const roles = ["Editor", "Viewer", "Contributor", "Manager"];

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedUser, setEditedUser] = useState({
        name: '',
        email: '',
        designation: '',
        roles: ''
    });
    // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        setUsers(userData);
    }, []);

    // useEffect(() => {
    //     document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
    //     localStorage.setItem('theme', theme);
    // }, [theme]);

    const handleRoleChange = (e) => {
        setEditedUser({ ...editedUser, roles: e.target.value });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditedUser(users[index]);
    };

    const handleSaveClick = (index) => {
        const updatedUsers = users.map((user, i) =>
            i === index ? editedUser : user
        );
        setUsers(updatedUsers);
        setEditingIndex(null);
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    // const toggleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Designation</th>
                        <th>Roles</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedUser.name}
                                        onChange={handleEditChange}
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={editedUser.email}
                                        onChange={handleEditChange}
                                    />
                                ) : (
                                    user.email
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        name="designation"
                                        value={editedUser.designation}
                                        onChange={handleEditChange}
                                    />
                                ) : (
                                    user.designation
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <select
                                        value={editedUser.roles}
                                        onChange={handleRoleChange}
                                    >
                                        {roles.map(role => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </select>
                                ) : (
                                    user.roles
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <button onClick={() => handleSaveClick(index)}>Save</button>
                                ) : (
                                    <button onClick={() => handleEditClick(index)}>Edit</button>
                                )}
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
