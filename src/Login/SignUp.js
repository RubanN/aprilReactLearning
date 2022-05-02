import React, { useState } from 'react'

const SignUp = () => {
    const [loginDetails, setLoginDetails] = useState({
        name: "ruban",
        email: "ruban@gmail.com",
        password: "123"
    })
    const { name, email, password } = loginDetails
    const handleSubmit = (event, index) => {
        event.preventDefault()

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Enter your name" onChange={(e, index) => handleSubmit(e, index)} />
            <input type="submit" />
        </form>
    )
}

export default SignUp