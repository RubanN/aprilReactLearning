import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const HooksApiCall = () => {
    const [userList, setUserList] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then((res) => {
                setUserList(res.data.data)
            })
    }, [])
    console.log("userList", userList)
    return (
        <div className="container-fluid p-3">
            <table class="table table-sm mt-3">
                <thead class="thead-dark">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </thead>
                <tbody>
                    {userList.map(user =>
                        <tr >
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <img src={user.avatar} />
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default HooksApiCall