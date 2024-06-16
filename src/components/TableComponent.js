import React from 'react';
import TableColumnNames from './TableColumnNames';
import TableDataRow from './TableDataRow';

import '../styles/TableComponent.css';

const TableComponent = ({users, handleDelete, handleEdit}) => {

    const data = users;
    // console.log(users);

    return (
    <div className='table-container'>
        <div className='container'>
        <TableColumnNames/>
        <div className='data-rows-container'>
            {data.map((user,index) => (
                <TableDataRow
                key = {index}
                user={user}
                index = {index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />
            ))}
        </div>
        </div>
    </div>
    );
  };
  
  export default TableComponent;