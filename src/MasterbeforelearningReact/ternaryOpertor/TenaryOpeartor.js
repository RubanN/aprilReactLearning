import React, { useState } from 'react'

const TenaryOpeartor = () => {
    const [edit, setEdit] = useState(false)
    console.log(edit)
    let age = 28;
    var beverage = (age > 21) ? "BEER" : "JUICE"
    return (
        <div>
            {edit ? (
                <input type="text" />) : (
                <h1>There is input box</h1>
            )
            }
            <button onClick={() => setEdit(!edit)}>Click</button>
            <h1>{beverage}</h1>
        </div>
    )
}

export default TenaryOpeartor