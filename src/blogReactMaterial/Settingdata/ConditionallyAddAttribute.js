import { useState } from 'react';
import "./style.css"
const ConditionallyAddAttribute = () => {
    const [count, setCount] = useState(0);
    const role = 'link';
    let myClass = '';
    if (count >= 0) {
        myClass = 'bg-salmon'
    }
    return (
        <div>
            {/* 👇️ conditionally set attribute value with ternary operator */}
            <button
                disabled={count > 3 ? true : null}
                onClick={() => setCount(current => current + 1)}
            >
                Count: {count}

            </button>
            {/* 👇️ using a variable */}
            <a href="https://google.com" role={role}>
                Google.com
            </a>
            {/* 👇️ interpolating a variable */}
            <h2 className={`text-white ${myClass}`}>Some content</h2>
        </div>
    )
};

export default ConditionallyAddAttribute;
