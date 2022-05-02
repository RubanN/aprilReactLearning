import React, { useState } from 'react'

const FirstSpread = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'john',
            gender: 'm'
        },
        {
            id: 2,
            name: 'mary',
            gender: 'f'
        }
    ]);
    const updateFieldChanged = index => e => {
        console.log('index: ' + index);
        console.log('property name: ' + e.target.name);
        let newArr = [...data]
        newArr[index] = e.target.value
    }
    return (
        <div>
            {data.map((x, index) => {
                <li key={x.name}>
                    <input type="text" name="name" value={x.name} onChange={updateFieldChanged(index)} />

                </li>
            })}
        </div>
    )
}

export default FirstSpread