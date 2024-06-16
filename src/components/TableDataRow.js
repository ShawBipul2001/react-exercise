import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
const TableDataRow = ({item}) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.designation}</td>
      <td>{item.email}</td>
      <td>{item.roles}</td>
      <td>
        <MdEdit size ={20}/>
      </td> 
      <td className='delete-btn'> 
        <FaTrashAlt size={20}/>         
      </td>
    </tr>
  )
}

export default TableDataRow
