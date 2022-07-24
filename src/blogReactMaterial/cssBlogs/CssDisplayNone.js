import { useState } from 'react';

const CssDisplayNone = () => {
    const [isShown, setIsShown] = useState(true);
    const handleClick = () => {
        setIsShown(cur => !cur);
    }

    return (
        <div>
            <button onClick={handleClick}>Toggle visibility</button>
            <div style={{ display: isShown ? 'block' : "none" }}>
                <h1>Some content here</h1>
            </div>
        </div>
    )
};

export default CssDisplayNone;
