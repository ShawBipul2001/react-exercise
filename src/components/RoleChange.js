import React from "react";

const RoleChange = ({ user, roles, handleRoleChange, index }) => {
  return (
    <select
      value={user.roles}
      onChange={(e) => handleRoleChange(index, e.target.value)}
    >
      {roles.map((role, i) => (
        <option key={i} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
};

export default RoleChange;
