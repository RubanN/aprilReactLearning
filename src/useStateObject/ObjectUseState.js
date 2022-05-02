import React, { useState } from 'react'

export const ObjectUseState = () => {
    const [name, setName] = useState({ firstName: "", lastName: "", })
    return (
        <form>
            <input type="text" value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input type="text" value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>You first name is {name.firstName}</h2>
            <h2>You first name is {name.lastName}</h2>
        </form>

    )
}

export const ObjectUseState1 = () => {
    const [user, setUser] = useState({
        name: "", email: "", age: ""
    })

    const handleChange = (e) => {
        e.persist()
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <>
            <label>Name:</label>
            <input type="text" name="name" value={user.name}
                onChange={handleChange}
            />
            <br />

            <label>Email:</label>
            <input type="text" name="email" value={user.email}
                onChange={handleChange}
            />
            <br />

            <label>Age:</label>
            <input type="text" name="age" value={user.age}
                onChange={handleChange}
            />
            <br />
            <label>Output:</label>
            <pre>{JSON.stringify(user, null, 2)}</pre>

        </>
    )
}