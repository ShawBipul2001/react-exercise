import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

import '../styles/TableDataRow.css'
const TableDataRow = ({item,index, handleDelete}) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.designation}</td>
      <td>{item.email}</td>
      <td>{item.roles}</td>
      <td>
        <MdEdit size ={18}/>
      </td> 
      <td>
        <button 
          className='delete button'
          id = {index}
          onClick={(e) => handleDelete(e)}
        > 
          <FaTrashAlt size = {18}/>
        </button>         
      </td>
    </tr>
  )
}

export default TableDataRow
