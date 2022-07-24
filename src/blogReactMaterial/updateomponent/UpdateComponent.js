import { useEffect, useState } from 'react';

const UpdateComponent = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Count is now: ', count);
    }, [count])
    const handleClick = (e) => {
        setCount(current => current + 1)
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
};

export default UpdateComponent;
