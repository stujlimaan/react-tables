

import React, { useMemo, useState } from 'react';
import { useTable, useRowSelect } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';
import { Checkbox } from './Checkbox';
import EditModal from './EditModal';

function RowSelection() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { selectedRowIds: {} },
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );

  console.log(tableInstance)
  // const selectedRowIds = tableInstance.state.selectedRowIds;
  // const selectedRowIdsArray = Object.keys(selectedRowIds);
  // const firstSelectedRowId = selectedRowIdsArray.length > 0 ? selectedRowIdsArray[0] : null;
  // console.log(`Selected row ${firstSelectedRowId}`,selectedRowIdsArray);
  // const rowIdAtIndex = selectedRowIdsArray[index]; 


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    selectedFlatRows,
    prepareRow,
  } = tableInstance;

  const firstPageRows = rows.slice(0, 10);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <button onClick={handleEdit}>Edit Selected Item</button>
      {isModalOpen && (
        <EditModal
          selectedItem={selectedFlatRows.map(row => row.original)}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default RowSelection;
