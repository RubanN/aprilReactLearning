import { useState } from 'react';

const ReactonKeyPress = () => {
    const [message, setMessage] = useState('');
    const handleKeyPress = event => {
        console.log(event.key);
        if (event.key === "Enter") {
            console.log('✅ Enter key pressed');

        }
        // 👇️ access input value from state
        console.log(message);

        // 👇️ access input value from event object
        // console.log(event.target.value)
    }

    return (
        <div>
            <input
                type="text"
                id="message"
                name="message"
                value={message}
                onKeyPress={handleKeyPress}
                onChange={event => setMessage(event.target.value)}

            />

        </div>
    )
};

export default ReactonKeyPress;
