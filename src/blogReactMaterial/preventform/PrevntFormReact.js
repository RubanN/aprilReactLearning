import { useState } from 'react';

const PrevntFormReact = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(message)
        console.log(message)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default PrevntFormReact;
