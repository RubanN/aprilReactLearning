import React, { useState } from 'react'

export const FirstReactObject = () => {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    return (
        <form>
            <input type="text"
                value={name.firstName}
                onChange={e =>
                    setName({ ...name, firstName: e.target.value })} />
            <input type="text"
                value={name.lastName}
                onChange={e =>
                    setName({ ...name, lastName: e.target.value })} />
            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>
        </form>
    )
}
export const SecondObject = () => {
    const [name, setName] = useState({ firstName: "", lastName: "" })
    return (
        <form>
            <input
                type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })} />
            <h1>{name.firstName}</h1>

        </form>
    )
}
export const ThirdObject = () => {
    const [myObject, setMyObject] = useState({
        myName: "ruban",
        myAge: 20,
        myDegree: "BCA "
    })
    const [text, setText] = useState({
        myName: "",
        myAge: "",
        myDegree: "",
    })
    const updateObject = () => {
        setMyObject(prev => {
            return {
                ...prev,
                myName: text.myName,
                myAge: text.myAge,
                myDegree: text.myDegree,
            }
            setText("")

        })
    }
    return (
        <>
            <h1>This is my name {myObject.myName} and {myObject.myAge} The degree is {myObject.myDegree}</h1>
            <button onClick={updateObject}>Change Profile</button>
            <input type="text" value={text.myName} onChange={e => setText(e.target.value)} />
        </>
    )
}


