import RoleChange from "./RoleChange";

const UserTable = ({
  users,
  roles,
  editedUser,
  editIndex,
  handleEditClick,
  handleSaveClick,
  handleChange,
  handleRoleChange,
  handleDelete,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Email</th>
          <th>Roles</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            {editIndex === index ? (
              <>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="designation"
                    value={editedUser.designation}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <RoleChange
                    user={editedUser}
                    roles={roles}
                    handleRoleChange={handleRoleChange}
                    index={index}
                  />
                </td>
                <td>
                  <button onClick={handleSaveClick}>Save</button>
                </td>
              </>
            ) : (
              <>
                <td>{user.name}</td>
                <td>{user.designation}</td>
                <td>{user.email}</td>
                <td>{user.roles}</td>
                <td>
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
