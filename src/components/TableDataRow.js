import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import "../styles/TableDataRow.css";
import EditUser from "./EditUser";
const TableDataRow = ({
  mode,
  user,
  index,
  handleDelete,
  handleEdit, 
  editRowNo ,
  setEditRowNo,
  editingUser,
  setEditingUser,
  handleEditUserSubmit
}) => {
  return (
    <>
    <div className="xyz-with-edit">
      { editRowNo!==index ? 
      (<div className="table-row">
        <div className="cell one">{user.name}</div>
        <div className="cell two">{user.designation}</div>
        <div className="cell three">{user.email}</div>
        <div className="cell four">{user.roles}</div>
        <div className="cell five">
          <button
            className={`edit button ${mode==='dark'?'darkbtn':'lightbtn'}`}
            id={index}
            onClick={(e) => handleEdit(e)}
          >
            <MdEdit size={18} />
          </button>
        </div>
        <div className="cell six">
          <button
            className={`delete button ${mode==='dark'?'darkbtn':'lightbtn'}`}
            id={index}
            onClick={(e) => handleDelete(e)}
          >
            <FaTrashAlt size={18} />
          </button>
        </div>
      </div>
      ):
      ( 
      <EditUser 
        editUser={editingUser}
        editRowNo = {editRowNo} 
        setEditRowNo={setEditRowNo}
        handleEditUserSubmit={handleEditUserSubmit}
        setEditUser={setEditingUser}
      />
      )}
    </div>
    </>
  );
};

export default TableDataRow;
