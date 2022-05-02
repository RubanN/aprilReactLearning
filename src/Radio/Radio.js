import React, { useState } from 'react';
const genderList = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" }
];
const Radio = () => {
    const [gender, setGender] = useState(null)
    const handleChange = (e) => {
        setGender(e.target.value)
    }
    return (
        <div>
            {genderList.map((x, i) => <label>
                <input
                    name="gender"
                    type="radio"
                    value={x.value}
                    onChange={handleChange}
                />
                {x.label}
            </label>)}
            <div>Selected value: {gender}</div>

        </div>
    )
}

export default Radio