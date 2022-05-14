import React, { useState } from 'react'
import Select from 'react-select';

const ReactSelectonlyone = () => {
    const data = [
        {
            value: 1,
            label: "cerulean"
        },
        {
            value: 2,
            label: "fuchsia rose"
        },
        {
            value: 3,
            label: "true red"
        },
        {
            value: 4,
            label: "aqua sky"
        },
        {
            value: 5,
            label: "tigerlily"
        },
        {
            value: 6,
            label: "blue turquoise"
        }
    ];
    // set value for default selection
    const [selectValue, setSelectValue] = useState(3)
    const handleChange = (e) => {
        setSelectValue(e.value)
    }
    return (
        <div>
            <Select
                placeholder="Select a value"
                value={data.find(obj => obj.value === setSelectValue)}// set selected value
                options={data}// set list of the data
                onChange={handleChange}
            />
            {selectValue && <div style={{ marginTop: "20px", lineHeight: "25px" }}>
                <div><b>Selected Value: </b> {selectValue}</div>

            </div>}
        </div>
    )
}

export default ReactSelectonlyone