import React, { useState } from 'react';

const ReactUseState = () => {
    const [age, setAge] = useState(20);
    const [address, setAddress] = useState({
        addressLine1: '14 read road',
        town: 'react town',
    });
    const handleUpdate = () => {
        setAge(35)
        setAddress({
            addressLine1: 'New address',
            town: "precy street"
        })
    }
    //handling simple forms - username, password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        alert(`username:${username} password:${password}`);
        // validation, API calls etc

    }
    // conditional render - showing/hide a modal
    const [showText, setShowText] = useState(false);

    return (
        <>
            <div>age:{age}</div>
            <button onClick={() => setAge((prev) => prev + 1)}>age</button>
            <hr />
            <div>Address line 1:{address.town}</div>
            <div>
                <button onClick={() => setAddress((prev) => {
                    return {
                        ...prev,
                        addressLine1: "new address", town: 'new town'
                    }
                })}>update address</button>
                <hr />
                <div>
                    <button onClick={handleUpdate}>Update all</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                <hr />
                {showText ? <span>Hello i am a  modal</span> : null}
                <div>
                    <button onClick={() => setShowText(!showText)}>Toggle Text</button>
                </div>
            </div>
        </>
    )
}

export default ReactUseState