import React, { useState } from 'react';
import Select from 'react-select';

const MulpleSelect = () => {
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
    const [selectedOption, setSelectedOption] = useState(null)
    // handle onChange event of the dropdown
    const handleChange = (event) => {
        setSelectedOption(event)
    }
    return (
        <div>
            <Select
                isMulti
                placeholder="Select option"
                value={selectedOption}
                options={data} // set list of the data
                onChange={handleChange}// assign onChange function
            />
            {selectedOption && <div style={{ marginTop: "20px", lineHeight: '25px' }}>
                <b>Selected Options</b><br />
                <pre>{JSON.stringify(selectedOption, null, 2)}</pre>

            </div>}
        </div>
    )
}

export default MulpleSelect