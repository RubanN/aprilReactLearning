import React, { useState } from 'react'

const ThridSpread = () => {
    const [datas, setDatas] = useState([
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
    ]);
    const updateFieldChanged = (name, index,) => (event) => {
        let newArr = datas.map((item, i) => {
            if (index == i) {
                return { ...item, [name]: event.target.value }
            } else {
                return item;
            }
        })
        setDatas(newArr)
    }
    return (
        <React.Fragment>
            {datas.map((data, index) => {
                <>
                    <li key={data.name}>
                        <input name="name" value={data.name} onChange={updateFieldChanged("name", index)} />
                    </li>
                    <li key={data.gender}>
                        <input
                            type="text"
                            name="gender"
                            value={data.gender}
                            onChange={updateFieldChanged("gender", index)}
                        />
                    </li>;
                </>

            })}
        </React.Fragment>
    )
}

export default ThridSpread