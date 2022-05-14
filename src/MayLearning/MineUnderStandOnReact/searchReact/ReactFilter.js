import React, { useState } from 'react'

const ReactFilter = () => {
    const searchList = [
        "ford",
        "swift",
        "maruthi",
        "i10",
        "i20",
        "tesla",
        "bailno",
        "audi"
    ]
    const [inputlist, serachInputList] = useState(searchList)
    const handleSerachList = (e) => {
        let serachuery = e.target.value
        const updateList = [...searchList]
        //The toLowerCase() method does not change the original string.
        updateList.filter((item) => {
            return item.toLowerCase().indexOf(serachuery()) !== -1
        })
        serachInputList(updateList)
    }
    return (
        <div>
            <input
                onChange={handleSerachList}
            />

            {inputlist.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    )
}

export default ReactFilter