import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

const MainLoginForm = () => {
    const [inputField, setInputField] = useState([
        { firstName: "", lastName: "", }
    ])
    const handleChangeInput = (index, event) => {
        console.log("INDEX", index, event.target.value)
        const values = [...inputField];
        values[index][event.target.value] = event.target.value
        setInputField(values)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("inputField", inputField)
    }
    return (
        <div>
            <h1>Add new form</h1>
            <form onSubmit={handleSubmit}>
                {inputField.map((input, index) => (
                    <div key={index}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            variant='filled'
                            value={input.firstName}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        <TextField
                            name="lastName"
                            label="Last Name"
                            variant='filled'
                            value={input.lastName}
                            onChange={event => handleChangeInput(index, event)}

                        />
                        <button onClick={handleSubmit}>Send</button>
                    </div>
                ))}

            </form>
        </div>
    )
}

export default MainLoginForm