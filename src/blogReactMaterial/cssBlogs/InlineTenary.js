import { useState } from 'react';

const InlineTenary = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2
                style={{
                    backgroundColor: count > 0 ? "lime" : "salmon",
                    color: count > 0 ? "white" : "powderblue",
                }}>
                Count: {count}
            </h2>
            <h2 style={count > 0 ? { backgroundColor: 'lime', color: 'white' } : { backgroundColor: 'salmon', color: 'powderblue' }}>
                Count: {count}

            </h2>
            <button onClick={() => setCount(current => current + 1)}>
                Increment
            </button>
        </div>
    )
};

export default InlineTenary;
