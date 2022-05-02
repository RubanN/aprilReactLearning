import React, { useState } from 'react'

const MuilpleInput = () => {
    const [formList, setFormList] = useState({
        email: "",
        username: "",
        password: "",
    })
    console.log(formList, "formList")
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormList(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const { email, username, password } = formList
    return (
        <div>
            <input name="email" type="email" value={email} onChange={handleChange} />
            <input name="username" type="text" value={username} onChange={handleChange} />

            <input name="password" type="password" value={password} onChange={handleChange} />
        </div>
    )
}

export default MuilpleInput