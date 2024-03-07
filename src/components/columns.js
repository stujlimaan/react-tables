import {format} from 'date-fns'
import ColumnFilter from './ColumnFilter'

export const COLUMNS = [
    {
        Header:'Id',
        accessor:'id',
        Footer:'Id',
        Filter:ColumnFilter,
        disableFilters:true

    },
    {
        Header:'First Name',
        accessor:'first_name',
        Footer:'First Name',
        Filter:ColumnFilter
    }
    ,
    {
        Header:'Last Name',
        accessor:'last_name',
        Footer:'Last Name',
        Filter:ColumnFilter
    },
    {
        Header:'email Address',
        accessor:'email',
        Footer:'email Address',
        Filter:ColumnFilter
    },
    {
        Header:'gender',
        accessor:'gender',
        Footer:'gender',
        Filter:ColumnFilter
    },
    {
        Header:'age',
        accessor:'age',
        Footer:'age',
        Filter:ColumnFilter
    },
    {
        Header:'country',
        accessor:'country',
        Footer:'country',
        Filter:ColumnFilter
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