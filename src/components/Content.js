import { useState } from 'react';
import UserTable from './UserTable';
import usersData from '../data/users.json';
import '../styles/styles.css';

const Content = () => {
    const roles = ["Editor", "Viewer", "Contributor", "Manager"];

    const [users, setUsers] = useState(usersData);
    const [editIndex, setEditIndex] = useState('');
    const [editedUser, setEditedUser] = useState('');

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedUser({ ...users[index] });
    };

    const handleSaveClick = () => {
        const newUsers = [...users];
        newUsers[editIndex] = editedUser;
        setUsers(newUsers);
        setEditIndex(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const handleRoleChange = (index, newRole) => {
        const newUsers = [...users];
        newUsers[index].roles = [newRole];
        setEditedUser({ ...editedUser, roles: newRole })
        setUsers(newUsers);
    };

    const handleDelete = (index) => {
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
    };

    return (
        <div className="main-content">
            <UserTable
                users={users}
                roles={roles}
                editIndex={editIndex}
                editedUser={editedUser}
                handleEditClick={handleEditClick}
                handleDelete={handleDelete}
                handleRoleChange={handleRoleChange}
                handleChange={handleChange}
                handleSaveClick={handleSaveClick}
            />
        </div>
    );
};

export default Content;
