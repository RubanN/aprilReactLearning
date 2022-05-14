import React, { useState } from "react";
import './style.css'
const DynamicForm = () => {
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }])

    // handle input change
    const handleInputChange = (e, ind) => {
        const { name, value } = e.target
        const list = [...inputList]
        console.log("inputList", list)
        list[ind][name] = value
        console.log("inputList", inputList, list[ind])
        setInputList(list)
    }
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }])
    }
    // handle click event of the Remove button
    const handleRemoveList = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }
    return (
        <div >
            {inputList.map((x, i) => {
                return (
                    <div className="box">
                        <input
                            name="firstName"
                            placeholder="Enter your first name"
                            value={x.firstName}
                            onChange={e => handleInputChange(e, i)}

                        />

                        <input
                            className="ml10"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={x.lastName}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveList(i)}

                            >Remove
                            </button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}></button>}
                        </div>

                    </div>
                )
            })}
            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        </div>
    )
}

export default DynamicForm