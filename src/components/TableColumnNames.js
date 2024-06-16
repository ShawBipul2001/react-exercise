import React from 'react'
import '../styles/TableColumnNames.css'

const TableColumnNames = () => {
  return (
    <div className='table-head-row'>
      <div className='cell one'>Name</div>
      <div className='cell two'>Designation</div>
      <div className='cell three'>Email</div>
      <div className='cell four'>Role</div>
      <div className='cell five'>Edit</div>
      <div className='cell six'>Delete </div>
    </div>
  )
}

export default TableColumnNames
