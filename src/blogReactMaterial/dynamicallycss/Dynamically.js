import { useState } from 'react';
import "./style.css"

const Dynamically = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(cur => !cur);
    }
    const myClass = 'bg-salmon';

    return (
        <div>
            <div className={`text-white ${myClass}`}>Hello world</div>
            <button
                className={`font-lg ${isActive ? 'bg-salmon text-white' : ''}`}
                onClick={handleClick}

            >Click</button>

        </div>
    )
};

export default Dynamically;
