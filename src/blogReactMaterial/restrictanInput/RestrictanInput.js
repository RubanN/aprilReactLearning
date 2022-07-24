import { useState } from 'react';

const RestrictanInput = () => {
    const [message, setMessage] = useState('');
    const handleChange = (event) => {
        const result = event.target.value.replace(/[^a-z]/gi, '')
        setMessage(result)
    }
    return (
        <div>
            <div>123 hello 456 world</div>
            <input
                id="message"
                name="message"
                type="text"
                value={message}
                onChange={handleChange}
            />
        </div>
    )
};

export default RestrictanInput;
