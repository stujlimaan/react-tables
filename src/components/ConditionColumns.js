import React from "react";
import GenderSelect from "./GenderSelect";
import Text from "./Text";


export function ConditionalColumns(COLUMNS,updateMyData) {
  return COLUMNS.map((column) => {
    console.log(column.accessor, "col");

    if (column.accessor === "id") {
      return {
        ...column,
        Cell: ({ row }) =>  <span>{row.values.id}</span>,
      };
    } else if (column.accessor === "first_name") {
      return {
        ...column,
        Cell: ({ row,column }) => <Text value={row.values.first_name} updateMyData={updateMyData} columnId={column?.id}
        rowId={row?.id} />,
      };
    } else if (column.accessor === "gender") {
      return {
        ...column,
        Cell: ({ row }) => <GenderSelect value={row.values.gender} updateMyData={updateMyData} />,
      };
    } else if (column.accessor === "email") {
      return {
        ...column,
        Cell: ({ row }) => (
          <input type="email" defaultValue={row.values.email} />
        ),
      };
    } else if (column.accessor === "age") {
        return {
          ...column,
          Cell: ({ row }) => (
            <input type="number" defaultValue={row.values.email} updateMyData={updateMyData}/>
          ),
        };
      } else if (column.accessor === "country") {
        return {
          ...column,
          Cell: ({ row }) => (
            <span>{row.values.country}</span> 
          ),
        };
      }


    return column;
  });
}
