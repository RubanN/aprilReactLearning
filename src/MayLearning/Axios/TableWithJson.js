import React, { useState, useEffect } from 'react'
import axios from "axios";

const TableWithJson = () => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setTableData(response.data)
            })
    }, [])
    console.log("response", tableData)
    return (
        <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                <th>Avatar</th>
            </thead>
            <tbody>
                {tableData.map((data) => <tr>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.website}</td>
                    <td>{data.phone}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default TableWithJson