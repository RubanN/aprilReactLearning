import { useState, useRef } from 'react';

const GetTextAreaValue = () => {
    const ref = useRef(null);
    const [message, setMessage] = useState('');
    const handleMessage = (e) => {
        setMessage(e.target.value)
        if (e.target.value.toUpperCase() === "RUBAN") {
            alert("You are enter right word")
        } else {
            // alert("Wrong")
            console.log("WRONG");
        }
    }
    const handleClick = (e) => {
        if (ref.current.value === "ruban") {
            alert("You are enter right word")

        } else {
            console.log("Wrong")
        }
        console.log(ref.current.value);
    }
    return (
        <div>
            <label htmlFor="message">My Textarea</label>
            {/* <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessage}
            /> */}
            <textarea ref={ref} id="message" name="message" />
            <button onClick={handleClick}>CLICK</button>
        </div>
    )
};

export default GetTextAreaValue;
