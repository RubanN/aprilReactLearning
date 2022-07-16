import { useState } from 'react';
// 👉️ forgot to import useState
const Definedreact = () => {
    // ⛔️ 'useState' is not defined  no-undef
    // Uncaught ReferenceError: useState is not defined
    const [count, setCount] = useState(0);
    const handleClick = (event) => {
        setCount(c => c + 1)
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
};

export default Definedreact;
