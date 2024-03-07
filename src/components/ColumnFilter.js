import React from 'react'

function ColumnFilter({column}) {
    const {filterValue,setFilter} = column
  return (
    <div>
      <span>
        search : {''}
        <input value={filterValue} onChange={(e)=>setFilter(e.target.value)}/>
      </span>
    </div>
  )
}

export default ColumnFilter
