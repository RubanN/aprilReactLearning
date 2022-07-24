import { useEffect, useState } from 'react';

const UseEffectReference = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count id", count);
        return () => {
            console.log('Only runs on unmount')
        }
    }, [count])
    const handleClick = event => {
        setCount(current => current + 1);
    };
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>


        </div>
    )
};

export default UseEffectReference;
