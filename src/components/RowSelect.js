import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
import { Checkbox } from "./Checkbox";
import EditModal from "./EditModal";
import Text from "./Text";


function RowSelect() {
  const columns = useMemo(() => COLUMNS.map(pro=>{
    return {
   ...pro,
      Cell: (row) => {
        return (
          <>
            {/* <input
              type="checkbox"
              checked={row.row.selected}
              onChange={(e) => {
                updateMyData(row.column.id, row.row.id, e.target.checked);
              }}
            /> */}
            <Text checked={row.row.selected}
              value={row.value}
              updateMyData={updateMyData}
              columnId={row.column.id}
              rowId={row.row.id}
               />
          </>
        );
      },
    };
  // return <Text checked={row.row.selected}
  //             onChange={(e) => {
  //               updateMyData(row.column.id, row.row.id, e.target.checked);
  //             }} />
  }), []);
  //   const data = useMemo(() => MOCK_DATA, []);
  const [data, setData] = useState([...MOCK_DATA]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

 function updateMyData(columnId,rowId,value){
  console.log('updateMyData',columnId,rowId,value)
  setData((oldProp)=>{
        return oldProp.map((prop,index) => {
          if ( index== rowId) {
            prop[columnId] = value;
          }
          console.log(prop)
          return prop;
        }
        )
  })
  }

  useEffect(()=>{
    console.log('updateMyData',data)
  },[data])

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { selectedRowIds: {} },
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

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

  console.log(selectedFlatRows,'selectedFlatRows');

  if(selectedFlatRows.length > 0) {
    console.log(selectedFlatRows)
    selectedFlatRows.map((item)=>{
      console.log(item)
      console.log(item.id)
      const i = Number(item.id) + 1
      let da = document.querySelectorAll('input')[i]
      console.log(da)
      if(da) { 
        da.removeAttribute('disabled'); 
    }

    })
  }
 

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                    {/* {console.log(
                      "Cell rendered",
                      cell.column,
                      selectedFlatRows[0]?.id,
                      cell.render("Cell")
                    )} */}
                    {/* {selectedFlatRows.length > 0 &&
                    cell.row.id == selectedFlatRows[0]?.id ? (
                      <input
                        value={cell.row.values[cell.column.id]}
                          onChange={e => {
                            console.log(e.target.value,'jfhfhhfh')
                            // setData()
                            // const newValue = e.target.value;
                            // row.original[cell.column.id] = newValue;
                            // cell.row.original(row.original);
                          }}
                        // onChange={e => handleInputChange(e, row, cell.column)}
                      />
                    ) : ( */}
                      {/* cell.render("Cell") */}
                    {/* )} */}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <button onClick={handleEdit}>Edit Selected Item</button>
      <button onClick={handleEdit}>Update Selected Item</button>
      {isModalOpen && (
        <EditModal
          selectedItem={selectedFlatRows.map((row) => row.original)}
          closeModal={() => setIsModalOpen(false)}
          setData={setData}
        />
      )}
    </>
  );
}

export default RowSelect;
