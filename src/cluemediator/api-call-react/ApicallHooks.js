import React, { useState } from 'react';
import "./style.css"
const ApicallHooks = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUserList = () => {
        setLoading(true);
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                setUserList(res.data);
                setLoading(false);
            });
    }
    const removeList = (i) => {
        // setLoading(true);
        const remove = [...userList]
        remove.splice(i, 1);
        setUserList(remove)
        // setLoading(false);
    }

    return (
        <div className="container App">
            <h4 className="d-inline-block">Clue Mediator</h4>
            <button
                className="btn btn-info float-right"
                onClick={getUserList}
            >{loading ? "Loading..." : 'Get User List'}</button>
            <div className="clearfix"></div>
            <table class="table mt-3">
                <thead class="thead-dark">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </thead>
                <tbody>
                    {userList.map((x, i) => <tr>
                        <td>{x.first_name}</td>
                        <td>{x.last_name}</td>
                        <td>{x.email}</td>
                        <td><img src={x.avatar} width="50" height="50" /></td>
                        <button className="btn btn-info float-right" onClick={(i, e) => removeList()}>Remove</button>
                    </tr>)}
                    {userList.length === 0 && <tr>
                        <td className="text-center" colSpan="4">
                            <b>No data found to display.</b>
                        </td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
};

export default ApicallHooks;
