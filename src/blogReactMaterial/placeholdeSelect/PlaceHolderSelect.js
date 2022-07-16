import { useState } from 'react';

const PlaceHolderSelect = () => {
    // 👇️ initial value of empty string (first option)
    const options = [
        { value: '', text: '--Choose an option--', disabled: true },
        { value: 'apple', text: 'Apple 🍏' },
        { value: 'banana', text: 'Banana 🍌' },
        { value: 'kiwi', text: 'Kiwi 🥝' },
    ];
    const [selected, setSelected] = useState('');
    const handleChange = (event) => {
        console.log('Label 👉️', event.target.selectedOptions[0].label);
        console.log(event.target.value);
        setSelected(event.target.value);

    }

    return (
        <div>
            <select value={selected} onChange={handleChange}>
                {/* <option disabled={true} value="">
                    --Choose and option--
                </option>
                <option value="apple">Apple 🍏</option>
                <option value="banana">Banana 🍌</option>
                <option value="kiwi">Kiwi 🥝</option> */}
                {options.map((x) => {
                    return (
                        <option
                            disabled={x.disabled}
                            key={x.value}
                            value={x.value}
                        >{x.text}</option>
                    )

                })}
            </select>
        </div>
    )
};

export default PlaceHolderSelect;
