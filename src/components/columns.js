import {format} from 'date-fns'
import ColumnFilter from './ColumnFilter'
import Text from './Text'
import GenderSelect from './GenderSelect';


export const COLUMNS = [
    {
        Header:'Id',
        accessor:'id',
        Footer:'Id',
        Filter:ColumnFilter,
        disableFilters:true,
        Cell:({ value, row }) => (
            console.log(row.original.type,'type',value)
            // <GenderSelect
            //   value={value}
            //   onChange={newValue => {
            //     // Update the value in the data
            //     row.setValue('gender', newValue);
            //   }}
            // />
            )
       

    },
    {
        Header:'First Name',
        accessor:'first_name',
        Footer:'First Name',
        Filter:ColumnFilter,
        Cell: ({ value, row,type }) => {
            console.log(type,value,row,'bb')
            
          }
     
        }
    
    ,
    {
        Header:'Last Name',
        accessor:'last_name',
        Footer:'Last Name',
        Filter:ColumnFilter,
        Cell:({cell,row, data, setData})=>{
            console.log('Cell',cell,cell.column.id,row, data, setData)
            return <Text value={cell.value} onChange={
                (newValue) => {
                // Update the data in the parent component
                console.log('New Value',newValue,row.index,cell.column.id,);
                const updatedData = [...data];
                console.log(updatedData[row.index],row.index)
                updatedData[row.index][cell.column.id] = newValue;

                console.log('Updated Data', updatedData[row.index][cell.column.id] ,newValue);
                // setData(updatedData);
              }}/>
        }
    },
    {
        Header:'email Address',
        accessor:'email',
        Footer:'email Address',
        Filter:ColumnFilter,
        Cell:({cell,row, data, setData})=>{
            console.log('Cell',cell,cell.column.id,row, data, setData)
            return <Text value={cell.value} onChange={
                (newValue) => {
                // Update the data in the parent component
                console.log('New Value',newValue,row.index,cell.column.id);
                const updatedData = [...data];
                console.log(updatedData[row.index],row.index)
                updatedData[row.index][cell.column.id] = newValue;
                console.log('Updated Data', updatedData[row.index][cell.column.id] ,newValue);
                // setData(updatedData);
              }}/>
        }
    },
    {
        Header:'gender',
        accessor:'gender',
        Footer:'gender',
        Filter:ColumnFilter,
        Cell:({cell,row, data, setData})=>{
            console.log('Cell',cell,cell.column.id,row, data, setData)
            return <Text value={cell.value} onChange={
                (newValue) => {
                // Update the data in the parent component
                console.log('New Value',newValue,row.index,cell.column.id);
                const updatedData = [...data];
                console.log(updatedData[row.index],row.index)
                updatedData[row.index][cell.column.id] = newValue;
                console.log('Updated Data', updatedData[row.index][cell.column.id] ,newValue);
                // setData(updatedData);
              }}/>
        }
    },
    {
        Header:'age',
        accessor:'age',
        Footer:'age',
        Filter:ColumnFilter,
        Cell:({cell,row, data, setData})=>{
            // console.log('Cell',cell,cell.column.id,row, data, setData)
            return <Text value={cell.value} onChange={
                (newValue) => {
                // Update the data in the parent component
                console.log('New Value',newValue,row.index,cell.column.id);
                const updatedData = [...data];
                console.log(updatedData[row.index],row.index)
                updatedData[row.index][cell.column.id] = newValue;
                console.log('Updated Data', updatedData[row.index][cell.column.id] ,newValue);
                setData(updatedData);
              }}/>
        }
    },
    {
        Header:'country',
        accessor:'country',
        Footer:'country',
        Filter:ColumnFilter,
        Cell:({cell,row, data, setData})=>{
            console.log('Cell',cell,cell.column.id,row, data, setData)
            return <Text value={cell.value} onChange={
                (newValue) => {
                // Update the data in the parent component
                console.log('New Value',newValue,row.index,cell.column.id);
                const updatedData = [...data];
                console.log(updatedData[row.index],row.index)
                updatedData[row.index][cell.column.id] = newValue;
                console.log('Updated Data', updatedData[row.index][cell.column.id] ,newValue);
                // setData(updatedData);
              }}/>
        }
    }
]



export const GROUP_COLUMNS = [
    {
        Header:'Id',
        accessor:'id',
        Footer:'Id'
    },
    {
        Header:'name',
        
        Footer:'name',
        columns:[
            {
                Header:'first name',
                accessor:'first_name',
                Footer:'first name'
            },
            {
                Header:'last name',
                accessor:'last_name',
                Footer:'last name'
            }
        ]
    },
    {
        Header:'Info',
        Footer:'Info',
        columns:[
            {
                Header:'email',
                accessor:'email',
                Footer:'email'
            },
            {
                Header:'gender',
                accessor:'gender',
                Footer:'gender'
            },{
                Header:'age',
                accessor:'age',
                Footer:'age'
            },
            {
                Header:'country',
                accessor:'country',
                Footer:'country'
            }
        ]
        }
]