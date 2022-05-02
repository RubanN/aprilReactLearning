import React, { useState } from 'react'

const SecondSpread = () => {
    const initial_data = [
        {
            id: 1,
            name: "john",
            gender: "m",
        },
        {
            id: 2,
            name: "mary",
            gender: "f",
        },
    ];
    const [datas, setDatas] = useState(initial_data);

    return (
        <div>
            {datas.map((data, index) => (
                <li key={index}>
                    <input type="text" value={data.name} onChange={(e) => {
                        data.name = e.target.value;
                        setDatas([...datas])
                    }} />
                </li>
            ))}
        </div>
    )
}

export default SecondSpread