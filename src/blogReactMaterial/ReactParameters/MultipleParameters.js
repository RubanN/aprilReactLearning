import { useState } from 'react';

const MultipleParameters = () => {
    const [message, setMessage] = useState('');
    const handleChange = (event, param1, param2) => {
        setMessage(event.target.value);
        console.log(event.target.value);
        console.log(param1);
        console.log(param2);
    }
    return (
        <div>
            <input
                id="message"
                name="message"
                value={message}
                onChange={event => handleChange(event, 'hello', 'world')}
            />

        </div>
    )
};

export default MultipleParameters;
