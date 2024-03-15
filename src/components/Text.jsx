import React, { useState } from 'react'
import MOCK_DATA from "./MOCK_DATA.json";


function Text({value,updateMyData,columnId,rowId}) {
      const [data,setData] = useState(value)

    // console.log(value,onChange)
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        console.log(newValue)
        setData(newValue)

        // onChange(newValue);
      };

    const onBlurFun = ()=>{
      console.log('onBlur',columnId,rowId,data)
      console.log(data)
      updateMyData(columnId,rowId,data)
    }


      
      
  return (
    <div>
      <input type='text' placeholder='Enter text here' value={data} onBlur={onBlurFun}  onChange={handleInputChange}   />
    </div>
  )
}

export default Text








 
