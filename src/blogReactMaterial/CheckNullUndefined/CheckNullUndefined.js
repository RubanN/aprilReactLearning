import { useEffect, useState } from 'react';

const CheckNullUndefined = () => {
    const [message, setMessage] = useState(undefined);
    useEffect(() => {
        // 👇️ Check if NOT undefined or null
        if (message !== undefined && message !== null) {
            // console.log('✅ variable is NOT undefined or null');

        }
        if (message === undefined || message === null) {
            // console.log('✅ variable is undefined or null');

        } else {
            // console.log('⛔️ variable is NOT undefined or null');

        }
        if (message) {
            console.log('✅ variable is truthy');

        }
        if (!message) {
            console.log('⛔️ variable is falsy');

        }



    }, [message])
    return (
        <div>
            <button onClick={() => setMessage("Hellow world")}>Set Message</button>
            <h2>{message}</h2>

        </div>
    )
};

export default CheckNullUndefined;
