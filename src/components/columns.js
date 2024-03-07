import {format} from 'date-fns'

export const COLUMNS = [
    {
        Header:'Id',
        accessor:'id',
        Footer:'Id'

    },
    {
        Header:'First Name',
        accessor:'first_name',
        Footer:'First Name'
    }
    ,
    {
        Header:'Last Name',
        accessor:'last_name',
        Footer:'Last Name'
    },
    {
        Header:'email Address',
        accessor:'email',
        Footer:'email Address'
    },
    {
        Header:'gender',
        accessor:'gender',
        Footer:'gender'
    },
    {
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