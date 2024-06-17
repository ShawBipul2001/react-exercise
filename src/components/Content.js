import React, { useState } from "react";
import usersData from "../data/users.json";
import UsersTable from "./UserTable";
import "../styles/UserTable.css";

const Content = () => {
  const roles = ["Editor", "Viewer", "Contributor", "Manager"];
  const [users, setUsers] = useState(usersData);
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  //   const [theme] = useState(localStorage.getItem("theme") || "light");

  //   useEffect(() => {
  //     document.body.className = Theme;
  //   }, [Theme]);

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
    setEditedUser({ ...editedUser, roles: newRole });
    setUsers(newUsers);
  };

  const handleDelete = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };
  return (
    <div>
      <UsersTable
        users={users}
        roles={roles}
        editedUser={editedUser}
        editIndex={editIndex}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
        handleRoleChange={handleRoleChange}
        handleSaveClick={handleSaveClick}
      />
    </div>
  );
};

export default Content;
