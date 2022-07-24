import { useState } from 'react';

const DetectBackSpace = () => {
    const [message, setMessage] = useState('');
    const handleKeyDown = (event) => {
        console.log('User pressed: ', event.key);
        if (event.key === "Backspace") {
            console.log('Backspace key pressed ✅');

        }
    }
    return (
        <div>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
                id="message"
                onKeyDown={handleKeyDown}

                name="message"
                autoComplete="off"
            />

        </div>
    )
};

export default DetectBackSpace;
