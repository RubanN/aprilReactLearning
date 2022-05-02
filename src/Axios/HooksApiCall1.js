import React, { useState } from 'react';

const HooksApiCall1 = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false)

    const getUserList = () => {
        setLoading(true)
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                setUserList(res.data);
                setLoading(false)
            })
    }
    return (
        <div>
            <button
                className="btn btn-info float-right"
                onClick={getUserList}
                disabled={loading}
            >
                {loading ? "Loading...." : "Get user list"}
            </button>
            <table class="table mt-3">
                <thead class="thead-dark">
                    <th>First Name</th>
                    <th>Last  Name</th>
                    <th>Last </th>
                    <th>Avatar</th>
                </thead>
                <tbody>
                    {userList.map(x => <tr>
                        <td>{x.first_name}</td>
                        <td>{x.last_name}</td>
                        <td>{x.email}</td>
                        <td><img src={x.avatar} width="50" height="50" /></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default HooksApiCall1