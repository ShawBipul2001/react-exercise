import React, { useState, useEffect } from 'react';
import usersData from '../data/users.json';
import '../styles/Table.css';
import { FaTrashAlt, FaPen } from 'react-icons/fa';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedDesignation, setEditedDesignation] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedRoles, setEditedRoles] = useState([]);

    useEffect(() => {
        setUsers(usersData);
    }, []);

    const handleDelete = (email) => {
        const updatedUsers = users.filter((user) => user.email !== email);
        setUsers(updatedUsers);
        localStorage.setItem('UsersList', JSON.stringify(updatedUsers));
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setEditedName(user.name);
        setEditedDesignation(user.designation);
        setEditedEmail(user.email);
        setEditedRoles([...user.roles]);
    };

    const handleSave = () => {
        const updatedUsers = users.map((user) => {
            if (user.email === editingUser.email) {
                return {
                    ...user,
                    name: editedName,
                    designation: editedDesignation,
                    email: editedEmail,
                    roles: editedRoles,
                };
            }
            return user;
        });

        setUsers(updatedUsers);
        localStorage.setItem('UsersList', JSON.stringify(updatedUsers));
        setEditingUser(null);
    };
    

    const handleCancelEdit = () => {
        setEditingUser(null);
        setEditedName('');
        setEditedDesignation('');
        setEditedEmail('');
        setEditedRoles([]);
    };

    const handleRoleChange = (index, role) => {
        const updatedRoles = [...editedRoles];
        updatedRoles[index] = role;
        setEditedRoles(updatedRoles);
    };

    const roleOptions = ['Editor', 'Viewer', 'Contributor','Manager'];

    return (
        <div>
            <table className='container'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Email</th>
                        <th>Roles</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='body'>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>
                                {editingUser === user ? (
                                    <input
                                        className='input'
                                        type="text"
                                        value={editedName}
                                        onChange={(event) => setEditedName(event.target.value)}
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>
                                {editingUser === user ? (
                                    <input
                                        className='input'
                                        type="text"
                                        value={editedDesignation}
                                        onChange={(event) => setEditedDesignation(event.target.value)}
                                    />
                                ) : (
                                    user.designation
                                )}
                            </td>
                            <td>
                                {editingUser === user ? (
                                    <input
                                        className='input'
                                        type="email"
                                        value={editedEmail}
                                        onChange={(event) => setEditedEmail(event.target.value)}
                                    />
                                ) : (
                                    user.email
                                )}
                            </td>
                            <td>
                                {editingUser === user ? (
                                        <div>
                                            {editedRoles.map((role, roleIndex) => (
                                                <select
                                                    className='input'
                                                    key={roleIndex}
                                                    value={role}
                                                    onChange={(e) => handleRoleChange(roleIndex, e.target.value)}
                                                >
                                                    {roleOptions.map((option) => (
                                                        <option key={option} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            ))}
                                        </div>
                                    ) : (
                                        user.roles.join(', ')
                                )}
                            </td>
                            <td>
                                {editingUser === user ? (
                                    <>
                                        <button className='save' onClick={handleSave}>Save</button>
                                        <button className='cancel' onClick={handleCancelEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <FaPen 
                                        role='button' 
                                        onClick={() => handleEdit(user)} 
                                        tabIndex="0" 
                                    />
                                )}
                            </td>
                            <td>
                                <FaTrashAlt
                                    onClick={() => handleDelete(user.email)}
                                    role='button'
                                    tabIndex="0"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
