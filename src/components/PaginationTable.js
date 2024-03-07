import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUP_COLUMNS } from "./columns";
import "./table.css";

function PaginationTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({ columns, data }, usePagination);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    rows,
    prepareRow,
  } = tableInstance;
  const { pageIndex,pageSize } = state;
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <div>
          <span>
            page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
          {
            [10,20,30].map(pageSize=>(
                <option key={pageSize} value={pageSize}>show {pageSize}</option>
            ))
          }
          </select>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            next
          </button>
          <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>

        </div>
      </table>
    </>
  );
}

export default PaginationTable;
