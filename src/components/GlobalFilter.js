import React from 'react'

function GlobalFilter({filter, setFilter}) {
  return (
    <div>
      <span>
        search : {''}
        <input value={filter} onChange={(e)=>setFilter(e.target.value)}/>
      </span>
    </div>
  )
}

export default GlobalFilter
