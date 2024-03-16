import React from "react";
import GenderSelect from "./GenderSelect";
import Text from "./Text";
// Ensure you import your GenderSelect component here

export function ConditionalColumns(COLUMNS) {
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
        Cell: ({ row }) => <Text value={row.values.first_name} />,
      };
    } else if (column.accessor === "gender") {
      return {
        ...column,
        Cell: ({ row }) => <GenderSelect value={row.values.gender} />,
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
            <input type="number" defaultValue={row.values.email} />
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
