import axios from 'axios'
import React, { useState, useEffect } from 'react'
import TableHead from "./TableHead"
const Table = () => {
    const [datatable, setDataTable] = useState([])
    console.log("DATA", datatable)
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setDataTable(res.data))
            .catch(err => console.error(err))
    }, [])
    const column = [
        { heading: "Full Name", value: "name" },
        { heading: "Email", value: "email" },
        { heading: "Phone", value: "phone" },
        { heading: "City", value: "address.city" },
    ]
    return (
        <div>
            <TableHead data={datatable} column={column} />
        </div>
    )
}

export default Table