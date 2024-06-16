import React from 'react';
import TableColumnNames from './TableColumnNames';
import TableDataRow from './TableDataRow';

import '../styles/TableComponent.css';
const TableComponent = ({users}) => {

    const data = users
  
    return (
    <div className='table-container'>
        <table className='container' >
            <TableColumnNames/>
            <tbody>
                {data.map((item,index) => (
                    <TableDataRow
                    key = {index}
                    item={item}
                    />
                ))}
            </tbody>
        </table>
    </div>
    );
  };
  
  export default TableComponent;