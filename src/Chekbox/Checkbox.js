import React, { useState } from 'react'

const languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" }
];
const Checkbox = () => {
    const [lang, setLang] = useState([])
    const handleChange = (e) => {
        console.log(e)
        const { value, checked } = e.target
        if (checked) {
            // push selected value in list
            setLang(prev => [...prev, value])
        } else {
            setLang(prev => prev.filter(x => x !== value))
        }
    }
    return (
        <div>
            {languageList.map((x, i) => <label key={i}>
                <input
                    type="checkbox"
                    name="lang"
                    value={x.value}
                    onChange={handleChange}
                    checked={false}
                />
                {x.value}
            </label>)}
        </div>
    )
}

export default Checkbox