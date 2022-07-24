import { useState } from 'react';

const NothingReturn = () => {
    const [count, setCount] = useState(0);
    if (count > 3) {
        return null
    }
    console.log(count, "Rerender")
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Count:{count}</h2>
        </div>
    )
};

export default NothingReturn;
